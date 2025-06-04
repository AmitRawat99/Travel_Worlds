import React, { useState, useRef, useContext, use } from 'react'
import styled from 'styled-components'
import { Col, Row, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import CalculatorAvgRating from '../utils/avgRating'
import avatar from '../assets/Images/avatar.jpg'
import '../styles/TourDetails.scss'
import Booking from '../components/Booking/Booking'
import useFetch from '../hooks/userFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext.jsx'
const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`

function ToursDetails() {
  const { id } = useParams()

  const reviewsMsg = useRef('');
  const [tourRating, setTourRating] = useState(null)

  // fatch data from database 

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong while fetching the tour.</p>;
  if (!tour) return <p>No tour found.</p>;
  const { user } = useContext(AuthContext)



  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour;





  const { totalRating, avgRating } = CalculatorAvgRating(reviews)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }



  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewsMsg.current.value;
    console.log(reviewText);

    if (!tourRating) {
      alert('Please select a rating.');
      return;
    }

    try {
      if (!user || user === undefined || user === null) {
        alert('Sign in the form');
        return;
      }

      const reviewObj = {
        username: user.username,
        reviewText: reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        window.location.reload()
      } else {
        alert(result.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Something went wrong');
    }
  };




  return (
    <>
      <ContainerBox>
        {
          loading && <h4 className='text-center pt-5'>Loading....</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
          !loading && !error && <Row>
            <Col lg='8'>
              <div className="tour_content">
                <img src={photo} alt="" />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-item-center gap-5">
                    <span className='tour_rating d-flex align-item-center gap-1'>
                      <i style={{ color: 'var(--secondary-color' }} class='ri-star-fill'></i>{avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not Rating' : <span>({reviews.length})</span>}
                    </span>
                    <span><i className='ri-map-pin-fill'></i>{address}</span>
                  </div>
                  <div className="tour_extra_details">
                    <span><i className='ri-map-pin-2-line'></i>{city}</span>
                    <span><i className='ri-money-dollar-circle-line'></i>${price}/per persion</span>
                    <span><i className='ri-group-line'></i>{maxGroupSize} People</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className="tour_review mt-4">
                  <h4>Reviews ({reviews.length} Reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-item-center gap-3 rating_group">
                      <span onClick={() => setTourRating(1)}>1<i className='ri-star-s-fill'></i></span>
                      <span onClick={() => setTourRating(2)}>2<i className='ri-star-s-fill'></i></span>
                      <span onClick={() => setTourRating(3)}>3<i className='ri-star-s-fill'></i></span>
                      <span onClick={() => setTourRating(4)}>4<i className='ri-star-s-fill'></i></span>
                      <span onClick={() => setTourRating(5)}>5<i className='ri-star-s-fill'></i></span>
                    </div>
                    <div className="review_input">
                      <input type="text" ref={reviewsMsg} placeholder='Share your Thought' required />
                      <button onClick={submitHandler} className="btn primary__btn text-white" type='button'>Submit</button>
                    </div>
                  </Form>
                  <Form>
                    <ListGroup className='user_reivews'>
                      {
                        reviews?.map((review) => {
                          return (
                            <div key={review} className="reviews_item d-flex align-item-center">
                              <img src={avatar} alt="" />
                              <div className="w-100 mt-5">
                                <div className="d-flex align-item-center justify-content-between">
                                  <div>
                                    <h4>{review.username}</h4>
                                    <p>{new Date('01-12-2024').toLocaleDateString('en-US', options)}</p>
                                  </div>
                                  <span className="d-flex align-item-center">{review.rating}
                                    <i className='ri-star-s-fill'></i>
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                              </div>
                            </div>
                          )
                        })
                      }
                    </ListGroup>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg='4' className='tour_details'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        }
      </ContainerBox>
    </>
  )
}

export default ToursDetails

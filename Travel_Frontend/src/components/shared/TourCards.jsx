import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/tour_cards.scss'
import CalculatorAvgRating from '../../utils/avgRating';

function TourCards({ tour }) {
  const { id, title, photo, price, featured, reviews = [], city } = tour;
  const { totalRating, avgRating } = CalculatorAvgRating(reviews)

  return (
    <>
      <div className="card_tour mt-5">
        <Card >
          <div className="tour_img">
            <img src={photo} alt="" />
            {featured && <span>Featrues</span>}
          </div>
          <CardBody>
            <div className="card_top d-flex align-item-center justify-content-between ">
              <span className='tour_location d-flex align-item-center gap-1'>
                <i class='ri-map-pin-line'></i>{city}
              </span>
              <span className='tour_rating d-flex align-item-center gap-1'>
                <i class='ri-star-fill'></i>{avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? 'Not Rating' : <span>({reviews.length})</span>}
              </span>
            </div>
            <h5 className='tour_title'><Link to={`/tours/${tour._id}`}>{title}</Link></h5>
            <div className="card_bottom d-flex  mt-3">
              <h5>${price} <span>/Per Month</span></h5>
              <button className=' booking_btn'>
                {/* <Link to={`/tours/${id}`}>Book Now</Link> */}
                <Link to={`/tours/${tour._id}`}>Book Now</Link>

              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default TourCards

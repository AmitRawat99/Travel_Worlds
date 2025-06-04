import React, { useState, useEffect, useContext } from 'react'
import '../../styles/Booking.scss'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { BASE_URL } from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'

const Booking = ({ tour, avgRating }) => {

    const { price, reviews, title } = tour;
    const { user } = useContext(AuthContext)
    const [booking, setbooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: "",
        phone: "",
        guessSize: 1,
        bookAt: "",
    })

    const handleChange = e => {
        setbooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
        e.preventDefault();
        console.log(booking);
    }

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(booking);

        try {
            if (!user || user === undefined || user === null) {
                return alert('Please Sign In')
            }

            // Make the booking request
            const res = await fetch(`${BASE_URL}/booking`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                credentials: "include",  // Ensure cookies are sent
                body: JSON.stringify(booking)
            });

            const result = await res.json();  // Make sure to await the response

            if (!res.ok) {
                alert(result.message);  // Show error message if not successful
            } else {
                // Navigate to thank you page if booking was successful
                navigate("/thank-you");
            }

        } catch (error) {
            console.error("Network Problem")
            alert(error.message)
        }
    }

    const serviceFee = 10;
    const TotalAmount = Number(price) * Number(booking.guessSize) + Number(serviceFee)

    return (
        <div className="booking">
            <div className="booking_top d-flex align-item-center justify-content-between">
                <h3>${price} <span>/Per Person</span></h3>
                <span className='tour_rating d-flex align-item-center gap-1'>
                    <i className='ri-star-fill'></i>{avgRating === 0 ? null : avgRating}({reviews.length})
                </span>
            </div>
            <div className="booking_form">
                <h5>Information</h5>
                <Form className="booking_info_form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Fill The Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Enter Your Number' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-item-center gap-3'>
                        <input type="date" placeholder='Fill The Name' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Fill The Name' id='guessSize' required onChange={handleChange} />
                    </FormGroup>
                    <Button type="submit" className='btn primary__btn w-100 mt-4'>Book Now</Button>
                </Form>
            </div>
            <div className="booking_bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-item-center gap-2'>${price}<i className='ri-close-line'></i>1 Person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className=' total border-0 px-0'>
                        <h5>Total</h5>
                        <span>${TotalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    )
}

export default Booking;

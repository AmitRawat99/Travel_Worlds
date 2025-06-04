import React from 'react'
import '../styles/services.scss'
import ServicesList from './ServicesList'

function ServicesCards({ item }) {

    const {imgUrl, title, disc} = item;

    return (
        <>
            <div className='service_item'>
                <div className="service_img">
                    <img src={imgUrl} alt={title} />
                </div>
                <h5>{title}</h5>
                <p>{disc}</p>
            </div>
        </>
    )
}

export default ServicesCards





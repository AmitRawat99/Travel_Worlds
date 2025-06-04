import React from 'react'
import '../styles/services.scss'
import { Col } from 'reactstrap'

import WeatherImg from '../../public/Images/weather.png'
import GoideImg from '../../public/Images/guide.png'
import CustomizationImg from '../../public/Images/customization.png'
import ServicesCards from './ServicesCards'


const ServiceData =[
    {
        imgUrl : WeatherImg,
        title : 'Calculate Weather',
        disc : 'lorem ipsum dolor sit ame,'
    },
    {
        imgUrl : GoideImg,
        title : 'Best Tour Guide',
        disc : 'lorem ipsum dolor sit ame,'
    },
    {
        imgUrl : CustomizationImg,
        title : 'Customization',
        disc : 'lorem ipsum dolor sit ame,'
    },
  
]

function ServicesList() {
  return (
    <>
        {ServiceData.map((item, idx) => (
            <Col lg="3" key={idx}>
                <ServicesCards item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServicesList

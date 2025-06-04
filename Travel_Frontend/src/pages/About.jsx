import React from 'react'
import About_Section from '../components/shared/About'
import '../styles/About.scss'
import styled from 'styled-components'
import NewsLatter from '../components/shared/NewsLatter'
import Testimonial from '../components/Testimonial/Testimonial'
import { Col, Row } from "reactstrap";
const ContainerBox = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 20px;
`

function About() {
  return (
    <>
      <About_Section title={'Exploring the World '} />

      <section>
        <ContainerBox>
          <div className="responsive-container-block bigContainer">
            <div className="responsive-container-block Container bottomContainer">
              <div className="allText bottomText">
                <h3 className="text-blk headingText">
                  About
                </h3>
                <h4 className="text-blk subHeadingText">
                  We build to your bespoke
                </h4>
                <p className="text-blk description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
                </p>
                <a>
                  <button className="explore">
                    View More
                  </button>
                </a>
              </div>
              <div className="videoContainer">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/35npVaFGHMY?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>

                <img className="dotsImg image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" />
              </div>
            </div>
          </div>
         
        </ContainerBox>
        <ContainerBox>
          <Col lg='12'>
            <h5 className="services_subtitle" >Explore</h5>
            <h2 className="testimonial_title">What are fans say about us</h2>
          </Col>
          <Col lg='12' className ='mt-5'>
            <Testimonial />
          </Col>
        </ContainerBox>
      </section>
    </>
  )
}

export default About

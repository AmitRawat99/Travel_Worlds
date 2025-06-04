import React from 'react'
import '../../styles/NewsLatter.scss'
import { Row, Col } from 'reactstrap'
// import MaleTourist from '../../assets/Images/male-tourist.png'
import MaleTourist from '../../../public/Images/male-tourist.png'

import styled from 'styled-components'
const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`

function NewsLatter() {
  return (
    <>
      <section className="newsletter">
        <ContainerBox>
          <Row>
            <Col lg='6'>
              <div className="newsletter_content">
                <h2>Subscribe noew to get useful traveling information</h2>
                <div className="newsletter_input">
                  <input type="email" placeholder='Enter Your Email' />
                  <button className="btn newslatter_btn">Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, quod?</p>
              </div>
            </Col>
            <Col lg='6'>
              <div className="newsletter_img">
                <img src={MaleTourist} alt="" />

              </div>
            </Col>
          </Row>
        </ContainerBox>
      </section>
    </>
  )
}

export default NewsLatter

import React from 'react'
import { Row, Col, ListGroup, ListGroupItem, } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../styles/Footer.scss'
import Logo from '../../assets/Images/logo.png'
const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`

const FooterLink = [
  { id: 1, path: "/home", display: "Home" },
  { id: 2, path: "/about", display: "About" },
  { id: 3, path: "/tours", display: "Tours" },
  { id: 4, path: "/contact", display: "Contact" },
];

const Quick_links = [
  { id: 1, path: "/gallery", display: "Gallery" },
  { id: 2, path: "/login", display: "Login" },
  { id: 3, path: "/register", display: "Register" },
];


function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
      <ContainerBox className='footer'>
        <Row>

          <Col lg='3'>
            <div className="logo">
              <img src={Logo} alt="" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, nihil.</p>
              <div className="social_links d-flex align-item-center gap-4">
                <span>
                  <Link tp='#'><i className='ri-youtube-line'></i></Link>
                </span>
                <span>
                  <Link tp='#'><i className='ri-github-fill'></i></Link>
                </span>
                <span>
                  <Link tp='#'><i className='ri-facebook-circle-line'></i></Link>
                </span>
                <span>
                  <Link tp='#'><i className='ri-instagram-line'></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='Footer_Links_item'>Discover</h5>
            <ListGroup >
              {Quick_links.map((links, idx) => (
                <ListGroupItem key={idx} className='ps-0 border-0'>
                  <Link to={links.path}>{links.display}</Link>
                </ListGroupItem>
              ))

              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='Footer_Links_item'>Quick Links</h5>
            <ListGroup >
              {FooterLink.map((links, idx) => (
                <ListGroupItem key={idx} className='ps-0 border-0'>
                  <Link to={links.path}>{links.display}</Link>
                </ListGroupItem>
              ))

              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='Footer_Links_item'>Contact</h5>
            <ListGroup >
              <ListGroupItem className=' footer-quick-links ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='d-flex align-item-center gap-2'><span><i className='ri-map-pin-line'></i></span>Address:</h6>
                <p className='mb-0'>Uttam Nagar New Delhi.</p>
              </ListGroupItem>
              <ListGroupItem className='footer-quick-links ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className=' d-flex align-item-center gap-2'><span><i className='ri-mail-line'></i></span>Email:</h6>
                <p className='mb-0'>Example1234@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className=' footer-quick-links ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='d-flex align-item-center gap-2'><span><i className='ri-phone-fill'></i></span>Phone:</h6>
                <p className='mb-0'>+918978675668</p>
              </ListGroupItem>

            </ListGroup>
          </Col>
          <Col lg='12'>
           <p className='copy_right text-center mt-5'>Copyright { year} , Design & Devlope By Amit_Rawat_</p>
          </Col>
        </Row>

      </ContainerBox>
    </>
  )
}

export default Footer

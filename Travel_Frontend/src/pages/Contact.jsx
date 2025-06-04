import React from 'react'
import '../styles/Contact_us.scss'
import Contact_us from '../components/shared/Contact_us'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, ListGroupItem, Form, FormGroup, Input, Button, Label } from 'reactstrap'
import styled from 'styled-components'
import mapVector from '../../public/img/map-vector.png'
// import experience from '../assets/Images/experience.png'
import experience from '../../public/Images/experience.png'
const ContainerBox = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 20px;
`

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  height: '100%'
}

function Contact() {
  return (
    <>
      <Contact_us title={'Contact Us'} />

      {/* Contact Info Section */}
      <section>
        <div className="contact-sections">
          <div className="contact-title">
            <h2>Let's Contact</h2>
          </div>
          <ContainerBox>
            <Row>
              <Col lg="3" md="6" sm="12">
                <div className="contact-content" style={style}>
                  <Link to="#"><i className="ri-map-pin-line ri-2x"></i></Link>
                  <h4>Our Main Office</h4>
                  <ListGroup>
                    <ListGroupItem className="border-0 p-0">Soho 94 boardway st, New York, NY 1001</ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="contact-content" style={style}>
                  <Link to="#"><i className="ri-phone-line ri-2x"></i></Link>
                  <h4>Phone</h4>
                  <ListGroup>
                    <ListGroupItem className="border-0 p-0">2030405060 (Toll Free)</ListGroupItem>
                    <ListGroupItem className="border-0 p-0">909-909-9900</ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="contact-content" style={style}>
                  <Link to="#"><i className="ri-mail-line ri-2x"></i></Link>
                  <h4>Email</h4>
                  <ListGroup>
                    <ListGroupItem className="border-0 p-0">travelWorld12@gmail.com</ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="contact-content" style={style}>
                  <Link to="#"><i className="ri-time-line ri-2x"></i></Link>
                  <h4>Working Hours</h4>
                  <ListGroup>
                    <ListGroupItem className="border-0 p-0">Mon - Sat: 9:00am to 6:00pm</ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </ContainerBox>
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <ContainerBox>
          <div className="location-container">
            <Form className="form-container">
              <div className="form-title">
                <h1>Get a Free Case Evaluation Today</h1>
                <p>Available 24 hours a day</p>
              </div>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" id="name" placeholder="Enter your name" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input type="tel" id="phone" placeholder="Enter your phone number" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="subject">Subject</Label>
                    <Input type="text" id="subject" placeholder="Subject" />
                  </FormGroup>
                </Col>
              </Row>
              <Col md="12">
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input type="textarea" id="message" rows="8" placeholder="Write your message here" />
                </FormGroup>
              </Col>
              <Button type='button'>Submit</Button>
            </Form>
            <div className="contact-man">
              <img src={experience} alt="" />
            </div>
          </div>
        </ContainerBox>
        <div className="map-location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.07203371367!2d77.11031245108795!3d28.64420449219194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d036b61214b21%3A0xaaa9a3b98a1faee2!2sRajouri%20Garden%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745339248091!5m2!1sen!2sin" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>
    </>
  )
}

export default Contact

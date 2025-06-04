import React from "react";
import Subtitle from '../components/shared/Titlesub'
import banner1 from "../../public/Images/gallery-04.jpg";
import banner2 from "../../public/Images/hero-img01.jpg";
import banner3 from "../../public/Images/hero-video.mp4";
import world from '../../public/Images/world.png'
import SearchList from "../components/shared/SearchList";
import styled from "styled-components";
import { Col, Row } from "reactstrap";
import ServicesList from "../services/ServicesList";
import expriance from '../assets/Images/experience.png'
import FeatureToursList from "../components/Featured-Tours/FeatureToursList";
import MasonryImagesGallery from "../components/Image_Gallary/MasonryImagesGallery";
import '../styles/Home.scss'
import Testimonial from "../components/Testimonial/Testimonial";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NewsLatter from "../components/shared/NewsLatter";


const ContainerBox = styled.div`
 max-width:1200px;
 width:100%;
 margin:auto;
`

function Home() {
  return (
    <>

      {/* banner  */}

      <section>

        <ContainerBox>
          <Col lg='12'>
          
            <section className="home-section">
              <div className="banner-content ">
                <div className="subtitle_img d-flex">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img className="world_img" src={world} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating <span>memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur dignissimos odit labore cumque dolore voluptate sapiente vel natus vero quia earum alias nihil, dolorem nisi corrupti, atque delectus architecto...
                </p>
              </div>

              {/* ✅ Image & Video Section */}

              <div className="image-container">

                {/* Image 1 */}
                <div className="banner-item  banner-item-1">
                  <img className="banner-img  banner-img-1" src={banner2} alt="Banner 1" />
                </div>

                {/* Video */}

                <div className="banner-item banner-item-3">
                  <video className="banner-video" autoPlay  loop muted>
                    <source src={banner3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Image 2 */}

                <div className="banner-item banner-item-2">
                  <img className="banner-img banner-img-2" src={banner1} alt="Banner 2" />
                </div>


              </div>

            </section>
          </Col>
        </ContainerBox>

      </section>


      {/* search  */}


      <SearchList />

      <section>
        <ContainerBox>
          <Row style={{ margin: '30px 0' }}>
            <Col lg='3'>
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </ContainerBox>
      </section>


      <section>
        <ContainerBox>
          <Row>
            <Col lg='12'>
              <h5 className="services_subtitle">Explore</h5>
              <h2 className="featured_tour_title">Our Featured Tour</h2>
            </Col>
            <FeatureToursList />
          </Row>
        </ContainerBox>
      </section>


      <section>
        <ContainerBox>
          <Row>
            <Col lg='6'>
              <div className="expriance">
                <h5 className="services_subtitle" >Explore</h5>
                <h2>With Our All  <br /> We Will Serve You </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit!</p>
              </div>
              <div className="counter_wrapper d-flex align-item-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Reguler</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Client</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6>Years Expriance</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="expriance_img">
                <img src={expriance} alt="" />
              </div>
            </Col>
          </Row>
        </ContainerBox>
      </section>


      <section>
        <ContainerBox>
          <Col lg='12'>
            <h5 className="services_subtitle" >Explore</h5>
            <h2 className="gallary_title">Visit our customers tour gallary</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </ContainerBox>
      </section>


      <section>
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

      <section>
        <NewsLatter/>
      </section>




    </>
  );
}

export default Home;

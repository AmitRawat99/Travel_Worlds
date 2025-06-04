import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/Images/ava-1.jpg";
import ava02 from "../../assets/Images/ava-2.jpg";
import ava03 from "../../assets/Images/ava-3.jpg";

function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    

    return (
        <>
            <Slider {...settings} className="slider" >

                {/* Testimonial 1 */}

                <div className="testimonial py-4 px-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        ab consectetur molestias commodi magni veritatis laboriosam pariatur
                        ea sit ad!
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
                        <div>
                            <h6 className="mb-0 mt-3">John Doe</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}

                <div className="testimonial py-4 px-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        ab consectetur molestias commodi magni veritatis laboriosam pariatur
                        ea sit ad!
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} className="w-25 h-25 rounded-2" alt="Jane Doe" />
                        <div>
                            <h6 className="mb-0 mt-3">Jane Doe</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}

                <div className="testimonial py-4 px-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                        ab consectetur molestias commodi magni veritatis laboriosam pariatur
                        ea sit ad!
                    </p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava03} className="w-25 h-25 rounded-2" alt="David Smith" />
                        <div>
                            <h6 className="mb-0 mt-3">David Smith</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>


            </Slider>
        </>
    );
}

export default Testimonial;

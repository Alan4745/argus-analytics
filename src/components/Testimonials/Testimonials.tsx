import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconAtras from "./../../assets/icons/atras.png";
import iconAdelante from "./../../assets/icons/proximo.png";

import imgPerfil from "./../../assets/perfilpersona.svg";

const testimonialsData = [
  {
    image: imgPerfil,
    name: "John Doe",
    position: "CEO of Example",
    comment: "This service is fantastic! Highly recommended.",
    date: "2024-07-23",
    time: "10:30 AM",
  },
  {
    image: imgPerfil,
    name: "Jane Smith",
    position: "Marketing Director",
    comment: "Amazing experience, very professional team.",
    date: "2024-07-22",
    time: "1:15 PM",
  },
  {
    image: imgPerfil,
    name: "Michael Brown",
    position: "Product Manager",
    comment: "I am very satisfied with the results.",
    date: "2024-07-21",
    time: "4:00 PM",
  },
  {
    image: imgPerfil,
    name: "Emily White",
    position: "Sales Manager",
    comment: "The best company I have worked with.",
    date: "2024-07-20",
    time: "9:45 AM",
  },
  {
    image: imgPerfil,
    name: "David Wilson",
    position: "HR Manager",
    comment: "They exceeded my expectations in every way.",
    date: "2024-07-19",
    time: "2:30 PM",
  },
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    >
      <img src={iconAtras} alt="adenlaten" className="img-fluid" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "flex",
        backgroundColor: "transparent",
        bottom: -60,
        width: 25,
        height: 25,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src={iconAdelante} alt="adenlaten" className="img-fluid" />
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="home-testimonials pt-5 pb-5">
      <div className="container overview-content text-center">
        <span className="aboutUs-span gradient-text-about">Testimonials</span>
        <h2>Satisfied Client From Big Brands</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>
      <div className="container mt-5">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="w-90 h-90 card-body-testimonial p-1">
                <div className="row d-flex  flex-row">
                  <div className="col-4 d-flex  flex-column justify-content-center align-items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                  </div>

                  <div className="col-8  d-flex  flex-column justify-content-center align-items-start p-0">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-position">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <p className="testimonial-date">
                  {testimonial.time} - {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;

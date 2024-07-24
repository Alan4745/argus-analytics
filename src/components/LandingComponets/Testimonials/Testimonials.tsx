import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconAtras from "./../../../assets/icons/atras.png";
import iconAdelante from "./../../../assets/icons/proximo.png";
import imgPerfil from "./../../../assets/perfilpersona.svg";

const testimonialsData = [
  {
    image: imgPerfil,
    name: "John Doe",
    position: "CEO of Example",
    comment:
      "Urna malesuada blandit dui congue viverra amet rhoncus nulla. At ac quis feugiat donec venenatis nullam nam est porta. Libero pulvinar nibh.",
    date: "2024-07-23",
    time: "10:30 AM",
  },
  {
    image: imgPerfil,
    name: "Jane Smith",
    position: "Marketing Director",
    comment:
      "Urna malesuada blandit dui congue viverra amet rhoncus nulla. At ac quis feugiat donec venenatis nullam nam est porta. Libero pulvinar nibh.",
    date: "2024-07-22",
    time: "1:15 PM",
  },
  {
    image: imgPerfil,
    name: "Michael Brown",
    position: "Product Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Est vitae orci vitae ipsum. Aenean id a donec tempus. Non sed amet facilisis facilisis eget praesent. Arcu arcu maecenas vulputate odio aliquam aliquam enim sit mauris.",
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
      <img src={iconAtras} alt="Previous" className="img-fluid" />
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
      <img src={iconAdelante} alt="Next" className="img-fluid" />
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
    <motion.div
      className="home-testimonials pt-5 pb-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container overview-content text-center">
        <motion.span
          className="aboutUs-span gradient-text-about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Satisfied Client From Big Brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content.
        </motion.p>
      </div>
      <div className="container mt-5">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-90 h-90 card-body-testimonial p-1">
                <div className="row d-flex flex-row">
                  <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <div className="col-9 d-flex flex-column justify-content-center align-items-start p-0">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.p
                      className="testimonial-position"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {testimonial.position}
                    </motion.p>
                  </div>
                </div>

                <motion.p
                  className="testimonial-comment"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.comment}"
                </motion.p>
                <motion.p
                  className="testimonial-date"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {testimonial.time} - {testimonial.date}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Testimonials;

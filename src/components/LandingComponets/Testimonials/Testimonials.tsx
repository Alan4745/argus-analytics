/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import iconAtras from "./../../../assets/icons/atras.png";
import arrowBack from "./../../../assets/icons/icons8-izquierda-100.png";
import arrowNext from "./../../../assets/icons/icons8-derecha-100.png";
// import iconAdelante from "./../../../assets/icons/proximo.png";

import { useTranslation } from "react-i18next";
import { testimonialsData } from "./testimonials.data";

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        bottom: -60,
        width: 35,
        height: 35,
        color: "#000",
        borderRadius: "50%",
        border: "1px solid #DFDFDF",
      }}
      onClick={onClick}
    >
      <img src={arrowBack} alt="Previous" className="img-fluid left" />
      {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z"></path></svg> */}
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        backgroundColor: "transparent",
        bottom: -60,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        borderRadius: "50%",
        border: "1px solid #DFDFDF",
      }}
      onClick={onClick}
    >
      <img src={arrowNext} alt="Next" className="img-fluid right" />
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();

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
          arrows: false,
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
          {/* Testimonials */}
          {t("testimonials")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Satisfied Client From Big Brands */}
          {t("satisfiedClient")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* It is a long established fact that a reader will be distracted by the
          readable content. */}
          {t("longEstablishedFactReader")}
        </motion.p>
      </div>
      <div className="container mt-5">
        <Slider {...settings}>
          {testimonialsData &&
            testimonialsData.map((testimonial, index) => (
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

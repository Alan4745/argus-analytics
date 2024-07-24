import React from "react";
import "./Pricing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Basic Plan",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices cursus aenean quam ullamcorper.",
    price: "$50 /Month",
    features: [
      "Coverage of Your Stores",
      "Locations Analysis (Your Stores)",
      "Historical Data",
      "Monthly Updated Data",
      "1 Monthly Hour of Attention",
      "1 User",
    ],
  },
  {
    title: "Standard Plan",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices cursus aenean quam ullamcorper.",
    price: "$70 /Month",
    features: [
      "All from the Basic Plan",
      "User Profile of Your Customers",
      "Additional feature",
      "Additional feature",
    ],
  },
  {
    title: "Professional Plan",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices cursus aenean quam ullamcorper.",
    price: "$110 /Month",
    features: [
      "All from the Basic Plan",
      "Competitive Environment",
      "Locations Analysis (Complete Industry)",
      "2 Users",
      "Weekly Updated Data",
      "2 Monthly Hours",
    ],
  },
  {
    title: "Team Edition",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices cursus aenean quam ullamcorper.",
    price: "$180 /Month",
    features: [
      "All from the Professional Plan",
      "Part-Time Dedicated Team Member",
      "Historical Data",
      "Extra Data Analysis and Dashboards",
      "3+ User",
    ],
  },
];

const Pricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="pricing-background">
      <div className="container overview-content text-center">
        <span className="aboutUs-span gradient-text-about">OVERVIEW</span>
        <h2>We Provide Various Packages</h2>
        <p>Find the one that works best for your business.</p>
      </div>

      <div className="container mt-5">
        <div className="row d-none d-md-flex">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-3">
              <div className="card pricing-card">
                <div className="card-body">
                  <h4 className="card-title-princing">{plan.title}</h4>
                  <p className="card-text-princing">{plan.desc}</p>
                  <h3 className="pricing-price">{plan.price}</h3>
                  <ul className="pricing-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck className="feature-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="gradient-button-princing  mt-5">
                    See our solutions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Slider className="d-md-none" {...settings}>
          {plans.map((plan, index) => (
            <div key={index} className="w-100">
              <div className="card pricing-card">
                <div className="card-body">
                  <h4 className="card-title">{plan.title}</h4>
                  <p className="card-text">{plan.desc}</p>
                  <h3 className="pricing-price">{plan.price}</h3>
                  <ul className="pricing-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck className="feature-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="gradient-button-home mt-5">
                    See our solutions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;

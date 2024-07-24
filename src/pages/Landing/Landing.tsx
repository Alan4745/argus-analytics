import AboutUs from "../../components/LandingComponets/AboutUs/AboutUs";
import ContactUs from "../../components/LandingComponets/ContactUs/ContactUs";
import Faq from "../../components/LandingComponets/Faq/Faq";
import Princing from "../../components/LandingComponets/Pricing/Princing";

import Overview from "../../components/LandingComponets/Overview/Overview";
import Solutions from "../../components/LandingComponets/Solutions/Solutions";
import Testimonials from "../../components/LandingComponets/Testimonials/Testimonials";
import Home from "../../components/LandingComponets/Home/Home";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <Solutions />
      <Overview />
      <Princing />
      <Faq />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Landing;

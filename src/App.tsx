import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Princing from "./components/Pricing/Princing";
import Solutions from "./components/Solutions/Solutions";
import ContactUs from "./components/ContactUs/ContactUs";
import Faq from "./components/Faq/Faq";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
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
    </>
  );
}

export default App;

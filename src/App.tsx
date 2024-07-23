import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Princing from "./components/Pricing/Princing";
import Solutions from "./components/Solutions/Solutions";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Solutions />
      <Overview />
      <Princing />
      <ContactUs />
    </>
  );
}

export default App;

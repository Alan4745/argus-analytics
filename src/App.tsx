import React from "react";
import "./App.css";
import Error404 from "./components/404/Error404";
import Landing from "./pages/Landing/Landing";
import "./components/config/i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App" style={{ overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

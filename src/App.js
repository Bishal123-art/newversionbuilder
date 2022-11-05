import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Banner from "./pages/banner";
import MiddleComponent from "./pages/MiddleComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <MiddleComponent />
    </Router>
  );
}
export default App;

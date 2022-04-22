import React from "react";
import "./App.css";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/CEP-Form" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </Router>
  );
}

export default App;

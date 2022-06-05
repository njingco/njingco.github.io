import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchAPI from "./Dashboard/FetchAPI";
import Signin from "./Signin/Singin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<FetchAPI />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;

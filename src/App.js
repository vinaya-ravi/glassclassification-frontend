import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import CreateContract from "./pages/createContract";
import CreateNewContract from  "./pages/createNewContract"
import ImageClassification from  "./pages/imageClassification"
import TextClassification from  "./pages/textClassification"
import Footer from "./components/Footer";

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/visualize/:param' element={<CreateContract/>} exact />
        <Route path='/validatemodel/:param' element={<CreateNewContract/>} exact />
        <Route path='/classifybyimage' element={<ImageClassification/>} exact />
        <Route path='/classifybytext' element={<TextClassification/>} exact />
      </Routes>
    </Router>
    <Footer />
    </>
  );
};

export default App;

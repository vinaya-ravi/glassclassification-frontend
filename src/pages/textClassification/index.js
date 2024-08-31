import React, { useState } from "react";
import Navbar2 from "../../components/Navbar/navbar2";
import TM from "../../common/assets/form.svg";
import "./Features.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../../components/HeroSection/HeroElements";
import { Button } from "../../components/ButtonElement";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  FeaturesRow,
  FeaturesColumn,
  TextWrapper,
  Img,
  TopLine,
  FeaturesSec,
  FeaturesContainer,
  ImgWrapper,
  Table,
  FeatureWrap,
} from "./Features.elements";
import Collapse from "rc-collapse";
import GlassClassificationServices from "../../services/GlassClassificationServices";
var Panel = Collapse.Panel;
require("rc-collapse/assets/index.css");

const TextClassification = ({ lightTopLine }) => {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');
  const [classification, setClassification] = useState("");
  const [keyCharacteristics, setKeyCharacteristics] = useState([]);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmittedText(text);
  //   try {
  //     const response = await fetch('http://localhost:8001/ml/classify-text', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ description: text })
  //     });

  //     const result = await response.json();
  //     if(result != null){
  //     setClassification(result.class[0]);
  //     setKeyCharacteristics(result.key_characteristics);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to classify the text.');
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    const data = { description: text }; // Creating an object with a key 'description'
    GlassClassificationServices.classifyText(data).then(response => {
      console.log("rrr", response)
      setKeyCharacteristics(response.data.key_characteristics);
      setClassification(response.data.predicted_class)
    }).catch(error => {
      console.log(error)
    })
  };

  return (
    <>
      <Navbar2 />
      <FeaturesSec>
        <h1>Glass Type Classification from Text</h1>
        <div className="text-classification-container">
          <form onSubmit={handleSubmit}>
            <textarea
              className="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter glass description here..."
            />
            <button type="submit" className="classify-button">Classify</button>
          </form>
          {submittedText && (
            <>
              <p className="classification-result">Glass Type Classification: {classification}</p>
              <br>
              </br>
              <p className="submitted-text">Submitted Description: {submittedText}</p>
            </>

          )}

          <br>
          </br>
          {keyCharacteristics.length > 0 && (
            <div className="key-characteristics">
              <p>Key Characteristics From Text:</p>
              <br>
              </br>
              <ul>
                {keyCharacteristics.map((char, index) => (
                  <>
                    <li key={index}>{char}</li>
                    <br>
                    </br>
                  </>
                ))}
              </ul>
            </div>
          )}
        </div>

      </FeaturesSec>
    </>
  );
};

export default TextClassification;

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
import GlassClassificationServices from "../../services/GlassClassificationServices"
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
var Panel = Collapse.Panel;
require("rc-collapse/assets/index.css");

const ImageClassification = ({ lightTopLine }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [classification, setClassification] = useState("");

  const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
      classifyImage(file);
  };

  const classifyImage = (image) => {
    const formData = new FormData();
  formData.append('file', image);
    console.log(image);
    GlassClassificationServices.classifyImage(formData).then(response => {
        console.log(response.data)
        setClassification(response.data.predicted_class)
    }).catch(error => {
        console.log(error)
    })
};

  return (
    <>
      <Navbar2 />
      <FeaturesSec>
      <h1>Glass Type Classification from Images</h1>
      <div>
        <HeroBtnWrapper>
        <input type="file" onChange={handleImageChange} accept="image/*" className="upload-input"/>
        </HeroBtnWrapper>
            {imageUrl && <img src={imageUrl} alt="Uploaded"  className="uploaded-image" />}
            <br>
            </br>
            {classification && <p className="classification-result">Glass Type Classification: {classification}</p>}
        </div>

    </FeaturesSec>
    </>
  );
};

export default ImageClassification;

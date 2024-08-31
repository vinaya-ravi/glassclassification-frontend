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
var Panel = Collapse.Panel;
require("rc-collapse/assets/index.css");

const CreateNewContract = ({ lightTopLine }) => {
  const params = useParams();
  const [hover, setHover] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("param details", params["param"]);
  const onHover = () => {
    setHover(!hover);
  };

 useEffect(() => {
  // Fetch image from the server
  if(params["param"]=='accuracy')
  {
  fetch('http://localhost:8001/ml/boxplot')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='trainingset')
  {
    fetch('http://localhost:8001/ml/trainconfusionmatrix')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='testingset')
  {
    fetch('http://localhost:8001/ml/testconfusionmatrix')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
}, []);

let appContent;
if(params["param"]=='testingset')
{
  appContent= 
  <FeaturesRow>
  <TopLine lightTopLine={lightTopLine}>
  Confusion Matrix for Testing Set
    <p
      style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
    >
      Visualization using HeatMaps for training set
    </p>
  </TopLine>
  </FeaturesRow>
}

  if(params["param"]=='trainingset')
  {
    appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
  Confusion Matrix for Training Set
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
   Visualization using HeatMaps for testing set
  </p>
</TopLine>
</FeaturesRow>
  }


  if(params["param"]=='accuracy')
  {
appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
  Performance of various ML models
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
   Performance Visualization using  Box Plots for Different models
  </p>
</TopLine>
</FeaturesRow>
  }

  return (
    <>
      <Navbar2 />
      <FeaturesSec>
        {appContent}
             
        {loading ? (
          <div
            style={{
              margin: "auto",
              top: "50%",
              display: "block",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
      <div> 
      { imageSrc  && <img  style={{"width": "1100px" ,"height":"1100px"}}src={imageSrc} alt="Class Counts" />}
    </div>
)}
    </FeaturesSec>
    </>
  );
};

export default CreateNewContract;

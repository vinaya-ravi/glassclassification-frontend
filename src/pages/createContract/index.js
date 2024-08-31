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
  if(params["param"]=='pairplots')
  {
  fetch('http://localhost:8001/ml/pairplot')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='heatmaps')
  {
  fetch('http://localhost:8001/ml/heatmap')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='distributionplots')
  {
  fetch('http://localhost:8001/ml/distributionplot')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='boxplots')
  {
    fetch('http://localhost:8001/ml/boxquartiles')
    .then(response => response.blob())
    .then(blob => {
      // Convert the Blob to a data URL
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      setLoading(false);
    })
    .catch(error => console.error('Error fetching image:', error));
  }
  if(params["param"]=='barplots')
  {
    fetch('http://localhost:8001/ml/checkclasscounts')
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
if(params["param"]=='pairplots')
{
  appContent= 
  <FeaturesRow>
  <TopLine lightTopLine={lightTopLine}>
  Pair Plots Visualization
    <p
      style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
    >
     Pair Plot visualization for each pair of features
    </p>
  </TopLine>
  </FeaturesRow>
}

  if(params["param"]=='heatmaps')
  {
    appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
Heat Maps Visualization
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
HeatMap Visualization for each pair of features
  </p>
</TopLine>
</FeaturesRow>
  }


  if(params["param"]=='distributionplots')
  {
appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
Distribution Plot Visualization
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
   Distribution Plot Visualization for each feature
  </p>
</TopLine>
</FeaturesRow>
  }

  if(params["param"]=='boxplots')
  {
appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
Box Plots Visualization
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
  Box Plot To Visualize and Det Outliers for each feature
  </p>
</TopLine>
</FeaturesRow>
  }


  if(params["param"]=='barplots')
  {
appContent= 
<FeaturesRow>
<TopLine lightTopLine={lightTopLine}>
Bar Plots Visualization
  <p
    style={{ color: "grey", fontSize: "2vh", marginTop: "2vh" }}
  >
   Bar Plots To Check Frequency Count of each Glass Type
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

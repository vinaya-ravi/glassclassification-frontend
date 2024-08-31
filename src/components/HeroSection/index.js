import React, { useState } from "react";
// import { herosectionbg2 as Image } from "../../common/imageUrls";
import Image from "../../common/assets/bgImage.jpg";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import Navbar2 from "../../components/Navbar/index";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
    <Navbar2 />
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Glass Classification Analysis</HeroH1>
        <HeroP>
          <br />
          The glass type analysis and classification using machine learning models offers motivation for different domains.  It is helpful in quality control in manufacturing which ensures the defects in the glass composition.  It is helpful in forensics which provides valuable insights. It is also helpful in research and development applications to learn material science. It is also helpful in resource optimization of glass classification which reduces labor reliance.  This automated machine learning model can benefit in minimizing the environmental impact.
           </HeroP>
        <HeroBtnWrapper>
          <Button
            to="products"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    </>
  );
};

export default HeroSection;

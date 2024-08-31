import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/InfoSection/Data";
import Products from "../components/Products";
import NewProduct from "../components/Products/NewProduct"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Products />
      <NewProduct/>
      
    </>
  );
};

export default Home;

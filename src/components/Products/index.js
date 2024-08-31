import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProductIcon from '../../common/assets/productsIcon.svg';

import DataViz1 from '../../common/assets/data-1.png';
import DataViz2 from '../../common/assets/data-2.png';
import DataViz3 from '../../common/assets/data-3.png';
import {
  ProductsContainer,
  ProductsContainerCarSecond,
  ProductsWrapper,
  ProductsWrapperCar,
  ProductsContainerCar,
  ProductsCard,
  ProductsIcon,
  ProductsH1,
  ProductsH2,
  ProductsP,
} from "./ProductElements";
import { height } from "@mui/system";


function Products() {
  const navigate = useNavigate();
  const data=[
    {"name":"pairplots","id":"1"},
    {"name":"heatmaps","id":"2"},
    {"name":"distributionplots","id":"3"},
    {"name":"boxplots","id":"3"},
    {"name":"barplots","id":"3"}
  ]
  const handleClick = (event,param) => {
    navigate(`/visualize/${param}`);
  };

  return (
    <>

      <ProductsContainer id="products">
        <ProductsH1> Dataset Analysis through different  Visualization techniques</ProductsH1>
          <ProductsContainerCar id="products">
                    <ProductsCard onClick={(event) => handleClick(event,data[0].name)}>
                      <ProductsIcon src={DataViz1} />
                      <ProductsH2>Pair Plots Visualization</ProductsH2>
                      <ProductsP>Pair Plot visualization for each pair of features</ProductsP>
                    </ProductsCard>
                    <ProductsCard onClick={(event) => handleClick(event,data[1].name)}>
                      <ProductsIcon src={DataViz2} />
                      <ProductsH2>Heat Maps Visualization</ProductsH2>
                      <ProductsP>HeatMap Visualization for each pair of features</ProductsP>
                    </ProductsCard>
                    <ProductsCard onClick={(event) => handleClick(event,data[2].name)}>
                      <ProductsIcon src={DataViz3} />
                      <ProductsH2>Distribution Plot Visualization</ProductsH2>
                      <ProductsP>Distribution Plot  Visualization for each feature</ProductsP>
                    </ProductsCard>
          </ProductsContainerCar>
      </ProductsContainer>
          <ProductsContainerCarSecond>
          <ProductsCard onClick={(event) => handleClick(event,data[3].name)}> 
                      <ProductsIcon src={DataViz1} />
                      <ProductsH2>Box Plots Visualization</ProductsH2>
                      <ProductsP>Box Plot To Visualize and Det Outliers for each feature</ProductsP>
                    </ProductsCard>
                    <ProductsCard onClick={(event) => handleClick(event,data[4].name)}>
                      <ProductsIcon src={DataViz2} />
                      <ProductsH2>Bar Plots Visualization</ProductsH2>
                      <ProductsP>Bar Plots To Check Frequency Count of each Glass Type</ProductsP>
                    </ProductsCard>
          </ProductsContainerCarSecond>
      
    </>
  );
};

export default Products;

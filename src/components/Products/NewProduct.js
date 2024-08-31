import { useNavigate } from "react-router-dom";
import React, { Component } from "react";
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsCard,
  ProductsIcon,
  ProductsH1,
  ProductsH2,
  ProductsP,
} from "./ProductElements";
import Icon1  from '../../common/assets/asset.svg';
import Icon2 from '../../common/assets/liability.svg'

import DataViz4 from '../../common/assets/data-4.png';
import DataViz5 from '../../common/assets/data-5.png';
function NewProduct() {
    const navigate = useNavigate();
    const data=[
      {"name":"accuracy","id":"1"},
      {"name":"trainingset","id":"2"},
      {"name":"testingset","id":"3"}
    ]
    const handleClick = (event,param) => {
        navigate(`/validatemodel/${param}`);
      };
  return (
    <>
      <ProductsContainer id="newproduct" style={{background: "#f9f9f9", display: "flow-npm root"}}>
        <ProductsH1 style={{color: "#010606"}}> Train and Test Results of Machine Learning Models </ProductsH1>
        <ProductsWrapper style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
          <ProductsCard onClick={(event) => handleClick(event,data[0].name)}>
            <ProductsIcon src={Icon1}/>
            <ProductsH2>Performance of Different Models</ProductsH2>
            <ProductsP>Performance Validation Through Box Plots.</ProductsP>
          </ProductsCard>
          <ProductsCard onClick={(event) => handleClick(event,data[1].name)}>
          <ProductsIcon src={DataViz4}/>
            <ProductsH2>  Train Confusion Matrix</ProductsH2>
            <ProductsP>
            Confusion Matrix  Visualization for the Training set.
            </ProductsP>
          </ProductsCard>
          <ProductsCard onClick={(event) => handleClick(event,data[2].name)}>
          <ProductsIcon src={DataViz5}/>
            <ProductsH2>Test Confusion Matrix</ProductsH2>
            <ProductsP>
            Confusion Matrix Visualization for the Training set.
            </ProductsP>
            
          </ProductsCard>
        </ProductsWrapper>
      </ProductsContainer>
    </>
  );
}

export default NewProduct;

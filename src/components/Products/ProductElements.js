import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProductsContainerCar = styled.div`
height: 400px;
display: flex;
align-items: stretch
flex-direction: column;
justify-content: center;
background: #010606;
`;


export const ProductsContainerCarSecond = styled.div`
height: 600px;
display: flex;
align-items: stretch
flex-direction: column;
justify-content: center;
background: #010606;
`;


export const ProductsWrapperCar = styled.div`


display: grid;


`;

export const ProductsWrapper = styled.div`

  display: grid;



  @media screen and (max-width: 1200px) {
    grid-template-columns: 0.5fr 0.5fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 0.5fr;
    padding: 0 20px;
  }
`;

export const ProductsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 40px;
  margin: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProductsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProductsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 100px;
  margin-bottom: 80px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProductsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const ProductsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

import styled from "styled-components";

export const FeaturesContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 991px) {
    padding-left: 50px;
    padding-right: 50px;
    height: 450px;
  }
`;

export const FeaturesSec = styled.div`
  color: #fff;
  padding: 15vh;
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content:centre;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const FeaturesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const FeaturesColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 6vh;
  /* line-height: 16px; */
  font-weight: 700;
  letter-spacing: 1.4px;
  margin: 6vh 0 6vh 0;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 7vh;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  max-width: 550px;
  margin-left: 200px;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  border: 0;
  width: 50vh;
  vertical-align: middle;
  display: inline-block;
`;

export const Table = styled.table`
  border:0;


`;


import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 120px);
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const SingleProduct = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: aqua; */
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Singleleft = styled.div`
  /* flex-basis: 50%; */
  flex: 1;
  height: 100%;
  background-color: #f0f0f0;
  background-color: red;
  border-radius: 14px 0 0 14px;
  position: relative;
  display: flex;
  background: ${(props) => `url(${props.background}) no-repeat`};
  background-position: 50% 50%;
  background-size: 75%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    border-radius: 0;
  }
`;
export const SingleRight = styled.div`
  /* flex-basis: 50%; */
  flex: 1;
  height: 100%;
  background-color: #21222d;
  border-radius: 0 14px 14px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 50%;
    border-radius: 0;
  }
`;

export const SingleImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

export const SingleProductName = styled.h1`
  font-size: 50px;
  color: #f0f0f0;
  text-align: center;
  /* margin-top: 35px; */
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
export const SingleProductCtg = styled.h5`
  font-size: 18px;
  font-weight: 100;
  color: #f0f0f0;
  text-align: center;
  opacity: 0.7;
  letter-spacing: 2px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;
export const ProductDetails = styled.p`
  width: 60%;
  font-size: 14px;
  color: #fff;
  /* margin-top: 70px; */
  opacity: 0.8;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const QunContainer = styled.div`
  height: 120px;
  width: 90%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* border-bottom: 2px solid #fff; */
  position: relative;
  /* margin-top: 50px; */
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const AmountContainer = styled.div`
  flex-basis: 30%;
  height: 100%;
  display: flex;
`;

export const ValueButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #2d2d2f;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;
export const ValueInput = styled.div`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  color: #f0f0f0;
  outline: none;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media screen and (max-width: 960px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  height: 100%;
  position: relative;
`;

export const Price = styled.h3`
  color: #f0f0f0;
  font-size: 40px;
  flex-basis: 70%;
  float: right;
  position: absolute;
  right: 15px;
  bottom: 30px;
  font-weight: 400;
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

export const AddToCartButton = styled.button`
  width: 50%;
  font-weight: bolder;
  border: none;
  padding: 15px 0;
  background-color: lightgreen;
  @media screen and (max-width: 960px) {
    padding: 7px 0;
    margin-bottom: 8px;
  }
`;

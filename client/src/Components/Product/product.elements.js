// import styled from "styled-components";
// // import { Link } from "react-router-dom";

import styled from "styled-components";

// export const ProductContainer = styled.div`
//   width: 300px;
//   /* background-color: red; */
//   height: 450px;
//   /* background: #f5f5f5; */
//   margin: 50px 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   transition: 0.5s ease all;
//   text-decoration: none;
//   box-shadow: 0 0 15px #fbfbfb;

//   &:hover {
//     box-shadow: 0 0 10px #bfbfbf;
//     transform: scale(1.01);
//   }
//   @media screen and (max-width: 960px) {
//     box-shadow: 0 0 5px #bfbfbf;
//   }
// `;
// export const ImageSpot = styled.div`
//   height: 70%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fbfbfb;
// `;
// export const BigerImg = styled.img`
//   width: 70%;
//   transition: 0.5s ease-in-out all;
// `;

// export const DetailsSpot = styled.div`
//   height: 50%;
//   width: 100%;
//   background: #fff;
//   text-align: center;
//   text-decoration: none;
//   margin-top: 10px;
// `;

// export const ProductCategory = styled.small`
//   font-size: 12px;
//   color: #3c3c3c;
//   padding: 1px 0;
//   letter-spacing: 1px;
//   font-weight: 300;
//   text-align: center;
//   text-decoration: none;
//   margin: 5px 0;
// `;

// export const ProductName = styled.h3`
//   font-size: 16px;
//   color: #222;
//   padding: 1px 0;
//   letter-spacing: 1px;
//   font-weight: 500;
//   text-align: center;
//   margin: 5px 0;
// `;

// export const ProductPrice = styled.h3`
//   font-size: 16px;
//   color: #222;
//   padding: 1px 0;
//   font-weight: 700;
//   text-align: center;
//   margin: 5px 0;
// `;
// export const ProductButton = styled.button`
//   border: 2px solid #000;
//   background: #fff;
//   padding: 5px 20px;
//   cursor: pointer;
//   font-weight: 500;
// `;

export const Product = styled.div`
  width: 300px;
  height: 420px;
  position: relative;
  background-color: #f0f0f0;

  margin: 50px 0;
  transition: 0.5s;

  &::before {
    width: 165px;
    border-radius: 50px;
  }
  &:hover {
    box-shadow: 0 0 0 5px #2d2d2d;
  }
`;

export const ProductImage = styled.div`
  width: 300px;
  height: 230px;
  background: ${(props) => `url(${props.background}) no-repeat`};
  background-position: 50% 50%;
  background-size: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    /* background-position: 30% 50%; */
  }
`;

export const Img = styled.img`
  width: 60%;
  @media screen and (max-width: 960px) {
    width: 40%;
  }
`;
export const ProductDetail = styled.div`
  width: 300px;
  height: 190px;
  background-color: #21222d;
  border-radius: 0 40% 0 0;
  padding: 0.8rem;
  color: #fff;
`;
export const ProductName = styled.span``;

export const ProductDesc = styled.p`
  font-size: 0.8rem;
  color: #5f5f6b;
  margin-top: 15px;
`;
export const ProductButtons = styled.div`
  height: 50px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;
export const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;
export const ProductButton = styled.div`
  position: relative;
  border: none;
  outline: none;
  /* background-color: #35353f; */
  color: #fff;
  height: 40px;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  width: 100px;
`;

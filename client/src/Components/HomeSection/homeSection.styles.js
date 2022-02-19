import styled from "styled-components";

export const HSContainer = styled.div`
  padding: 15px 120px;
  display: flex;
  justify-content: space-around;
  /* overflow-x: hidden; */
  height: calc(100vh - 120px);
  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 20px;
    margin-top: 120px;
  }
`;

export const HSLeft = styled.div`
  flex-basis: 50%;
  height: 70%;
  margin: auto;
  @media screen and(max-width:960px) {
    display: flex;
    justify-content: left;
    align-items: left;
    flex-basis: 100%;
    /* height: 100%; */
    margin: 0;
  }
`;

export const HSRight = styled.div`
  flex-basis: 50%;
  @media screen and(max-width:960px) {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HSImg = styled.img`
  padding-left: 100px;
  border: 0;
  width: 450px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  @media screen and (max-width: 960px) {
    padding-left: 25px;
    width: 300px;
    /* transform: rotate(90deg); */
    max-height: 500px;
    margin-bottom: 100px;
  }
`;

export const HomeSlogen = styled.div`
  flex-basis: 50%;
  height: 70%;
  @media screen and(max-width:960px) {
    display: flex;
    justify-content: left;
    align-items: left;
    flex: 100%;
    height: 100%;
    margin: 0;
  }
`;
export const TopTitle = styled.h2`
  font-size: 18px;
  color: #333;
  padding: 1px 0;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
  color: #333;
  padding: 1px 5px;
  font-weight: 500;
  @media screen and (max-width: 960px) {
    font-size: 46px;
  }
`;
export const Description = styled.p`
  color: #333;
`;

export const Button = styled.button`
  border: none;
  background-color: #fff;
  color: #6495ed;
  border: 1px solid #6495ed;
  padding: 5px 25px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
  transition: 0.5s ease;
  &:hover {
    background-color: #6495ed;
    color: #fff;
  }
`;

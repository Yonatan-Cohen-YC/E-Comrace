import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 5px 0;
  height: calc(120vh - 80px);

  @media screen and (max-width: 960px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CartTable = styled.div`
  border-bottom: 2px solid #f2f2f2;
  padding: 10px 0;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: none;
  }
`;
export const CartTableItem = styled.span`
  flex: ${(props) => (props.flex ? props.flex : 1)};
  margin: 0 35px;
`;

export const CartProduct = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px;
  border-bottom: 2px solid #f2f2f2;
  box-shadow: 0 0 5px #f2f2f2;
  @media screen and (max-width: 960px) {
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    height: 360px;
    margin-top: 15px;
  }
`;

export const CartProImage = styled.img`
  display: inline-block;
  width: 120px;
  margin-top: 5%;
  flex: 1;
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;
export const CartProName = styled.span`
  flex: 2;
  font-weight: bold;
  font-size: 28px;
  @media screen and (max-width: 960px) {
    flex: 1;
  }
`;
export const CartProPrice = styled.span`
  flex: 1;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    font-weight: bolder;
  }
`;
export const CartProQty = styled.span`
  flex: 1;
  font-weight: 300;
  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
`;
export const DeleteButton = styled.span`
  flex: 1;
  cursor: pointer;
  color: #333;
  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
`;
export const RightSide = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin-top: 350px;
  }
`;

export const Summary = styled.div`
  width: 60%;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -75%);
  border-radius: 14px;
  box-shadow: 0 0 15px #f2f2f2;
  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

export const SummaryTitle = styled.h1`
  font-size: 32px;
  margin-top: 15px;
  margin-left: 45px;
  text-align: left;
`;

export const Fieldes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Fielde = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const FieldeData = styled.span`
  color: ${(props) => (props.color ? props.color : "#000")};
  font-size: 16px;
`;

export const Hr = styled.div`
  width: 90%;
  height: 1px;
  border: 1px #ccc dashed;
`;

export const PayButton = styled.button`
  width: 70%;
  margin: 0 auto;
  padding: 5px 0;
  margin-top: 15px;
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;

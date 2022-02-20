import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ListBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const List = styled.div`
  list-style: none;
  width: 90%;
  margin: 0;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const ListTitle = styled.h2`
  font-size: 24px;
  margin: 0 20px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const CtgButton = styled.button`
  width: 70%;
  outline: none;
  background-color: transparent;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
  margin: 10px 15px;
  padding: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #333;
  transition: 0.2s;
  letter-spacing: 1px;
  &:hover {
    background-color: #333;
    color: #f2f2f2;
  }
  @media screen and (max-width: 960px) {
    width: 40%;
  }
`;
export const Products = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ProductsCtgTitle = styled.h2`
  font-weight: 200;
  /* background-color: red; */
  margin: 0;
`;

export const ProductsHolder = styled.div`
  /* background-color: blue; */
  width: 90%;
  height: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

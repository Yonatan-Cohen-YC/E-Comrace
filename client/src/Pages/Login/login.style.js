import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 300px;
  max-height: 450px;
  box-shadow: 0 0 5px #cacaca;
  width: 50vw;
  height: 50vh;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  @media screen and (max-width: 960px) {
    width: 70vw;
    height: 70vh;
    top: 60%;
  }
`;

export const LoginHeader = styled.h1`
  color: #21222d;
  flex: 1;
  margin-top: 30px;
`;

export const Form = styled.form`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 3;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  border: none;
  border: 1px solid #000;
  outline: none;
  padding: 5px 0;
  font-size: 12px;
  &::placeholder {
    color: lightgray;
    padding-left: 5px;
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    padding: 10px;
  }
`;
export const Label = styled.label`
  color: #ccc;
  font-size: 12px;
  margin-left: 15px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #6495ed;
  border: none;
  border-radius: 30px;
  color: #fff;
  outline: none;
  padding: 5px 0;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    padding: 10px;
  }
`;

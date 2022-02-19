import styled from "styled-components";

export const FormContainer = styled.div`
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

export const FormHeader = styled.h1`
  color: #6495ed;
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

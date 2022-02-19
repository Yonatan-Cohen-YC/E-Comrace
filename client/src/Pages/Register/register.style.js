import styled from "styled-components";

export const RegisterContainer = styled.div`
  /* max-width: 300px;
  max-height: 450px; */
  box-shadow: 0 0 5px #cacaca;
  width: 20vw;
  height: 70vh;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 60%;
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

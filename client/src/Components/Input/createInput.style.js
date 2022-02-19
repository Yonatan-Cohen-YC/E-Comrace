import styled from "styled-components";

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

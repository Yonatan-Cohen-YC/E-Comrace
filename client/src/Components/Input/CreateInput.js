import { useState } from "react";
import * as Tags from "./createInput.style";

function CreateInput(props) {
  const [userData, setUserData] = useState({});
  // console.log("INPUTTTT", props);
  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    props.handleOnChange(userData);
  };

  return (
    <Tags.InputContainer key={props.name}>
      <Tags.Label>{props.label}</Tags.Label>
      <Tags.Input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => handleOnChange(e)}
      />
    </Tags.InputContainer>
  );
}

export default CreateInput;

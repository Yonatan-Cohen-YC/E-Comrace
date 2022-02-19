import React from "react";
import { Button } from "./createButton.style";

function CreateButton(props) {
  return <Button type="submit">{props.btn}</Button>;
}

export default CreateButton;

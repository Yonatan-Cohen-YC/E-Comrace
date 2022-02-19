import React from "react";
import * as Tags from "./createForm.style";
import CreateInput from "../Input/CreateInput";
import CreateButton from "../Button/CreateButton";

function CreateForm(props) {
  const getUserDetails = (data) => {
    console.log("hello ", data);
    return data;
  };

  const handleOnSubmit = (e) => {
    const results = getUserDetails();
    console.log("res ", results);
    e.preventDefault();
    props.handleOnSubmit(results);
  };

  return (
    <Tags.FormContainer>
      <Tags.FormHeader>{props.header}</Tags.FormHeader>
      <Tags.Form onSubmit={handleOnSubmit}>
        {props.inputs.map((i) => (
          <CreateInput
            type={i.type}
            name={i.name}
            value={i.value}
            handleOnChange={getUserDetails}
            label={i.label}
          />
        ))}
        <CreateButton btn={props.btn} onClick={handleOnSubmit} />
      </Tags.Form>
    </Tags.FormContainer>
  );
}

export default CreateForm;

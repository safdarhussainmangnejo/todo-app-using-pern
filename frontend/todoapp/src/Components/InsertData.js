import React, { Fragment, useState } from "react";
import Button from './Button.styled';
import Input from "./Input.styled";
const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      
      <form className="d-flex" onSubmit={onSubmitForm}>
        <Input type="text" placeholder="Add To DO"
        value={description}
        name="description"
        onChange={(e) => setDescription(e.target.value)}>
        </Input>
        <Button>Add</Button><br/>
      </form>
    </Fragment>
  );
};

export default InputTodo;

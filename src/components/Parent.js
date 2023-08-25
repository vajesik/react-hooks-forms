import React, { useState } from "react";
import Form from "./Form.js";
import DisplayData from "./DisplayData.js";
import NumberForm from "./NumberForm.js";

function ParentComponent() {
  const [firstName, setFirstName] = useState("Sylvan");
  const [lastName, setLastName] = useState("Esso");

  function handleFirstNameChange(event) {
    console.log(`firstName: ${event.target.value}`);
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    console.log(`lastName: ${event.target.value}`);
    setLastName(event.target.value);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
      <NumberForm />
    </div>
  );
}

export default ParentComponent;

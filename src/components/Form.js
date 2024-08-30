import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  
  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event){
    setLastName(event.target.value);
    //The event contains data about the target, which is whatever DOM element the event was triggered on. That target, being an input element, has a value attribute. This attribute is equal to whatever is currently entered into that particular input!


  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

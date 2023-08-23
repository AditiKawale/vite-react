import React from "react";
//import "./form.css";
console.log("kkkkk");
export default function Form() {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  console.log(firstname, lastname);

  function handleFirstNameChange(event) {
    console.log(event.target);
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastname(event.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="first name"
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastNameChange}
      />
    </form>
  );
}

import React from "react";
import "./form.css";

console.log("Helo");

export default function Form2() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });
  console.log(formData.favColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(event.target.value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastname"
      />

      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      />

      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />

      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="Unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
      </fieldset>

      <label htmlFor="favColor">What is your Fav color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Green">Green</option>
      </select>
    </form>
  );
}

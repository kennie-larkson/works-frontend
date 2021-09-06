import React from "react";

//import { completeReg } from "../utils/auth.js";
// import Form from "../components/form.js";
import { Label, Input, Button, Form } from "../components/components.js";
import "../components/components.css";

const CompleteReg = () => {
  const [state, setState] = React.useState({
    firstname: "",
    lastname: "",
    unit: "",
    designation: "",
    gender: "",
    intro: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("token"));
    // console.log(user)
    const { firstname, lastname, unit, designation, gender, intro } = state;

    if (user ) {
      const token = user;
      // console.log("token: ", token);
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          firstname,
          lastname,
          unit,
          designation,
          gender,
          intro,
        }),
      };

      try {
        const responseData = await fetch(
          "http://localhost:5000/api/v1/complete-registration",
          requestOptions
        );
        const json = await responseData.json();
        console.log(json);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form submitHandler={submitHandler}>
          <div className="Label-input">
            <Label classname="Label" text="Firstname" />
            <Input
              classname="Input"
              name="firstname"
              handleChange={handleChange}
              value={state.firstname}
              type="text"
              placeholder="Enter your firstname"
            />
          </div>
          <div className="Label-input">
            <Label classname="Label" text="Lastname" />
            <Input
              classname="Input"
              name="lastname"
              handleChange={handleChange}
              value={state.lastname}
              type="text"
              placeholder="Enter your lastname"
            />
          </div>
          <div className="Label-input">
            <Label classname="Label" text="Designation" />
            <Input
              classname="Input"
              name="designation"
              handleChange={handleChange}
              value={state.designation}
              type="text"
              placeholder="desination"
            />
          </div>
          <div className="Label-input">
            <Label classname="Label" text="Unit" />
            <Input
              classname="Input"
              name="unit"
              handleChange={handleChange}
              value={state.unit}
              type="text"
              placeholder="Your unit"
            />
          </div>
          <div className="Label-input">
            <Label classname="Label" text="Gender" />
            <select name="gender" value={state.gender} onChange={handleChange}>
              <option>--Select your gender--</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="Label-input">
            <Label classname="Label" text="Intro" />
            <textarea
              name="intro"
              cols="20"
              rows="10"
              value={state.intro}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" classname="Reg-btn" text="Update details" />
        </Form>
      </section>
    </>
  );
};

export default CompleteReg;

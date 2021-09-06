import React from "react";
// import Form from "../components/form.js";
import { Input, Label, Button, Form } from "../components/components.js";

const BasicReg = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    username: "",
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
    const { email, password, username } = state;
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
    };

    try {
      const data = await fetch(
        "http://localhost:5000/api/v1/register",
        requestOptions
      ).then((res) => res.json());
      const { token } = data;
      const jsonToken = JSON.stringify(token);
      localStorage.setItem("token", jsonToken);
      console.log(data);
    } catch (error) {
      console.log(error.message);
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
            <Label classname="Label" text="Email" />
            <Input
              classname="Input"
              name="email"
              handleChange={handleChange}
              value={state.email}
              type="email"
              placeholder="Enter a valid email"
            />
          </div>
          {state.email ? (
            <div className="Label-input">
              <Label classname="Label" text="Password" />
              <Input
                classname="Input"
                name="password"
                handleChange={handleChange}
                value={state.password}
                type="password"
                placeholder="Enter a strong password"
              />
            </div>
          ) : (
            ""
          )}
          {state.password ? (
            <div className="Label-input">
              <Label classname="Label" text="Username" />
              <Input
                classname="Input"
                name="username"
                handleChange={handleChange}
                value={state.username}
                type="text"
                maxLength="15"
                placeholder="Enter your preferred username"
              />

              <small>
                This is the name with which other users will address you
              </small>
            </div>
          ) : (
            ""
          )}

          {state.username ? (
            <Button type="submit" classname="Reg-btn" text="Register Now" />
          ) : (
            ""
          )}
        </Form>
      </section>
    </>
  );
};

export default BasicReg;

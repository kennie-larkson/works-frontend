import React from "react";
// import Form from "../components/form.js";
import { Input, Label, Button, Form } from "../components/components.js";

const Login = () => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
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
    const { username, password } = state;
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    try {
      const data = await fetch(
        "http://localhost:5000/api/v1/login",
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
            <Label classname="Label" text="Username" />
            <Input
              classname="Input"
              name="username"
              handleChange={handleChange}
              value={state.username}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          {state.username ? (
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
            <Button type="submit" classname="Reg-btn" text="Login" />
          ) : (
            ""
          )}
        </Form>
      </section>
    </>
  );
};

export default Login;

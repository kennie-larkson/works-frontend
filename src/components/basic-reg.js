import React from "react";

const BasicReg = () => {
  const [state, setState] = React.useState({
    email: "",
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

  const submitHandler = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: state.email, password: state.password }),
    };
    
    const data = await fetch(
      "http://localhost:5000/api/v1/register",
      requestOptions
    ).then((res) => res.json());
    const { token } = data;
    const jsonToken = JSON.stringify(token);
    localStorage.setItem("token", jsonToken);
    console.log(data);
  };

  return (
    <>
      <form>
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          value={state.email}
          type="email"
          placeholder="Enter a valid email"
        />
        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          value={state.name}
          type="password"
          placeholder="Enter a strong password"
        />
      </form>
      <button onClick={submitHandler}>Register</button>
    </>
  );
};

export default BasicReg;

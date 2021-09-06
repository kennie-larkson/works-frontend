import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage.js";
import BasicReg from "./pages/basic-reg.js";
import CompleteReg from "./pages/complete-reg.js";
import Dashboard from "./pages/dashboard.js";
import Login from "./pages/login.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/register">
            <BasicReg />
          </Route>
          <Route exact path="/complete-registration">
            <CompleteReg />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard name="kennie" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

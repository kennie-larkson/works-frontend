// import { Label, Input, Button } from "./components.js";
import "./components.css";

function Form({ children }) {
  return (
    <div className="Form-container">
      <form>
        <div className="Basic-form">
            {children}
        </div>
      </form>
    </div>
  );
}

export default Form;

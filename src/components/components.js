export function Button({ classname,  text, type }) {
  return (
    <button type={type} className={classname} >
      {text}
    </button>
  );
}

export function Label({ classname, text }) {
  return <label className={classname}>{text}</label>;
}

export function Input({
  classname,
  name,
  handleChange,
  value,
  type,
  placeholder,
}) {
  return (
    <input
      className={classname}
      name={name}
      onChange={handleChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
}

export function Div({ children }) {
  return <div className="Container-div">{children}</div>;
}

export function Navbar({ children }) {
  return (
    <>
      <nav className="Nav-container">
        <ul>{children}</ul>
      </nav>
    </>
  );
}

export function Form({ children, submitHandler }) {
  return (
    <div className="Form-container">
      <form onSubmit={submitHandler}>
        <div className="Basic-form">
            {children}
        </div>
      </form>
    </div>
  );
}

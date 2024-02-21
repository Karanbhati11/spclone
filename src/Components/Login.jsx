import React, { useState } from "react";

const Login = () => {
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
  });
  return (
    <>
      <h3>Login</h3>
      <>
        <h2>Sign Up</h2>
        <form>
          <input
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            placeholder="email"
          />
          <br></br>
          <br></br>
          <input
            value={fields.username}
            onChange={(e) => setFields({ ...fields, username: e.target.value })}
            placeholder="Username"
          />
          <br></br>
          <br></br>
          <input
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            placeholder="password"
          />
          <br></br>
          <br></br>
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log("test");
            }}
          >
            Submit
          </button>
        </form>
      </>
    </>
  );
};

export default Login;

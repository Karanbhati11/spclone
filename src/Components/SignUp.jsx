import React, { useState } from "react";
import api from "../api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/signup.css";
import { Alert, Typography } from "@mui/material";
const HomePage = () => {
  const [fields, setFields] = useState({
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const [signupAlert, setAlert] = useState({
    message: "",
    messageType: "",
    response: "",
  });

  //   const url = "http://localhost:8888";
  const connectionurl = "http://localhost:8888/signup?";
  const fetcher = async (e) => {
    e.preventDefault();

    if (
      fields.email === "" ||
      fields.password === "" ||
      fields.username === " " ||
      fields.cpassword === " "
    ) {
      setAlert({
        messageType: "error",
        message: "Please enter all the fields",
        response: true,
      });
    } else {
      await api
        .post(
          `${connectionurl}name=${fields.username}&email=${fields.email}&password=${fields.password}&cpassword=${fields.cpassword}`
        )
        .then((response) => {
          if (response.status === 200) {
            setAlert({
              messageType: "success",
              message: "SignUp Success",
              response: true,
            });
            setFields({
              email: "",
              password: "",
              username: "",
              cpassword: "",
            });
          } else {
            setAlert({
              messageType: "error",
              message: "something went wrong",
              response: true,
            });
          }
        })
        .catch((err) => {
          setAlert({
            messageType: "error",
            message: err.response.data,
            response: true,
          });
        });
    }
  };

  return (
    <>
      {signupAlert.response && (
        <Alert severity={signupAlert.messageType}>{signupAlert.message}</Alert>
      )}

      <Typography variant="h4" margin={"20px"} component="h4">
        SignUp
      </Typography>
      <form>
        <div className="formContainer">
          <TextField
            className="formItems"
            id="filled-basic"
            label="Email"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            variant="outlined"
          />
          <TextField
            className="formItems"
            id="filled-basic"
            label="username"
            value={fields.username}
            onChange={(e) => setFields({ ...fields, username: e.target.value })}
            placeholder="Username"
            variant="outlined"
          />
          <TextField
            className="formItems"
            id="filled-basic"
            label="password"
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            variant="outlined"
          />
          <TextField
            className="formItems"
            id="filled-basic"
            label="confirm password"
            value={fields.cpassword}
            onChange={(e) =>
              setFields({ ...fields, cpassword: e.target.value })
            }
            variant="outlined"
          />
          <Button
            className="formButton"
            size="large"
            onClick={fetcher}
            variant="outlined"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </>
  );
};

export default HomePage;

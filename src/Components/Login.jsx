import React, { useState } from "react";
import api from "../api";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/signup.css";
import { Alert, Typography } from "@mui/material";
const HomePage = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [signupAlert, setAlert] = useState({
    message: "",
    messageType: "",
    response: "",
  });

  //   const url = "http://localhost:8888";
  const connectionurl = "http://localhost:8888/login?";
  const fetcher = async (e) => {
    e.preventDefault();

    if (fields.email === "" || fields.password === "") {
      setAlert({
        messageType: "error",
        message: "Please enter all the fields",
        response: true,
      });
    } else {
      await api
        .get(
          `${connectionurl}email=${fields.email}&password=${fields.password}`
        )
        .then((response) => {
          if (response.status === 200) {
            setAlert({
              messageType: "success",
              message: "Login Success",
              response: true,
            });
            setFields({
              email: "",
              password: "",
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
    <div className="signUpContainer">
      {signupAlert.response && (
        <Alert severity={signupAlert.messageType}>{signupAlert.message}</Alert>
      )}

      <Typography variant="h4" margin={"20px"} component="h4">
        Login
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
            label="password"
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            variant="outlined"
          />
          <Button
            className="formButton"
            size="large"
            onClick={fetcher}
            variant="outlined"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;

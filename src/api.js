/* eslint-disable no-unused-vars */
import axios from "axios";

// login data http://localhost:8888/insert?name=karan&email=kbnoname@gmail.com
// signup data http://localhost:8888/update?email=kbnoname@gmail.com&newemail=karanbhati149@gmail.com
// update data http://localhost:8888/update?email=kbnoname@gmail.com&newpassword=thisisnotme

const netlifylocal = "http://localhost:8888";
export default axios.create({
  baseURL: netlifylocal,
});

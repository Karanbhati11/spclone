import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

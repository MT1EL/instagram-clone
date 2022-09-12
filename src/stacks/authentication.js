import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/authentication/login";
import Signup from "../components/authentication/signup";

function Authentication({ setAuthenticated }) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Authentication;

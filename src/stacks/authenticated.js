import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/.";
import UserProfile from "../screens/UserProfile";
import Messenger from "../screens/Messenger";
function Authenticated({ authenticated, setAuthenticated }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          }
        />
        <Route path="/Messenger" element={<Messenger />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Authenticated;

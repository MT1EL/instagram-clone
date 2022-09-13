import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home/.";
import UserProfile from "../screens/UserProfile";
import Messenger from "../screens/Messenger";
import Header from "../components/header";
import { useDisclosure } from "@chakra-ui/react";
function Authenticated({ authenticated, setAuthenticated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        onOpen={onOpen}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                onClose={onClose}
                onOpen={onOpen}
                isOpen={isOpen}
              />
            }
          />
          <Route path="/Messenger" element={<Messenger />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Authenticated;

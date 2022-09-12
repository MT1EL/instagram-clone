import {
  Img,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/Home.png";
import homeFilled from "../assets/Home-fill.png";
import messenger from "../assets/Messenger.png";
import messengerFilled from "../assets/Messenger-Fill.png";
import newPost from "../assets/NewPosts.png";
import findPeople from "../assets/FindPeople.png";
import findPeopleFilled from "../assets/FindPeople-Fiil.png";
import activity from "../assets/ActivityFeed.png";
import activityFilled from "../assets/ActivityFeed-Fiil.png";
import search from "../assets/Search.png";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import defaultUser from "../assets/defaultUserImage.jpg";
function Header({ authenticated, setAuthenticated, onOpen }) {
  const navigate = useNavigate();

  const icons = [home, messenger, newPost, findPeople, activity];
  const filledIcons = [
    homeFilled,
    messengerFilled,
    newPost,
    findPeopleFilled,
    activityFilled,
  ];

  return (
    <Box
      borderBottom="1px solid #000"
      dropShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <Box
        maxW="935px"
        mx="auto"
        py="9px"
        display="flex"
        justifyContent="space-between"
      >
        <Img src={logo} alt="logo" objectFit="contain" />
        <InputGroup maxW="215px" h="28px" position="relative">
          <InputLeftElement
            children={<Img src={search} alt="search" />}
            h="28px"
          />
          <Input
            h="28px"
            placeholder="Search"
            border="1px solid #DBDBDB"
            borderRadius="3px"
          />
        </InputGroup>
        <Box
          display="flex"
          p="7px, 0px, 7px, 24px"
          gap="22px"
          alignItems="center"
        >
          {icons.map((icon, index) => (
            <Img
              src={icon}
              alt="icons"
              objectFit="contain"
              key={index}
              onClick={index === 2 ? onOpen : null}
            />
          ))}
          <Img
            src={authenticated.photoURL ? authenticated.photoURL : defaultUser}
            alt="icons"
            objectFit="contain"
            h="25px"
            borderRadius="50%"
            onClick={() =>
              auth
                .signOut()
                .then(async (res) => {
                  localStorage.setItem("user", "false");
                  setAuthenticated(false);
                })
                .catch((er) => console.log(er))
            }
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

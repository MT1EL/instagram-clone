import React from "react";
import Header from "../../components/header";
import { Box, useDisclosure } from "@chakra-ui/react";
import Storys from "../../components/storys";
import Post from "../../components/Post";
import Suggestions from "../../components/Suggestions";
import PostPopup from "./postPopup";
function Home({ authenticated, setAuthenticated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        onOpen={onOpen}
      />
      <Box maxW="935px" mx="auto" display="flex">
        <Box>
          <Storys />
          <Post />
        </Box>
        <Suggestions />
      </Box>
      <PostPopup isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
}

export default Home;

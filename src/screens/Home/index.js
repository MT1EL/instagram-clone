import React from "react";
import { Box } from "@chakra-ui/react";
import Storys from "../../components/storys";
import Post from "../../components/Post";
import Suggestions from "../../components/Suggestions";
import PostPopup from "./postPopup";
function Home({ onOpen, onClose, isOpen }) {
  return (
    <>
      <Box maxW={["100%", "935px"]} mx="auto" display="flex">
        <Box maxW={"100%"}>
          <Storys />
          <Post />
        </Box>
        <Box display={["none", "block"]}>
          <Suggestions />
        </Box>
      </Box>
      <Box>
        <PostPopup isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
    </>
  );
}

export default Home;

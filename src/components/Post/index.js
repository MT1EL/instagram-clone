import React from "react";
import { Box } from "@chakra-ui/react";
import PostHeader from "./postHeader";
import PostBody from "./postBody";
import AddComment from "./addComment";
function Post() {
  return (
    <Box maxW="614px">
      <PostHeader />
      <PostBody />
      <AddComment />
    </Box>
  );
}

export default Post;

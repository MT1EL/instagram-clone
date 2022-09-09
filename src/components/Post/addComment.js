import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Img,
  Text,
} from "@chakra-ui/react";
import smile from "../../assets/Emoji.png";

function AddComment() {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement children={<Img src={smile} />} />
        <Input placeholder="Add a comment..." borderRadius="0px" />
        <InputRightElement
          children={
            <Text fontWeight="600" color="#0095F6" mr="10px">
              Post
            </Text>
          }
        />
      </InputGroup>
    </Box>
  );
}

export default AddComment;

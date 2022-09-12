import React, { useState } from "react";
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
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
function AddComment({ comments, id, user }) {
  const [comment, setComment] = useState();
  const postRef = doc(db, "posts", id);
  const handleComments = () => {
    let newArr = [...comments];
    comment !== "" &&
      newArr.push({ author: user.displayName, content: comment });
    updateDoc(postRef, {
      comments: newArr,
    });
    setComment("");
  };
  return (
    <Box>
      <InputGroup>
        <InputLeftElement children={<Img src={smile} />} />
        <Input
          placeholder="Add a comment..."
          borderRadius="0px"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <InputRightElement
          children={
            <Text
              fontWeight="600"
              color="#0095F6"
              mr="10px"
              onClick={handleComments}
            >
              Post
            </Text>
          }
        />
      </InputGroup>
    </Box>
  );
}

export default AddComment;

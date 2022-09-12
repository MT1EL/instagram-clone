import React, { useEffect, useState } from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import image from "../../assets/postImage.png";
import like from "../../assets/Lİke.png";
import likeFilled from "../../assets/likeFilled.png";
import comment from "../../assets/Comment.png";
import share from "../../assets/SharePosts.png";
import save from "../../assets/Save.png";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
function PostBody({ imageUrl, description, likes, comments, name, id }) {
  const [oneCom, setOneCom] = useState(false);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    const result =
      comments.length > 0
        ? comments[Math.floor(Math.random() * comments.length)]
        : false;
    setOneCom(result);
  }, []);
  const currentUser = auth.currentUser.email;
  const postRef = doc(db, "posts", id);

  const handleLike = () => {
    let newArr = [...likes];
    !likes.includes(currentUser)
      ? newArr.push(currentUser)
      : newArr.pop(currentUser);
    updateDoc(postRef, {
      likes: newArr,
    });
  };
  return (
    <Box onDoubleClick={handleLike}>
      {/* Post Image */}
      <Img src={imageUrl} alt="image" w="100%" objectFit="cover" />
      {/* Post Footer Container */}
      <Box px="16px" border="1px solid #DBDBDB">
        {/* Post Icons */}
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Img
              src={like}
              alt="icon"
              p="8px"
              onClick={handleLike}
              display={likes.includes(currentUser) ? "none" : "block"}
            />
            <Img
              src={likeFilled}
              alt="icon"
              p="8px"
              onClick={handleLike}
              display={likes.includes(currentUser) ? "block" : "none"}
            />
            <Img src={comment} alt="icon" p="8px" />
            <Img src={share} alt="icon" p="8px" />
          </Box>
          <Img src={save} alt="icon" objectFit="contain" />
        </Box>
        {/* Post Likes */}
        <Box display="flex">
          <Text fontWeight="600" color="#262626">
            {likes.length}
          </Text>
          <Text fontWeight="600" color="#262626">
            likes
          </Text>
        </Box>
        {/* Post Comments */}
        <Box display="flex" position="relative">
          {/* comment author */}
          <Text fontWeight="600" color="#262626">
            {name}
          </Text>
          {/* comment content */}
          <Text
            maxW="100%"
            overflow="hidden"
            noOfLines={1}
            isTruncated
            display={!description && "none"}
          >
            {/* Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque */}
            {description}
          </Text>
          <Text
            position="absolute"
            right="2"
            color="#8E8E8E"
            display={!description || (name.length < 400 && "none")}
          >
            more
          </Text>
        </Box>
        <Box display={!oneCom || showComments ? "none" : "flex"}>
          <Text fontWeight="600">{oneCom.author + " "}</Text>
          <Text ml="4">{oneCom.content}</Text>
        </Box>
        {showComments &&
          comments.map((comment, index) => (
            <Flex key={index}>
              <Text fontWeight="600">{comment.author + " "}</Text>
              <Text ml="4">{comment.content}</Text>
            </Flex>
          ))}
        <Box>
          <Text
            color="#8E8E8E"
            onClick={() => setShowComments(!showComments)}
            cursor="pointer"
          >
            {showComments ? "Hide" : "View"} all {comments.length} comments
          </Text>
        </Box>
        <Box>
          <Text color="#8E8E8E">1 Hour ago</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PostBody;

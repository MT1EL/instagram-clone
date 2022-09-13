import React, { useEffect, useState } from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import like from "../../assets/Lİke.png";
import likeFilled from "../../assets/likeFilled.png";
import comment from "../../assets/Comment.png";
import share from "../../assets/SharePosts.png";
import save from "../../assets/Save.png";
import saveFilled from "../../assets/SaveFilled.png";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
function PostBody({
  createdAt,
  imageUrl,
  description,
  likes,
  comments,
  name,
  id,
  saved,
}) {
  const [oneCom, setOneCom] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [postUploadTime, setPostUploadTime] = useState(0);
  useEffect(() => {
    const result =
      comments.length > 0
        ? comments[Math.floor(Math.random() * comments.length)]
        : false;
    setOneCom(result);
    const one_hour = 1000 * 60 * 60;
    setPostUploadTime(
      Math.ceil(
        (new Date().getTime() - new Date(createdAt?.seconds * 1000).getTime()) /
          one_hour
      )
    );
  }, []);

  const currentUser = auth.currentUser.email;
  const postRef = doc(db, "posts", id);
  const uid = auth.currentUser.uid;
  const userRef = doc(db, "users", uid);
  const handleLike = () => {
    let newArr = [...likes];
    !likes?.includes(currentUser)
      ? newArr.push(currentUser)
      : newArr.pop(currentUser);
    updateDoc(postRef, {
      likes: newArr,
    });
  };
  const handleSave = () => {
    getDoc(postRef)
      .then((res) => {
        let newArr = [...saved];
        newArr?.includes(res.id)
          ? newArr.splice(newArr.indexOf(res.id), 1)
          : newArr.push(res.id);

        updateDoc(userRef, {
          saved: newArr,
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <Box>
      {/* Post Image */}
      <Img
        src={imageUrl}
        alt="image"
        w="100%"
        objectFit="cover"
        onDoubleClick={handleLike}
      />
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
              display={likes?.includes(currentUser) ? "none" : "block"}
            />
            <Img
              src={likeFilled}
              alt="icon"
              p="8px"
              onClick={handleLike}
              display={likes?.includes(currentUser) ? "block" : "none"}
            />
            <Img src={comment} alt="icon" p="8px" />
            <Img src={share} alt="icon" p="8px" />
          </Box>
          <Img
            src={save}
            alt="icon"
            objectFit="contain"
            onClick={handleSave}
            cursor="pointer"
            display={saved?.includes(id) ? "none" : "block"}
          />
          <Img
            src={saveFilled}
            alt="save Filled"
            objectFit={"contain"}
            onClick={handleSave}
            cursor="pointer"
            display={saved?.includes(id) ? "block" : "none"}
          />
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
            display={description === false && "none"}
          >
            {/* Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque */}
            {description}
          </Text>
          <Text
            position="absolute"
            right="2"
            color="#8E8E8E"
            display={
              description === false || name.length < 400 ? "none" : "block"
            }
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
          <Text color="#8E8E8E">
            {postUploadTime === 1
              ? "less than "
              : postUploadTime >= 24
              ? Math.floor(postUploadTime / 24)
              : postUploadTime >= 168 && postUploadTime / 168}{" "}
            {postUploadTime < 24
              ? "Hour ago"
              : postUploadTime >= 24
              ? "Day ago"
              : postUploadTime >= 168 && "Week ago"}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PostBody;

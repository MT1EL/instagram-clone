import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import image from "../../assets/postImage.png";
import like from "../../assets/Lİke.png";
import comment from "../../assets/Comment.png";
import share from "../../assets/SharePosts.png";
import save from "../../assets/Save.png";
function PostBody() {
  const icons = [like, comment, share];
  return (
    <Box>
      {/* Post Image */}
      <Img src={image} alt="image" w="100%" objectFit="cover" />
      {/* Post Footer Container */}
      <Box px="16px" border="1px solid #DBDBDB">
        {/* Post Icons */}
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            {icons.map((icon, index) => (
              <Img src={icon} key={index} alt="icon" p="8px" />
            ))}
          </Box>
          <Img src={save} alt="icon" objectFit="contain" />
        </Box>
        {/* Post Likes */}
        <Box display="flex">
          <Text fontWeight="600" color="#262626">
            1.202
          </Text>
          <Text fontWeight="600" color="#262626">
            likes
          </Text>
        </Box>
        {/* Post Comments */}
        <Box display="flex" position="relative">
          {/* comment author */}
          <Text fontWeight="600" color="#262626">
            terrylucas
          </Text>
          {/* comment content */}
          <Text maxW="100%" overflow="hidden" noOfLines={1} isTruncated>
            Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti
            pellentesque
          </Text>
          <Text position="absolute" right="2" color="#8E8E8E">
            more
          </Text>
        </Box>
        <Box>
          <Text color="#8E8E8E">View all 100 comments</Text>
        </Box>
        <Box>
          <Text color="#8E8E8E">1 Hour ago</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PostBody;

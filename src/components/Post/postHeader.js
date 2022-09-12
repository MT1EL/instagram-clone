import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import profilePic from "../../assets/profilePics/Profile-Pic-S.png";
import more from "../../assets/More.png";

function PostHeader({ name }) {
  return (
    <Box
      mt="30px"
      display="flex"
      justifyContent="space-between"
      w="100%"
      p="9px 0px 9px 16px"
      border="1px solid #DBDBDB"
    >
      <Box display="flex">
        <Img src={profilePic} alt="profilePic" objectFit="contain" />
        {/*here should be userName */}
        <Text fontWeight="600" color="#262626" p="10px 0px 10px 14px">
          {name}
        </Text>
      </Box>
      <Img src={more} alt="more" objectFit="contain" />
    </Box>
  );
}

export default PostHeader;

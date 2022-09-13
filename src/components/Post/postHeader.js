import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import more from "../../assets/More.png";

function PostHeader({ name, image }) {
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
        <Img
          src={image}
          alt="profilePic"
          objectFit="cover"
          w="22px"
          h="22px"
          borderRadius="50%"
          mt="11px"
        />
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

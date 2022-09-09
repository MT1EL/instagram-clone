import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import profile from "../../assets/Profile-Pic-S1.png";

function MyAcc() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Img
          src={profile}
          alt="profile"
          objectFit="contain"
          w="68px"
          h="56px"
        />
        <Box>
          {/* username */}
          <Text>shirleyromero</Text>
          <Text color="#8E8E8E">shirley romero</Text>
        </Box>
      </Box>
      <Box>
        <Text fontWeight="600" color="#0095F6">
          Switch
        </Text>
      </Box>
    </Box>
  );
}

export default MyAcc;

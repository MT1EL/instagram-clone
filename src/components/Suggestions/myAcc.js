import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import { auth } from "../../firebase";
import defaultUserImage from "../../assets/defaultUserImage.jpg";
function MyAcc() {
  const user = auth.currentUser;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Img
          src={user.photoURL ? user.photoURL : defaultUserImage}
          alt="profile"
          objectFit="contain"
          w="68px"
          h="56px"
          borderRadius="50%"
        />
        <Box>
          {/* username */}
          <Text>{user?.displayName}</Text>
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

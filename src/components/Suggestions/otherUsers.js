import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import user1 from "../../assets/profilePics/Profile-Pic-S1.png";
import user2 from "../../assets/profilePics/Profile-Pic-S2.png";
import user3 from "../../assets/profilePics/Profile-Pic-S3.png";
import user4 from "../../assets/profilePics/Profile-Pic-S4.png";
import user5 from "../../assets/profilePics/Profile-Pic-S5.png";
function OtherUsers() {
  const users = [
    { image: user1, name: "terylucas" },
    { image: user2, name: "lauramatthews" },
    { image: user3, name: "harryprescott" },
    { image: user4, name: "ednamanz" },
  ];
  return (
    <Box mt="10px">
      <Box display="flex" justifyContent="space-between">
        <Text color="#8E8E8E" fontWeight="600" fontSize="14px">
          Suggestions For You
        </Text>
        <Text color="#262626" fontWeight="600" fontSize="14px">
          See All
        </Text>
      </Box>
      {users.map((user) => (
        <Box
          display="flex"
          justifyContent="space-between"
          key={user.name}
          my="4"
          alignItems="center"
          gap="4"
        >
          <Img src={user.image} alt="user" />
          <Box>
            <Text fontSize="14px" color="#262626">
              {user.name}
            </Text>
            <Text color="#8E8E8E" fontSize="12px">
              Followed by terylucas + 2 more
            </Text>
          </Box>
          <Text color="#0095F6" fontWeight="600">
            Follow
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default OtherUsers;

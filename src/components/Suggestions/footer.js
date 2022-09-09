import React from "react";
import { Box, Text } from "@chakra-ui/react";
function Footer() {
  const footer = [
    "About",
    "Press",
    "Api",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Top Accounts",
    "Hashtags",
    "Language",
  ];
  return (
    <Box display="flex" flexWrap="wrap">
      {footer.map((item) => (
        <Text key={item} color="#C7C7C7" mr="4" fontSize="14px">
          {item}
        </Text>
      ))}
    </Box>
  );
}

export default Footer;

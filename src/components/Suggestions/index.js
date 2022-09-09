import React from "react";
import { Box } from "@chakra-ui/react";
import MyAcc from "./myAcc";
import OtherUsers from "./otherUsers";
import Footer from "./footer";
function Suggestions() {
  return (
    <Box w="100%" mt="30px" ml="20px" p="10px 0px">
      <MyAcc />
      <OtherUsers />
      <Footer />
    </Box>
  );
}

export default Suggestions;

import React from "react";
import { Box, Img } from "@chakra-ui/react";
import person1 from "../assets/profilePics/Profile-Pic-S1.png";
import person2 from "../assets/profilePics/Profile-Pic-S2.png";
import person3 from "../assets/profilePics/Profile-Pic-S3.png";
import person4 from "../assets/profilePics/Profile-Pic-S4.png";
import person5 from "../assets/profilePics/Profile-Pic-S5.png";
import person6 from "../assets/profilePics/Profile-Pic-S6.png";
import person7 from "../assets/profilePics/Profile-Pic-S7.png";
import person8 from "../assets/profilePics/Profile-Pic-S8.png";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

function Storys() {
  const stories = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
  ];
  return (
    <Box
      p="17px 0px"
      border="1px solid #DBDBDB"
      mx="auto"
      maxW="614px"
      mt="30px"
    >
      <Box display="flex" p="11px" gap="10px" maxW="100%">
        {stories.map((image, index) => (
          <Box p="3px 3px" key={index}>
            <Img
              src={image}
              alt="profilePic"
              bgGradient={"linear(#DE0046 , #F7A34B)"}
              p="2px"
              borderRadius="50%"
              minW="66px"
              minH="66px"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Storys;

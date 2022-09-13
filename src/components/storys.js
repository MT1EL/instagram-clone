import React, { useState } from "react";
import { Box, Img } from "@chakra-ui/react";
import person1 from "../assets/profilePics/Profile-Pic-S1.png";
import person2 from "../assets/profilePics/Profile-Pic-S2.png";
import person3 from "../assets/profilePics/Profile-Pic-S3.png";
import person4 from "../assets/profilePics/Profile-Pic-S4.png";
import person5 from "../assets/profilePics/Profile-Pic-S5.png";
import person6 from "../assets/profilePics/Profile-Pic-S6.png";
import person7 from "../assets/profilePics/Profile-Pic-S7.png";
import person8 from "../assets/profilePics/Profile-Pic-S8.png";
import arrow from "../assets/carouselArrow.png";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Box
      p="17px 0px"
      border="1px solid #DBDBDB"
      maxW={["100%", "614px"]}
      mt="30px"
    >
      <Box
        display="flex"
        overflow="hidden"
        p="11px"
        gap="10px"
        maxW="100%"
        position="relative"
      >
        <Img
          src={arrow}
          alt="arrow Right"
          position="absolute"
          left="5px"
          top="calc(50% - 11px)"
          backgroundColor="#fff"
          borderRadius="50%"
          zIndex="2"
          transform={"rotate(180deg)"}
          display={currentIndex === 0 && "none"}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        />

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
              style={{ transform: `translate(-${currentIndex * 100}% )` }}
              transition={"200ms cubic-bezier(0.39, 0.575, 0.565, 1)"}
            />
          </Box>
        ))}
        <Img
          src={arrow}
          alt="arrow Right"
          position="absolute"
          right="5px"
          top="calc(50% - 11px)"
          backgroundColor="#fff"
          borderRadius="50%"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          display={stories.length - 7 === currentIndex && "none"}
        />
      </Box>
    </Box>
  );
}

export default Storys;

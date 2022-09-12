import React from "react";
import { Box, Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
function AuthenticationHeader({ setAuthenticated }) {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  const onSubmit = () =>
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        setAuthenticated(res.user);
      })
      .catch((err) => console.log(err));
  return (
    <>
      <Box>
        <Img src={logo} alt="logo" objectFit="contain" />
      </Box>
      <Button
        backgroundColor="#0095f6"
        color="#FFF"
        leftIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
        onClick={() => onSubmit()}
      >
        continue with Facebook
      </Button>
      <Flex
        w="100%"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box w="40%" bg="#CCC" h="3px" />
        <Text>OR</Text>
        <Box w="40%" bg="#CCC" h="3px" />
      </Flex>
    </>
  );
}

export default AuthenticationHeader;

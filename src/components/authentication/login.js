import React from "react";
import { Box, Input, Flex, Button, Text } from "@chakra-ui/react";
import AuthenticationHeader from "./authenticationHeader";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup";
function Login({ setAuthenticated }) {
  const inputs = ["email", "password"];
  const navigate = useNavigate();
  const auth = getAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Field is required"),
      password: yup
        .string()
        .min(6, "must be 6 character or more")
        .required("Field is required"),
    }),
    onSubmit: (values) =>
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          setAuthenticated(res.user);
          localStorage.setItem("user", JSON.stringify(res.user));
        })
        .catch((err) => console.log(err)),
  });

  return (
    <Box
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxW="350px"
      h="100vh"
      justifyContent="space-around"
      py="30"
    >
      <AuthenticationHeader setAuthenticated={setAuthenticated} />
      <Box>
        {inputs.map((item) => (
          <Input
            placeholder={item}
            key={item}
            mt="2"
            borderRadius="0px"
            bg="rgba(232, 230, 230, 0.5)"
            border="2px solid #E0DDDD"
            name={item}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
      </Box>

      <Button
        bg={"#b2dffc"}
        color="#FFF"
        w="100%"
        mt="4"
        onClick={formik.handleSubmit}
      >
        Log in
      </Button>

      <Flex>
        <Text color="#AEA9A9">Don't have an account? </Text>
        <Text
          color="#267FF3"
          onClick={() => navigate("/sign-up")}
          ml="4"
          cursor="pointer"
        >
          Sign up
        </Text>
      </Flex>
    </Box>
  );
}

export default Login;

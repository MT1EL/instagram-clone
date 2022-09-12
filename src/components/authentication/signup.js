import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router";
import AuthenticationHeader from "./authenticationHeader";
import { useFormik } from "formik";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import * as yup from "yup";
import { auth, db } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
function Signup() {
  const navigate = useNavigate();
  const inputs = ["Email", "Full name", "Username", "Password"];
  const formik = useFormik({
    initialValues: {
      Email: "",
      "Full name": "",
      Username: "",
      Password: "",
    },
    validationSchema: yup.object({
      Email: yup.string().email().required("Field is required"),
      "Full name": yup.string().min(2).required("Field is required"),
      Username: yup.string().required("Field is required"),
      Password: yup
        .string()
        .min(6, "must be 6 character or more")
        .required("Field is required"),
    }),
    onSubmit: (values) => {
      createUserWithEmailAndPassword(
        auth,
        values.Email,
        values.Password,
        values.Username
      )
        .then(async (res) => {
          const colRef = collection(db, "users");

          await setDoc(doc(db, "users", res.user.uid), {
            email: values.Email,
            fullName: values["Full name"],
            displayName: values.Username,
            profileImage:
              "https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg",
            followers: [],
            following: [],
            saved: [],
          });
        })
        .catch((err) => console.log(err.message));
    },
  });
  return (
    <Box
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      h="100vh"
      alignItems="center"
      maxW="350px"
      py="10"
    >
      <AuthenticationHeader />
      <Box w="100%">
        {inputs.map((item) => (
          <FormControl key={item} mt="2">
            <Input
              type={item === "Password" ? "Password" : "text"}
              name={item}
              placeholder={item}
              borderRadius="0px"
              bg="rgba(232, 230, 230, 0.5)"
              border="2px solid #E0DDDD"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              borderColor={formik.errors[item] && formik.touched[item] && "red"}
            />
            <FormHelperText
              color={formik.errors[item] && formik.touched[item] && "red"}
              display={
                formik.errors[item] && formik.touched[item] ? "block" : "none"
              }
            >
              {formik.errors[item]}
            </FormHelperText>
          </FormControl>
        ))}
      </Box>

      <Button
        disabled={Object.keys(formik.errors).length === 0 ? false : true}
        bg={"#b2dffc"}
        color="#FFF"
        w="100%"
        mt="4"
        type="submit"
        onClick={() => formik.handleSubmit()}
      >
        Sign up
      </Button>

      <Flex>
        <Text color="#AEA9A9">Have an account?</Text>
        <Text
          color="#267FF3"
          onClick={() => navigate("/")}
          ml="4"
          cursor="pointer"
        >
          Log in
        </Text>
      </Flex>
    </Box>
  );
}

export default Signup;

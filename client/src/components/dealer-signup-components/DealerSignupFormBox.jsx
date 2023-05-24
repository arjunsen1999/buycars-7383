import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  HStack,
  Text,
  Box,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function DealerSignupFormBox() {
  const [showPassword, setShowPassword] = useState(false);
  const [formInput, setFormInput] = useState({
    first_name: "",
    last_name: "",
    role: "dealer",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    console.log(formInput);
  };
  return (
    <>
      <Flex minH={"100vh"} align={"flex-start"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"} rounded={"xl"} p={6} my={2}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Become a Dealer
          </Heading>
          <Text color={"#A0AEC0"} mb="30px">
            Enter your email and password to sign Up!
          </Text>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={formInput.first_name}
                  name="first_name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={formInput.last_name}
                  name="last_name"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="buycars@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="email"
              value={formInput.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
                name="password"
                value={formInput.password}
                onChange={handleChange}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              w="full"
              _hover={{
                bg: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)",
              }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Stack>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button w="full">
              <Box mr="10px">
                <FcGoogle />
              </Box>
              Login with Google
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"} color="#A0AEC0">
              Already a user?{" "}
              <Link to="/login">
                <span style={{ color: "blue" }}>Login</span>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

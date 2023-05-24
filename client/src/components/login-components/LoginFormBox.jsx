import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Box,
  InputGroup,
  InputRightElement,
  Checkbox,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function LoginFormBox() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Flex minH={"100vh"} align={"flex-start"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"} rounded={"xl"} p={6} my={2}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
            Login
          </Heading>
          <Text color={"#A0AEC0"} mb="30px">
            Enter your email and password to login!
          </Text>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="fashion-deal@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={"Password"}
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
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Checkbox>Remember me</Checkbox>
            <Link to="/forgotPassword">
              <span style={{ color: "blue" }}>Forgot password?</span>
            </Link>
          </Stack>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              w="full"
              _hover={{
                bg: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)",
              }}
            >
              Login
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
              If you don't have account?{" "}
              <Link to="/signup">
                <span style={{ color: "blue" }}>Sign Up</span>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

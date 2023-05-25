import {
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth_logout } from "../../redux/auth/auth.actionType";
import notification from "../../Toast";

export default function MenuComponents() {
  const { auth } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: auth_logout });
    notification("success", "Successfully Logout");
  };
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CiUser fontSize={"24px"} />
            <Text>Profile</Text>
          </Box>
        </MenuButton>
        <MenuList p={"10px"}>
          <Heading as={"h2"} fontSize={"25px"}>
            {auth ? `${auth.first_name} ${auth.last_name}` : "Hello User"}
          </Heading>
          <Text mb="15px" fontSize={"13px"}>
            To access your Buycars account
          </Text>
          {auth ? (
            <Button
              bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)"
              color={"white"}
              w="full"
              _hover={{
                bg: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,43,209,1) 98%, rgba(72,11,228,1) 100%)",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
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
            </Link>
          )}
          <MenuDivider />
          <Link to="/dealer-signup">
            <MenuItem>Become a Dealer</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
}

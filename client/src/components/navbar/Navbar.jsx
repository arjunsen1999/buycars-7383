import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import MenuComponents from "./MenuComponents";
import { useSelector } from "react-redux";
import {BsCartCheck} from "react-icons/bs"

function NavLink({ children, link }) {
  return (
    <>
      <Link
        px={2}
        py={1}
        to={link}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
      >
        {children}
      </Link>
    </>
  );
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth } = useSelector((state) => state.Auth);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"sticky"}
        top="0px"
        zIndex={10}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink link={"/"}>Home</NavLink>
              {/* {
                  return <NavLink link={"/dashboard"}>Dealer Dashboard</NavLink>
                } */}
              {auth.role === "dealer" ? (
                <NavLink link={"/dashboard"}>Dealer Dashboard</NavLink>
              ) : null}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap="25px">
          <Link to={"/cart"}>
              <Flex
                align={"center"}
                justify={"center"}
                flexDirection={"column"}
              >
                <BsCartCheck fontSize={"1.5rem"} color={"#8895A8"} />
                <Text fontWeight={"bold"} color={"#8895A8"}>
                  Cart
                </Text>
              </Flex>
            </Link>
            <MenuComponents />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

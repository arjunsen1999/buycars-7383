import React from "react";
import {
  chakra,
  Box,
  Stack,
  Text,
  Image,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import notification from "../../Toast";
import axios from "axios";
import { useSelector } from "react-redux";


export default function Card({image, title, description, _id}) {
  const { auth } = useSelector((state) => state.Auth);
  const addToCart = async () => {
    const payload = {
      Cars_inventoryID: _id,
    };
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/cart`,
        payload,
        {
          headers: { token: auth.token },
        }
      );
      notification("success", data.message);
    } catch (error) {
      notification("error", error.response.data.message);
    }
  };
  return (
    <>
      <Container p={{ base: 5, md: 10 }}>
        <Box
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          rounded="md"
          overflow="hidden"
          bg={useColorModeValue("white", "gray.800")}
        >
          <Image
            src={image}
            objectFit="cover"
            w="100%"
          />
          <Box p={{ base: 3, sm: 5 }}>
            <Box mb={6}>
              <chakra.h3
                fontSize={{ base: "lg", sm: "2xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb={2}
              >
                {title}
              </chakra.h3>
              <Text fontSize={{ base: "md", sm: "lg" }} noOfLines={2}>
               {
                description
               }
              </Text>
            </Box>
            <Stack
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 0 }}
            >
              <Link to={`/car/${_id}`}>
              <Button colorScheme={"teal"} variant="outline">
                Car Details
              </Button>
              </Link>
              <Button colorScheme={"teal"} onClick={addToCart}>Add to Cart</Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  );
}

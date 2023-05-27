import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import notification from "../Toast";
import { useSelector } from "react-redux";

export default function SingleProduct() {
  const { auth } = useSelector((state) => state.Auth);
  const { id } = useParams("id");
  const [cardata, setcarData] = useState({});
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cars/${id}`
      );
      setcarData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    const payload = {
      Cars_inventoryID: id,
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
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={cardata.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {cardata.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {cardata?.OEM_SpecsID?.ListPrice}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <Stack spacing={{ base: 4, sm: 6 }}>
                <Text>{cardata.description}</Text>
              </Stack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Colors:
                      </Text>{" "}
                      {cardata?.OEM_SpecsID?.Colors?.join(",")}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Max Speed:
                      </Text>{" "}
                      {cardata.OEM_SpecsID?.MaxSpeed}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Mileage:
                      </Text>{" "}
                      {cardata.OEM_SpecsID?.Mileage}
                    </ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Model:
                      </Text>{" "}
                      {cardata.OEM_SpecsID?.Model}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Power:
                      </Text>{" "}
                      {cardata.OEM_SpecsID?.Power}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Year:
                      </Text>{" "}
                      {cardata.OEM_SpecsID?.Year}
                    </ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Car Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      KMS ON ODOMETER:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.KMsOnOdometer}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      MAJOR SCRATCHES:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.MajorScratches}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      ORIGINAL PAINT:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.OriginalPaint}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      NUMBER OF ACCIDENTS:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.NumberOfAccidents}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      NUMBER OF PREVIOUS BUYERS:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.NumberOfPreviousBuyers}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      REGISTRATION PLACE:
                    </Text>{" "}
                    {cardata.Marketplace_InventoryID?.RegistrationPlace}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"teal"}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={addToCart}
            >
              Add to cart
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}

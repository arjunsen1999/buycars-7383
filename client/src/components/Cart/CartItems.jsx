import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import RemoveItemAlert from "./RemoveItemAlert";

export default function CartItems() {
  return (
    <>
      <Box w="100%" borderWidth="1px" minH="100px" mb="10px">
        <Box
          w="100%"
          p="20px"
          borderBottomWidth="1px"
          minH="100px"
          display={"grid"}
          gridTemplateColumns={"1fr 3fr"}
          gap={"10px"}
        >
          <Box>
            <Image
              src="https://images.meesho.com/images/products/146519605/fsjdd_512.jpg"
              w="100%"
            />
          </Box>
          <Box>
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              mb="10px"
            >
              <Box w="80%">
                <Text fontWeight={"bold"} noOfLines={1} fontSize={"17px"}>
                  Title
                </Text>
              </Box>
              <Box
                color={"#008060"}
                fontSize={"18px"}
                fontWeight={"bold"}
                w="20%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >

              </Box>
            </Box>

            <Box
              // border={"1px solid red"}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              mb="10px"
            >
              <Text fontSize={"20px"} mr="20px">
                Model: M
              </Text>
              <Text fontSize={"20px"}>Year: 1</Text>
            </Box>
            <Box mb="10px">
              <Text fontSize={"20px"}>₹311</Text>
            </Box>
            <Box>
              <RemoveItemAlert />
            </Box>
          </Box>
        </Box>
        <Box
          w="100%"
          p="10px 20px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"18px"}>Dealer : SSmyth</Text>
          <Text fontSize={"18px"}>Free Delivery</Text>
        </Box>
      </Box>
    </>
  );
}
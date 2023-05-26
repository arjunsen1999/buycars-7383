import { Box, Button } from "@chakra-ui/react";
import React from "react";

export default function PagButton() {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
      >
        <Button colorScheme="teal">Prev</Button>
        <Button>1</Button>
        <Button colorScheme="teal">Next</Button>
      </Box>
    </>
  );
}

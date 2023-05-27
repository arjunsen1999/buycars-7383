import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Card from "../components/Home/Card";
import PagButton from "../components/Home/PagButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        p={"20px 40px"}
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        gap="20px"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
      <Box>
        <PagButton />
      </Box>
    </>
  );
}

import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import AddCarsDrawer from "../components/Dashboard/AddCarsDrawer";
import CarTable from "../components/Dashboard/CarTable";
import PagButton from "../components/Dashboard/PagButton";

export default function DealerDashboard() {
  return (
    <>
      <Navbar />
      <Box w="100%" p={"20px 40px"}>
        <AddCarsDrawer />
        <Box overflowX={"scroll"} mb="20px">
          <CarTable />
        </Box>
        <Box>
          <PagButton />
        </Box>
      </Box>
    </>
  );
}

import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import CarTableLists from "./CarTableLists";

export default function CarTable() {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Model</Th>
              <Th>Year</Th>
              <Th>List Price</Th>
              <Th>Colors</Th>
              <Th>Mileage</Th>
              <Th>Power</Th>
              <Th>MaxSpeed</Th>
              <Th>KMs on Odometer</Th>
              <Th>Major Scratches</Th>
              <Th>Original Paint</Th>
              <Th>Number Of Accidents</Th>
              <Th>Number Of Previous Buyers</Th>
              <Th>Registration Place</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CarTableLists />
            <CarTableLists />
            <CarTableLists />
            <CarTableLists />
            <CarTableLists />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

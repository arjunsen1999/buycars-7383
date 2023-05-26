import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";
import EditCarsDrawer from "./EditCarsDrawer";
import DeleteCarDialog from "./DeleteCarDialog";

export default function CarTableLists() {
  return (
    <>
      <Tr>
        <Td><Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Td>
        <Td>Title</Td>
        <Td>25.4</Td>
        <Td>image</Td>
        <Td>Title</Td>
        <Td>25.4</Td>
        <Td>image</Td>
        <Td>Title</Td>
        <Td>25.4</Td>
        <Td>image</Td>
        <Td>Title</Td>
        <Td>25.4</Td>
        <Td>image</Td>
        <Td>Title</Td>
        <Td>25.4</Td>
        <Td>25.4</Td>
        <Td><EditCarsDrawer /></Td>
        <Td><DeleteCarDialog /></Td>
      </Tr>
    </>
  );
}

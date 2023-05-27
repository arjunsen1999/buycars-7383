import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";
import EditCarsDrawer from "./EditCarsDrawer";
import DeleteCarDialog from "./DeleteCarDialog";

export default function CarTableLists({
  title,
  image,
  description,
  OEM_SpecsID,
  Marketplace_InventoryID,
  _id
}) {
  return (
    <>
      <Tr>
        <Td>
          <Image src={image} alt="Dan Abramov" maxW={"100px"} maxH="80px"/>
        </Td>
        <Td>{title}</Td>
        <Td>{description}</Td>
        <Td>{OEM_SpecsID.Model}</Td>
        <Td>{OEM_SpecsID.Year}</Td>
        <Td>{OEM_SpecsID.ListPrice}</Td>
        <Td>{OEM_SpecsID.Colors.join(",")}</Td>
        <Td>{OEM_SpecsID.Mileage}</Td>
        <Td>{OEM_SpecsID.Power}</Td>
        <Td>{OEM_SpecsID.MaxSpeed}</Td>
        <Td>{Marketplace_InventoryID.KMsOnOdometer}</Td>
        <Td>{Marketplace_InventoryID.MajorScratches}</Td>
        <Td>{Marketplace_InventoryID.OriginalPaint}</Td>
        <Td>{Marketplace_InventoryID.NumberOfAccidents}</Td>
        <Td>{Marketplace_InventoryID.NumberOfPreviousBuyers}</Td>
        <Td>{Marketplace_InventoryID.RegistrationPlace}</Td>
        <Td>
          <EditCarsDrawer id={_id}/>
        </Td>
        <Td>
          <DeleteCarDialog id={_id}/>
        </Td>
      </Tr>
    </>
  );
}

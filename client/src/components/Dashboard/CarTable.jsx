import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import CarTableLists from "./CarTableLists";
import axios from "axios";
import { useSelector } from "react-redux";

export default function CarTable() {
  const [carData, setCarData] = useState([]);
  const { auth } = useSelector((state) => state.Auth);
  const { loadingPage } = useSelector((state) => state.Dashboard);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cars/dealer`,
        {
          headers: { token: auth.token },
        }
      );
      setCarData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [loadingPage]);
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
            {carData.map((ele) => {
              return <CarTableLists key={ele._id} {...ele} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

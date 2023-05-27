import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Card from "../components/Home/Card";
import PagButton from "../components/Home/PagButton";
import axios from "axios";

export default function Home() {
  const [carData, setcarData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cars`
      );
      setcarData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />
      <Box
        p={"20px 40px"}
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        gap="20px"
      >
        {carData.map((ele) => {
          return <Card key={ele._id} {...ele}/>;
        })}

      </Box>
      <Box>
        {/* <PagButton /> */}
      </Box>
    </>
  );
}

import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PriceDetails from "../components/Cart/PriceDetails";
import CartItems from "../components/Cart/CartItems";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Cart() {
  const { auth } = useSelector((state) => state.Auth);
  const { loadingPage } = useSelector((state) => state.Dashboard);
  const [carData, setcarData] = useState([]);
  const [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/cart`,
        {
          headers: { token: auth.token },
        }
      );
      console.log(data.data)
      setCount(data.result);
      setcarData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [loadingPage]);
  return (
    <>
      <Navbar />
      <Box w="100%" minHeight={"120vh"} display="flex" flexDirection={"column"}>
        <Box p={{ base: "40px 10px", sm: "40px 50px" }} mb="40px">
          <Box
            w={{ base: "100%", md: "80%", lg: "70%" }}
            m="0 auto"
            display={"grid"}
            gridTemplateColumns={{ base: "1fr", md: "1.8fr 1fr" }}
          >
            <Box
              borderRightWidth={{ base: "0px", md: "1px" }}
              minH="400px"
              p={"0px 20px"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                mb="20px"
              >
                <Box pr="15px" borderRight={"1px solid black"}>
                  <Text
                    fontSize={"22px"}
                    color={"#333333"}
                    fontWeight={"bolder"}
                  >
                    Cart
                  </Text>
                </Box>
                <Box ml="15px">
                  <Text fontSize={"22px"}>{count} Item</Text>
                </Box>
              </Box>

              <Box>
                {carData.map((ele) => {
                  return <CartItems key={ele._id} {...ele} />;
                })}
              </Box>
            </Box>

            <Box
              h={{ base: "100%", md: "400px" }}
              p={{ base: "0px", md: "0px 20px" }}
              position={"relative"}
              mt={{ base: "30px", md: "0px" }}
            >
              <PriceDetails />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

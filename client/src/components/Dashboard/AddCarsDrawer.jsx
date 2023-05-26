import { Box, Button, Image, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import InputBox from "./InputBox";

export default function AddCarsDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        mb="20px"
      >
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Add Cars
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add Car</DrawerHeader>

            <DrawerBody>
              <Box
                w="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                mb="15px"
              >
                <Box h="80px" borderWidth={"1px"}>
                  <Image
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    h="100%"
                  />
                </Box>
                <Button>Add Image</Button>
              </Box>

              <form action="">
                <InputBox require={true} title={"Title"} name={"title"} />
                <InputBox require={true} title={"Description"} name={"description"} />
   
              </form>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

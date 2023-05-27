import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
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

import InputBox from "./InputBox";

import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

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
          size={"sm"}
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
                <InputBox
                  require={true}
                  title={"Description"}
                  name={"description"}
                />

                {/* /////////////////////////////////////// */}
                <FormControl isRequired mb="15px">
                  <FormLabel>OEM Specs</FormLabel>
                  <AutoComplete rollNavigation>
                    <AutoCompleteInput
                      variant="filled"
                      placeholder="Search..."
                      id="assign_to"
                      autoFocus
                      // onChange={searchUser}
                    />
                    <AutoCompleteList>
                      {["people"].map((person, oid) => (
                        <AutoCompleteItem
                          key={`option-${oid}`}
                          value={""}
                          textTransform="capitalize"
                          align="center"
                        >
                          <Text ml="4"></Text>
                        </AutoCompleteItem>
                      ))}
                    </AutoCompleteList>
                  </AutoComplete>
                </FormControl>

                {/* /////////////////////////////////////// */}

                <InputBox
                  require={true}
                  title={"KMS ON ODOMETER"}
                  name={"title"}
                />
                <InputBox
                  require={true}
                  title={"MAJOR SCRATCHES"}
                  name={"MAJOR SCRATCHES"}
                />
                <InputBox
                  require={true}
                  title={"ORIGINAL PAINT"}
                  name={"ORIGINAL PAINT"}
                />
                <InputBox
                  require={true}
                  title={"NUMBER OF ACCIDENTS"}
                  name={"NUMBER OF ACCIDENTS"}
                />
                <InputBox
                  require={true}
                  title={"NUMBER OF PREVIOUS BUYERS"}
                  name={"NUMBER OF PREVIOUS BUYERS"}
                />
                <InputBox
                  require={true}
                  title={"REGISTRATION PLACE"}
                  name={"REGISTRATION PLACE"}
                />
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

import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function RemoveItemAlert() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Button
        color={"teal"}
        leftIcon={<CloseIcon fontSize={"14px"} />}
        p="0px"
        bg="transparent"
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      >
        REMOVE
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Remove Car from cart</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
           Title
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={onClose}
              colorScheme="teal"
            >
              CANCEL
            </Button>
            <Button
              colorScheme="teal"
              ml={3}
            >
              REMOVE
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
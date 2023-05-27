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
import notification from "../../Toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dashboard_loading } from "../../redux/dashboard/dashboard.actionType";

export default function RemoveItemAlert({id, title}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const handleRemove = async () =>{
    try {
      const {data} = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cart/${id}`);
      notification("success", data.message);
      dispatch({type : dashboard_loading})
      onClose();
    } catch (error) {
      notification("error", error.response.data.message);
    }
  }
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
           {title}
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
              onClick={handleRemove}
            >
              REMOVE
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import notification from "../../Toast";
import { useDispatch, useSelector } from "react-redux";
import { dashboard_loading } from "../../redux/dashboard/dashboard.actionType";
import axios from "axios";

export default function DeleteCarDialog({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth } = useSelector((state) => state.Auth);
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      const {data} = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cars/${id}`,
        {
          headers: { token: auth.token },
        }
      );
      notification("success", data?.message);
      onClose();
      dispatch({ type: dashboard_loading });
    } catch (error) {
      dispatch({ type: dashboard_loading });
      notification("error", error.response.data.message);
    }
  };
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Car
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

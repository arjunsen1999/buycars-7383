import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { dashboard_loading } from "../../redux/dashboard/dashboard.actionType";
import notification from "../../Toast";

const initState = {
  title: "",
  description: "",
  KMsOnOdometer: "",
  MajorScratches: "",
  OriginalPaint: "",
  NumberOfAccidents: "",
  NumberOfPreviousBuyers: "",
  RegistrationPlace: "",
};

export default function EditCarsDrawer({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth } = useSelector((state) => state.Auth);
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const [oemData, setOemData] = useState([]);
  const [singleOEM, setSingleOEM] = useState({});
  const [formData, setFormData] = useState(initState);
  const [profileBtnLoading, setProfileBtnLoading] = useState(false);
  const [profile, setProfile] = useState("");
  const searchOem = async (event) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/oem?search=${event.target.value}`
      );
      setOemData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOEMData = (data) => {
    setSingleOEM(data);
  };

  // image

  const addProfile = async (event) => {
    setProfileBtnLoading(true);
    let image = event.target.files[0];
    const dataImg = new FormData();
    dataImg.append("file", image);
    dataImg.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
    dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
    let { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      dataImg
    );
    setProfile(data.url);
    setProfileBtnLoading(false);
  };

  // end image

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        ...formData,
      };

      for (let key in payload) {
        if (payload[key] === "") {
          delete payload[key];
        }
      }

      if (profile) {
        payload.image = profile;
      }

      if (singleOEM._id) {
        payload.OEM_SpecsID = singleOEM._id;
      }

      const { data } = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/cars/${id}`,
        payload,
        {
          headers: { token: auth.token },
        }
      );
      setProfile("");
      setFormData(initState);
      setSingleOEM({});
      notification("success", data.message);
      dispatch({ type: dashboard_loading });
    } catch (error) {
      notification("error", error.response.data.message);
    }
  };

  return (
    <>
     <Button ref={btnRef} colorScheme="green" onClick={onOpen}>
          Edit
        </Button>
      {/* <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        mb="20px"
      > */}
       
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
            <DrawerHeader>Edit Car</DrawerHeader>

            <DrawerBody>
              <Box
                w="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                mb="15px"
              >
                {profile ? (
                  <Box h="80px" borderWidth={"1px"}>
                    <Image src={profile} alt="Dan Abramov" h="100%" />
                  </Box>
                ) : null}
                {/* <Button>Add Image</Button> */}
                <FormLabel
                  htmlFor={"imagebtn"}
                  bg="teal"
                  p="8px 20px"
                  color={"white"}
                >
                  Add Image
                </FormLabel>
                <Input
                  type="file"
                  display={"none"}
                  id="imagebtn"
                  onChange={addProfile}
                />
              </Box>

              <InputBox
                require={true}
                title={"Title"}
                name={"title"}
                onChange={handleChange}
                value={formData.title}
              />
              <InputBox
                require={true}
                title={"Description"}
                name={"description"}
                onChange={handleChange}
                value={formData.description}
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
                    onChange={searchOem}
                  />
                  <AutoCompleteList>
                    {oemData.map((ele) => (
                      <AutoCompleteItem
                        key={ele._id}
                        value={`${ele.Model} ${ele.Year}`}
                        textTransform="capitalize"
                        align="center"
                        onClick={() => handleOEMData(ele)}
                      >
                        <Text ml="4">{`${ele.Model} ${ele.Year}`}</Text>
                      </AutoCompleteItem>
                    ))}
                  </AutoCompleteList>
                </AutoComplete>
              </FormControl>

              {/* /////////////////////////////////////// */}

              <InputBox
                require={true}
                title={"KMS ON ODOMETER"}
                name={"KMsOnOdometer"}
                onChange={handleChange}
                value={formData.KMsOnOdometer}
              />
              <InputBox
                require={true}
                title={"MAJOR SCRATCHES"}
                name={"MajorScratches"}
                onChange={handleChange}
                value={formData.MajorScratches}
              />
              <InputBox
                require={true}
                title={"ORIGINAL PAINT"}
                name={"OriginalPaint"}
                onChange={handleChange}
                value={formData.OriginalPaint}
              />
              <InputBox
                require={true}
                title={"NUMBER OF ACCIDENTS"}
                name={"NumberOfAccidents"}
                onChange={handleChange}
                value={formData.NumberOfAccidents}
              />
              <InputBox
                require={true}
                title={"NUMBER OF PREVIOUS BUYERS"}
                name={"NumberOfPreviousBuyers"}
                onChange={handleChange}
                value={formData.NumberOfPreviousBuyers}
              />
              <InputBox
                require={true}
                title={"REGISTRATION PLACE"}
                name={"RegistrationPlace"}
                onChange={handleChange}
                value={formData.RegistrationPlace}
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={handleSubmit}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      {/* </Box> */}
    </>
  );
}

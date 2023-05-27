import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export default function InputBox({required, title, name, onChange}) {
  return (
    <>
      <Box mb="15px">
        <FormControl isRequired>
          <FormLabel>{title}</FormLabel>
          <Input placeholder={title} name={name} onChange={onChange} />
        </FormControl>
      </Box>
    </>
  );
}

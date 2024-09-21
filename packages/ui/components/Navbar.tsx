"use client";
import React from "react";
import { Flex, Select, Box } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex
      sx={{
        backgroundColor: "#EDF2F7",
        padding: "12px 15px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>Left Side</Box>
      <Box>
        <Select>
          <option value="en">Eng</option>
          <option value="tr">Tr</option>
        </Select>
      </Box>
    </Flex>
  );
};

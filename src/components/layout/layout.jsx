import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Temp from "../temp";
import { Box, Flex } from "@chakra-ui/react";

export default function Layout({ children }) {

  return (
    <Flex direction="column" minH="100vh">
      <Box bg={"#1E1E1E"} flex={"1"}>
        <Navbar />
        <Flex mx={"80px"} height={"70%"} py={"0.625rem"} >
          {children}
        </Flex>
        <Footer />
      </Box>
    </Flex>


  )
}

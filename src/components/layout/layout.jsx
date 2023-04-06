import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Temp from "../temp";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
      <Box bg={"#1E1E1E"}>
        <Navbar />
        <Box mx={"80px"}>
          {children}
        </Box>
        <Footer/>
      </Box>

  )
}

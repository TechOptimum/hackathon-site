import React from "react";
import { Box, Heading } from "@chakra-ui/react";
export default function Footer() {
  return (
    <Box as="footer"  px={"80px"} paddingTop={"2%"} marginBottom={"0"} bg={"linear-gradient(181.96deg, #02050D 1.65%, #162240 44.94%);"}>
      <Heading as='h1'color={"#A7B2FF"} borderBottom={"1px solid #A7B2FF"}>
        Grow With Us
      </Heading>
      <Box paddingTop={"30px"} >
      <Box className="globe" ></Box>
      </Box>
    </Box>
  );
}

import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import LandingBg from "@/assets/landing-bg.svg";
import LandingGraphic from "@/assets/landing-graphic.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Landing() {
  const [width, setWidth] = useState(0);
  const minWidth = 1550;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (width > minWidth)
    ? (
      <>
        <LandingBg style={{ position: "absolute", right: "0%", height: "100vh", top: "0%" }} />
        <LandingGraphic style={{ position: "absolute", right: "0%", height: "75vh", top: "10vh" }} />
        <Box w="100vw" h="100vh" bgColor="primary">
          <Flex w="50vw" h="100vh" alignItems="center" justifyContent="center" flexDir="column">
            <Heading textAlign="center" color="bgColor" fontSize="7xl" style={{ zIndex: 1 }}>Tech Optimum <br /> Hacks 2.0</Heading>
            <Heading textAlign="center" color="bgColor" fontSize="5xl" style={{ zIndex: 1 }}>Innovate, Collaborate, and <br /> Create.</Heading>
            <Flex marginTop="35px">
              <Button bgColor="bgColor" _hover={{ backgroundColor: "footerBg" }} _active={{ backgroundColor: "footerBg" }} color="primary" fontSize="4xl" padding="40px" fontWeight="200">Register</Button>
              <Link href="https://discord.gg/HpRfm7kp3U" target="_blank">
                <Button bgColor="primary" borderColor="bgColor" borderWidth="2px" color="bgColor" marginLeft="35px" width="80px" height="80px">
                  <FaDiscord size={50} />
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </>
    )
    : (
      <>
        <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" flexDir="column" bgColor="primary">
          <Heading textAlign="center" color="bgColor" fontSize="7xl" style={{ zIndex: 1 }}>Tech Optimum <br /> Hacks 2.0</Heading>
          <Heading textAlign="center" color="bgColor" fontSize="5xl" style={{ zIndex: 1 }}>Innovate, Collaborate, and <br /> Create.</Heading>
          <Flex marginTop="35px">
            <Button bgColor="bgColor" _hover={{ backgroundColor: "footerBg" }} _active={{ backgroundColor: "footerBg" }} color="primary" fontSize="4xl" padding="40px" fontWeight="200">Register</Button>
            <Link href="https://discord.gg/HpRfm7kp3U" target="_blank">
              <Button bgColor="primary" borderColor="bgColor" borderWidth="2px" color="bgColor" marginLeft="35px" width="80px" height="80px">
                <FaDiscord size={50} />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </>
    );
}

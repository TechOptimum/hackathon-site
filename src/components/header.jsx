import React from "react";
import {
    Flex,
    Text,
    Button,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
    Spacer,
    NextChakraLink,
    SimpleButton,
    Image,
    ButtonGroup,
} from "@chakra-ui/react";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        isOpen: isEditOpen,
        onOpen: onEditOpen,
        onClose: onEditClose,
    } = useDisclosure();
    const {
        isOpen: isSecondOpen,
        onOpen: onSecondOpen,
        onClose: onSecondClose,
    } = useDisclosure();
    const buttonVariants = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "fade",
                damping: 10,
                stiffness: 150,
            },
        },
    };
    const buttonDelay = 0.15;
    return (
        <div
        >
            <Flex
                zIndex="100 !important"
                justifyContent="space-between"
                padding="15px 115px"
                position={"relative"}
                direction={["column", "row"]}
                alignItems="center"
                bg={"#0A0F24"}
            >
                <motion.div
                    variants={{
                        ...buttonVariants,
                        visible: {
                            ...buttonVariants.visible,
                            transition: {
                                ...buttonVariants.visible.transition,
                                delay: buttonDelay * 1,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <Flex alignItems={"center"} justifyContent={"start"}>
                        <Link href={"./"}>
                            <Heading
                                _hover={{
                                    cursor: "pointer",
                                }}
                                marginTop={"7px"}
                                textAlign={"center"}
                                alignItems="left"
                                href="https://techoptimum.org"
                                fontSize="2xl"
                                color="primary"
                                display={{ base: "none", md: "block" }}
                            >
                                Tech Optimum
                            </Heading>
                        </Link>
                    </Flex>
                </motion.div>

                <Flex marginTop={["1.5rem", "2.1px"]} textAlign={"center"}>
                    <nav>
                        <ul className="nav-links">
                            <li>
                                <motion.div
                                    variants={{
                                        ...buttonVariants,
                                        visible: {
                                            ...buttonVariants.visible,
                                            transition: {
                                                ...buttonVariants.visible.transition,
                                                delay: buttonDelay * 2,
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Text className="link-navs" color="primary">
                                        <Link className="link-navs" href="/">
                                            Home
                                        </Link>
                                    </Text>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    variants={{
                                        ...buttonVariants,
                                        visible: {
                                            ...buttonVariants.visible,
                                            transition: {
                                                ...buttonVariants.visible.transition,
                                                delay: buttonDelay * 3.5,
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Text className="link-navs" color="primary">
                                        <Link className="link-navs" href="/">
                                            Join
                                        </Link>
                                    </Text>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    variants={{
                                        ...buttonVariants,
                                        visible: {
                                            ...buttonVariants.visible,
                                            transition: {
                                                ...buttonVariants.visible.transition,
                                                delay: buttonDelay * 5,
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Text className="link-navs" color="primary">
                                        <Link className="link-navs" href="/">
                                            Hackathon
                                        </Link>
                                    </Text>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    variants={{
                                        ...buttonVariants,
                                        visible: {
                                            ...buttonVariants.visible,
                                            transition: {
                                                ...buttonVariants.visible.transition,
                                                delay: buttonDelay * 6.5,
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Text className="link-navs" color="primary">
                                        <Link className="link-navs" href="/">
                                            Dashboard
                                        </Link>
                                    </Text>
                                </motion.div>
                            </li>
                            <li>
                                <motion.div
                                    variants={{
                                        ...buttonVariants,
                                        visible: {
                                            ...buttonVariants.visible,
                                            transition: {
                                                ...buttonVariants.visible.transition,
                                                delay: buttonDelay * 8,
                                            },
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Text className="link-navs" color="primary">
                                        <Link className="link-navs" href="/">
                                            About
                                        </Link>
                                    </Text>
                                </motion.div>
                            </li>
                        </ul>
                    </nav>
                </Flex>
                <Flex>
                    <motion.div
                        variants={{
                            ...buttonVariants,
                            visible: {
                                ...buttonVariants.visible,
                                transition: {
                                    ...buttonVariants.visible.transition,
                                    delay: buttonDelay * 9.5,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        <ButtonGroup gap='4'>
                            <Link href="/signup">
                                <Button bgColor={"#333333"} borderRadius="20px">Sign Up</Button>
                            </Link>

                            <Link href="/login">
                                <Button bgColor={"#1B76FF"} borderRadius="20px">Log In</Button>
                            </Link>
                        </ButtonGroup>
                    </motion.div>
                </Flex>
            </Flex>
        </div>
    );
}

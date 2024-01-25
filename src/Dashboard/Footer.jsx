import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon, Button } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.800", "gray.800");
  const iconColor = useColorModeValue("white.100", "white.100");

  return (
    <Box bg={footerBgColor} py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color="gray.500">
          &copy; 2023 All rights reserved to Gupta Developers
        </Text>
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="gray.500">
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color="gray.500">
            Terms of Service
          </Link>
          <Box mx={1}>
            <Button><Icon as={RiFacebookBoxFill} boxSize={7} color={iconColor} /></Button>
          </Box>
          <Box mx={1}>
            <Button><Icon as={RiTwitterFill} boxSize={7} color={iconColor} /></Button>
          </Box>
          <Box mx={1}>
            <Button><Icon as={RiInstagramFill} boxSize={7} color={iconColor} /></Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;

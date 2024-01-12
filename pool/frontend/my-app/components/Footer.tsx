"use client";

//Chakra ui
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex alignItems="center" justifyContent="center" p="2rem">
      <Text>&copy; Viktor_Vaughn {new Date().getUTCFullYear()}</Text>
    </Flex>
  );
};

export default Footer;

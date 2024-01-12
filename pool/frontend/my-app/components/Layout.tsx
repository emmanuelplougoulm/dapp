"use client";

// Components
import Header from "./Header";
import Footer from "./Footer";

import { Flex } from "@chakra-ui/react";

import { LayoutChildrenProps } from "@/types";

export const Layout = ({ children }: LayoutChildrenProps) => {
  return (
    <Flex
      height="100vh"
      direction="column"
      justifyContent="space-between"
      align-items="center"
    >
      <Header />
      <Flex p="2rem" direction="column" width="100%">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

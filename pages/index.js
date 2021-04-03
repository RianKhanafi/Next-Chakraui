import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Card from "../component/molecules/Card";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box w="100%" h="1000px" rounded="10" p="5" bg="white">
        <Flex>
          <Card
            bg="blue.500"
            title="Siswa"
            icon={
              <img width="50" height="50" src="/assets/icon/svg/users.svg" />
            }
          />
          <Spacer />
          <Card
            bg="red.500"
            title="Sekolah"
            icon={
              <img width="50" height="50" src="/assets/icon/svg/school.svg" />
            }
          />
          <Spacer />
          <Card
            bg="gray.500"
            title="Guru"
            icon={
              <img width="50" height="50" src="/assets/icon/svg/student.svg" />
            }
          />
        </Flex>
      </Box>
    </>
  );
}

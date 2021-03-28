import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import RouterNav from "./Router";
import { withRouter } from "next/router";
import AppSidebar from "./sidebar";
import Link from "next/link";
import AppHeader from "./header";
import useWindowsSize from "../../libs/useWindowSize";

const AppProvider = (props) => {
  const { router } = props;
  const { pathname } = router;
  const { width, height } = useWindowsSize();
  //   const [height, setHeight] = useState(937);
  const [openKeys, setOpenKeys] = useState(0);
  const [appRoutes] = useState(RouterNav);

  let rootSubMenuKeys = [];

  function lowercase(string) {
    return string.toLowerCase();
  }

  const getKey = (name, index) => {
    const string = `${name}-${index}`;
    let key = string.replace(" ", "-");
    return key.charAt(0).toLowerCase() + key.slice(1);
  };

  useEffect(() => {
    // setHeight(window.innerHeight);

    appRoutes.forEach((route, index) => {
      const isCurrentPath =
        pathname.indexOf(lowercase(route.name)) > -1 ? true : false;
      const key = getKey(route.name, index);
      rootSubMenuKeys.push(key);
      //   if (isCurrentPath) setOpenKeys([...openKeys, key]);
    });
  }, [width]);

  return (
    <>
      <Grid
        h={height}
        overflowY="hidden"
        // templateRows="repeat(2, 1fr)"
        templateColumns="repeat(7, 1fr)"
        // gap={4}
      >
        <GridItem h={height} colSpan={1} bg="white">
          <AppSidebar />
        </GridItem>
        <GridItem
          colSpan={6}
          bg="gray.100"
          overflowY="auto"
          position="relative"
        >
          <Box position="relative" w="100%">
            <AppHeader />
          </Box>
          <Box px={5} pt={2} overflowY="auto">
            {props.children}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default withRouter(AppProvider);

import React, { useEffect, useState } from "react";
import { Grid, GridItem, Spinner, Box, Flex } from "@chakra-ui/react";
import RouterNav from "./Router";
import { withRouter } from "next/router";
import AppSidebar from "./sidebar";
import Link from "next/link";
import AppHeader from "./header";
import useWindowsSize from "../../libs/useWindowSize";
import NonDashboardHeader from "../molecules/NonDashboard/header";

const NonDashboardRoutes = ["/signin"];

const AppProvider = (props) => {
  const { router, children } = props;
  const { pathname } = router;
  const { width, height } = useWindowsSize();
  const [loading, setLoading] = useState(true);
  const [appRoutes] = useState(RouterNav);

  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

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
    appRoutes.forEach((route, index) => {
      const isCurrentPath =
        pathname.indexOf(lowercase(route.name)) > -1 ? true : false;
      const key = getKey(route.name, index);
      rootSubMenuKeys.push(key);
    });
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!isNotDashboard && !loading && (
        <Grid h={height} overflowY="hidden" templateColumns="repeat(7, 1fr)">
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
      )}

      {isNotDashboard && !loading && (
        <>
          <Box minHeight="10vh">
            <NonDashboardHeader />
            {children}
          </Box>
        </>
      )}
    </>
  );
};

export default withRouter(AppProvider);

import React, { useEffect, useState } from "react";
import { Box, Flex, Spacer, Grid, GridItem, Text } from "@chakra-ui/react";
import RouterNav from "./Router";
import { withRouter } from "next/router";
import { ArrowLeftIcon, UnlockIcon } from "@chakra-ui/icons";

const AppSidebar = (props) => {
  const { router } = props;
  const { pathname } = router;
  const [height, setHeight] = useState(937);
  const [openKeys, setOpenKeys] = useState(0);
  const [childKey, setOpenChildKey] = useState(-1);
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
    setHeight(window.innerHeight);

    appRoutes.forEach((route, index) => {
      const isCurrentPath =
        pathname.indexOf(lowercase(route.name)) > -1 ? true : false;
      const key = getKey(route.name, index);
      rootSubMenuKeys.push(key);
      //   if (isCurrentPath) setOpenKeys([...openKeys, key]);
    });
  }, []);

  return (
    <Box position="relative" h={height}>
      <Box h={70} mx={4} p={2}>
        <Text color="blue.500" fontWeight="bold" fontSize="large">
          SKEOLAKU
        </Text>
      </Box>
      {appRoutes.map((route, index) => {
        return (
          <>
            <Box
              mx={4}
              p={2}
              color={index === openKeys ? "white" : "blue.500"}
              bg={index === openKeys ? "blue.500" : "white"}
              rounded="10"
              mb="2"
              onClick={() => {
                setOpenKeys(index === openKeys ? 0 : index);
                // if (state.mobile) dispatch({ type: "mobileDrawer" });
              }}
            >
              {/* <Link href={route.path}> */}
              <Flex>
                <Box className="mr-auto" mr={2}>
                  {route.icon}
                </Box>
                <Box className="mr-auto">{route.name}</Box>
              </Flex>
              {/* </Link> */}
            </Box>

            {openKeys === index && route.children
              ? appRoutes.map((route, iChild) => {
                  return (
                    <>
                      <Box
                        mx={4}
                        ml={8}
                        p={2}
                        color={
                          index === openKeys && childKey === iChild
                            ? "white"
                            : "blue.500"
                        }
                        bg={
                          index === openKeys && childKey === iChild
                            ? "blue.400"
                            : "white"
                        }
                        rounded="10"
                        mb="2"
                        onClick={() => {
                          setOpenChildKey(childKey === iChild ? -1 : iChild);
                          // if (state.mobile) dispatch({ type: "mobileDrawer" });
                        }}
                      >
                        {/* <Link href={route.path}> */}
                        <Flex>
                          <Box className="mr-auto" mr={2}>
                            {route.icon}
                          </Box>
                          <Box className="mr-auto">{route.name}</Box>
                        </Flex>
                        {/* </Link> */}
                      </Box>
                    </>
                  );
                })
              : null}
          </>
        );
      })}

      <Box w="100%" bottom="0" position="absolute">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem
            py={2}
            fontWeight="500"
            colSpan={4}
            bg="white"
            pl={4}
            fontSize="large"
            color="blue.500"
          >
            <UnlockIcon />
            Logout
          </GridItem>
          <GridItem py={2} textAlign="center" colSpan={1} bg="blue.500">
            <ArrowLeftIcon color="white" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default withRouter(AppSidebar);

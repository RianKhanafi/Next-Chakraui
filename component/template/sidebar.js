import React, { useEffect, useState } from "react";
import { Box, Flex, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import RouterNav from "./Router";
import { withRouter } from "next/router";
import { ArrowLeftIcon, UnlockIcon } from "@chakra-ui/icons";

const AppSidebar = (props) => {
  const { router } = props;
  const { pathname } = router;
  const [height, setHeight] = useState(937);
  const [openKeys, setOpenKeys] = useState({ name: "", key: 0 });
  const [childKey, setOpenChildKey] = useState({ name: "", key: -1 });
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
              color={
                index === openKeys.key && openKeys.name === route.name
                  ? "white"
                  : "blue.500"
              }
              bg={
                index === openKeys.key && openKeys.name === route.name
                  ? "blue.500"
                  : "white"
              }
              rounded="10"
              mb="2"
              onClick={() => {
                setOpenKeys({
                  name: route.name,
                  key: index === openKeys.key ? 0 : index,
                });
              }}
            >
              <Flex>
                <Box className="mr-auto" mr={2}>
                  {route.icon}
                </Box>
                <Box className="mr-auto">{route.name}</Box>
              </Flex>
            </Box>

            {openKeys.key === index && route.children
              ? appRoutes.map((route, iChild) => {
                  return (
                    <>
                      <Box
                        mx={4}
                        ml={8}
                        p={2}
                        color={
                          index === openKeys.key && childKey.key === iChild
                            ? "white"
                            : "blue.500"
                        }
                        bg={
                          index === openKeys.key && childKey.key === iChild
                            ? "blue.300"
                            : "white"
                        }
                        rounded="10"
                        mb="2"
                        onClick={() => {
                          setOpenChildKey({
                            name: route.name,
                            key: childKey.key === iChild ? -1 : iChild,
                          });
                        }}
                      >
                        <Flex>
                          <Box className="mr-auto" mr={2}>
                            {route.icon}
                          </Box>
                          <Box className="mr-auto">{route.name}</Box>
                        </Flex>
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
            <Button
              leftIcon={<UnlockIcon />}
              height="24px"
              bg="white"
              _hover="none"
              _active={{
                bg: "#fff",
              }}
              _focus={{
                bg: "#fff",
              }}
            >
              Logout
            </Button>
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

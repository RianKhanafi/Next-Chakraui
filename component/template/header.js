import {
  Box,
  Avatar,
  IconButton,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
  InputGroup,
  InputLeftElement,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
const AppHeader = () => {
  const [onSearch, setOnSearch] = useState(false);
  return (
    <Box p={3}>
      <Grid p={2} templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={10}>
          <Box
            bg="white"
            display="inline-block"
            py="1"
            px="2"
            rounded="10"
            boxShadow="md"
            w={onSearch ? "400px" : "auto"}
          >
            <Flex>
              {!onSearch ? (
                <IconButton
                  color="black.900"
                  onClick={() => setOnSearch(true)}
                  colorScheme="white"
                  aria-label="Search database"
                  icon={<SearchIcon fontSize="20" />}
                />
              ) : (
                <IconButton
                  mr="2"
                  color="black.900"
                  onClick={() => setOnSearch(false)}
                  colorScheme="white"
                  aria-label="Search database"
                  icon={<CloseIcon fontSize="20" />}
                />
              )}
              {onSearch && (
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon fontSize="20" color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Cari sesuatu" />
                </InputGroup>
              )}
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Wrap>
            <WrapItem>
              <Avatar
                size="md"
                bg="blue.500"
                color="white"
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              />
              <Flex alignItems="center" h="100%">
                <Box ml={2}>
                  <Text fontSize="md" fontWeight="500">
                    Aninda Ivani
                  </Text>
                  <Text fontSize="sm">Admin Sekolaku</Text>
                </Box>
              </Flex>
            </WrapItem>
          </Wrap>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AppHeader;

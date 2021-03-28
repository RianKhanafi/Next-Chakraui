import { Box, Flex, Text } from "@chakra-ui/layout";
import { RepeatIcon } from "@chakra-ui/icons";

export default function Card({
  counter = "1000",
  title = "siswa",
  icon = <RepeatIcon />,
  bg,
}) {
  return (
    <Box h="120" bg={bg} rounded={10} color="white" w="370px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="120"
        p={3}
        px={6}
      >
        <Flex direction="column">
          <Box>
            <Text fontSize="25px" fontWeight="bold">
              {counter}
            </Text>
          </Box>
          <Box>{title}</Box>
        </Flex>
        <Box>
          <Text fontSize="35px" fontWeight="bold">
            {icon}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

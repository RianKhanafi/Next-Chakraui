import {
  Flex,
  Text,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Stack,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { UnlockIcon, EmailIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Router from "next/router";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Flex alignItems="center" justifyContent="center" minHeight="80vh">
        <Center>
          <Stack>
            <Center>
              <Text fontSize="xl">
                Login Super Admin <br />{" "}
                <Center>
                  <Text fontSize="xl" fontWeight="600" color="blue.500">
                    Panel Sekolaku
                  </Text>
                </Center>
              </Text>
            </Center>
            <Spacer />
            <Spacer />
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input type="email" placeholder="Email" />
            </InputGroup>

            <InputGroup>
              {/* <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              /> */}
              <InputLeftElement
                pointerEvents="none"
                children={<UnlockIcon color="gray.300" />}
              />
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Spacer />
            <Button
              color="white"
              bg="blue.500"
              onClick={() => Router.push("/")}
            >
              {" "}
              Login{" "}
            </Button>
          </Stack>
        </Center>
      </Flex>
    </div>
  );
};

export default SignIn;

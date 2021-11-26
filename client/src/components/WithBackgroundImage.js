import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function WithBackgroundImage({
  buttonName,
  backgroundImg,
  text,
}) {
  const navigate = useNavigate();
  return (
    <VStack
      w={"full"}
      h={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      backgroundImage={backgroundImg}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Stack align={"flex-start"} spacing={6} alignItems={"center"}>
        <Text
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          {text}
        </Text>
        {/* <Stack direction={"row"}> */}
        <Button
          bg={"blue.400"}
          rounded={"full"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
        >
          {buttonName}
        </Button>
        {/* </Stack> */}
      </Stack>
    </VStack>
  );
}

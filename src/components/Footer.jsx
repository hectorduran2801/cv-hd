import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("blue.50", "blue.900")}
      color={useColorModeValue("white.700", "white.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>Copyright ©  Hector Duran 2023</Text>
      </Container>
    </Box>
  );
}

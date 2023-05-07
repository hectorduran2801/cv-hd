import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import ProfileArrayES from "./ProfileArrayES";

function Header({ color, language, onLanguageChange }) {
  const profileES = ProfileArrayES();

  const profile = ProfileArray();

  return (
    <>
      <Container maxW={"3xl"} id="hero">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 36, md: 52 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            {language === "es" ? profileES.headerName : profile.headerName}
            <br />
            <Text as={"span"} color={`${color}.400`}>
            {language === "es" ? profileES.headerRole : profile.headerRole}
            </Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}

export default Header;

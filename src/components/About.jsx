import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { saveAs } from "file-saver";
import pdfCVES from "../cv/cvHectorD-ES.pdf";
import pdfCVEN from "../cv/cvHectorD-EN.pdf";
import logoImage from "../../src/photo/yo.webp";

function About({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <VStack
            spacing={8}
            align="center"
            flexDir={{ base: "column", md: "row" }}
          >
            <Image src={logoImage} boxSize={200} borderRadius="full" border="1px solid black" />
            <Box borderRadius={{ base: "xl 0 0 xl", md: "xl" }} p={4}>
              <Text color={"white.600"} fontSize={"xl"} px={4}>
                {profile.about}
              </Text>
            </Box>
          </VStack>
          <Stack
            spacing={4}
            justifyContent="center"
            direction={{ base: "column", md: "row" }}
            px={4}
          >
            <Box>
              <Button
                textAlign={"center"}
                colorScheme={color}
                size="md"
                onClick={() => {
                  saveAs(pdfCVES, "cvHectorD-ES.pdf");
                }}
              >
                Download CV in Spanish
              </Button>
            </Box>
            <Box>
              <Button
                textAlign={"center"}
                colorScheme={color}
                size="md"
                onClick={() => {
                  saveAs(pdfCVEN, "cvHectorD-EN.pdf");
                }}
              >
                Download CV in English
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default About;

import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { saveAs } from "file-saver";
import pdfCVES from "../cv/cvHectorD-ES.pdf";
import pdfCVEN from "../cv/cvHectorD-EN.pdf";

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
          <Text color={"white.600"} fontSize={"xl"} px={4}>
            {profile.about}
          </Text>
          <HStack spacing={4} justifyContent="center">
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
          </HStack>
        </Stack>
      </Container>
    </>
  );
}

export default About;

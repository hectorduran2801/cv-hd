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
import ProfileArrayES from "./ProfileArrayES";
import { saveAs } from "file-saver";
import pdfCVES from "../cv/cvHectorD-ES.pdf";
import pdfCVEN from "../cv/cvHectorD-EN.pdf";
import logoImage from "../../src/photo/yo.webp";

function About({ color, language, onLanguageChange }) {
  const profileES = ProfileArrayES();

  const profile = ProfileArray();

  const translations = {
    en: {
      about: "About",
      cv: "Download CV in English",
    },
    es: {
      about: "Sobre mí",
      cv: "Descargar CV en Español",
    },
  };

  const selectedTranslations = translations[language];

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
              <Text fontWeight={800}>{selectedTranslations.about}</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <VStack
            spacing={8}
            align="center"
            flexDir={{ base: "column", md: "row" }}
          >
            <Image
              src={logoImage}
              boxSize={200}
              borderRadius="full"
              border="1px solid black"
            />
            <Box borderRadius={{ base: "xl 0 0 xl", md: "xl" }} p={4} >
              <Text color={"white.600"} fontSize={"xl"} px={4}>
                {language === "es" ? profileES.about : profile.about}
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
              {language === "es" ? (
                <Button
                  textAlign={"center"}
                  colorScheme={color}
                  size="md"
                  onClick={() => {
                    saveAs(pdfCVES, "cvHectorD-ES.pdf");
                  }}
                >
                  {selectedTranslations.cv}
                </Button>
              ) : (
                <Button
                  textAlign={"center"}
                  colorScheme={color}
                  size="md"
                  onClick={() => {
                    saveAs(pdfCVEN, "cvHectorD-EN.pdf");
                  }}
                >
                  {selectedTranslations.cv}
                </Button>
              )}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default About;

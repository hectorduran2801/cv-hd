import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Footer({ language, onLanguageChange }) {
  const translations = {
    en: {
      footer: "Copyright © Hector Duran 2023",
    },
    es: {
      footer: "Derechos de autor © Hector Duran 2023",
    },
  };

  const selectedTranslations = translations[language];

  return (
    <Box
      bg={useColorModeValue("blue.50", "blue.900")}
      color={useColorModeValue("white.700", "white.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        <Text>{selectedTranslations.footer}</Text>
      </Container>
    </Box>
  );
}

export default Footer;

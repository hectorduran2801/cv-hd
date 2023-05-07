import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Badge,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import SkillsArray from "./SkillsArray";
import SkillsArrayES from "./SkillsArrayES";
import TagsArray from "./TagsArray";

function Skills({ color, language, onLanguageChange }) {
  const skills = SkillsArray();
  const skillsES = SkillsArrayES();
  const options = TagsArray("SkillsTags");
  const optionsES = TagsArray("SkillsTagsES");

  const [selected, setSelected] = useState("Front-end");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(language === "es" ? "Front-end" : "Front-end");
    }
  }, [options, language]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  const translations = {
    en: {
      skills: "Skills",
    },
    es: {
      skills: "Habilidades",
    },
  };

  const selectedTranslations = translations[language];

  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>{selectedTranslations.skills}</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Center px={4}>
            <ButtonGroup variant="outline">
              {language === "es"
                ? optionsES.map((option) => (
                    <Button
                      colorScheme={
                        selected === option.value ? `${color}` : "gray"
                      }
                      onClick={() => handleSelected(option.value)}
                    >
                      {option.value}
                    </Button>
                  ))
                : options.map((option) => (
                    <Button
                      colorScheme={
                        selected === option.value ? `${color}` : "gray"
                      }
                      onClick={() => handleSelected(option.value)}
                    >
                      {option.value}
                    </Button>
                  ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {language === "es"
              ? skillsES
                  .filter((skl) => skl.tags.includes(selected))
                  .map((skl) => (
                    <Fade bottom key={skl.name}>
                      <Card>
                        <Stack>
                          <CardBody align="left" h={[null, "40vh"]}>
                            <Heading size="sm">{skl.name}</Heading>
                            <Text fontSize="sm" py={2}>
                              {skl.description}
                            </Text>
                            <HStack flexWrap="wrap" pt={4} spacing={2}>
                              {skl.badges.map((badge) => (
                                <Badge
                                  my={2}
                                  key={badge.text}
                                  colorScheme={badge.colorScheme}
                                >
                                  {badge.text}
                                </Badge>
                              ))}
                            </HStack>
                          </CardBody>
                        </Stack>
                      </Card>
                    </Fade>
                  ))
              : skills
                  .filter((skl) => skl.tags.includes(selected))
                  .map((skl) => (
                    <Fade bottom key={skl.name}>
                      <Card>
                        <Stack>
                          <CardBody align="left" h={[null, "40vh"]}>
                            <Heading size="sm">{skl.name}</Heading>
                            <Text fontSize="sm" py={2}>
                              {skl.description}
                            </Text>
                            <HStack flexWrap="wrap" pt={4} spacing={2}>
                              {skl.badges.map((badge) => (
                                <Badge
                                  my={2}
                                  key={badge.text}
                                  colorScheme={badge.colorScheme}
                                >
                                  {badge.text}
                                </Badge>
                              ))}
                            </HStack>
                          </CardBody>
                        </Stack>
                      </Card>
                    </Fade>
                  ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}

export default Skills;

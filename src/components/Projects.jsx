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
  Link,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ProjectsArray from "./ProjectsArray";
import ProjectsArrayES from "./ProjectsArrayES";
import TagsArray from "./TagsArray";

function Projects({ color, language, onLanguageChange }) {
  const projects = ProjectsArray();
  const projectsES = ProjectsArrayES();
  const options = TagsArray("ProjectsTags");
  const optionsES = TagsArray("ProjectsTagsES");

  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(language === "es" ? "Todos" : "All");
    }
  }, [options, language]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  const translations = {
    en: {
      all: "All",
      projects: "Projects",
    },
    es: {
      all: "Todos",
      projects: "Proyectos",
    },
  };

  const selectedTranslations = translations[language];

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>{selectedTranslations.projects}</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === selectedTranslations.all ? `${color}` : "gray"}
                onClick={() => handleSelected(selectedTranslations.all)}
              >
                {selectedTranslations.all}
              </Button>
              {language === "es"
                ? optionsES.map((option) => (
                    <Button
                      key={option.value}
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
                      key={option.value}
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
              ? projectsES
                  .filter((other) => {
                    if (selected === "Todos") {
                      return true;
                    } else {
                      return other.tags.includes(selected);
                    }
                  })
                  .map((other) => (
                    <Fade bottom key={other.name}>
                      <Card>
                        <Stack>
                          <CardBody align="left" h={[null, "40vh"]}>
                            <Heading size="sm" style={{ color: "#3182CE" }}>
                              {other.name}
                            </Heading>

                            <Text fontSize="sm" py={2}>
                              {other.description}
                            </Text>

                            <Stack spacing={2}>
                              {other.buttons.map((button) => (
                                <Link
                                  key={button.text}
                                  href={button.href}
                                  color={`${color}.400`}
                                  target="_blank"
                                >
                                  {button.text}
                                </Link>
                              ))}
                            </Stack>
                            <HStack flexWrap="wrap" pt={4} spacing={2}>
                              {other.badges.map((badge) => (
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
              : projects
                  .filter((other) => {
                    if (selected === selectedTranslations.all) {
                      return true;
                    } else {
                      return other.tags.includes(selected);
                    }
                  })
                  .map((other) => (
                    <Fade bottom key={other.name}>
                      <Card>
                        <Stack>
                          <CardBody align="left" h={[null, "40vh"]}>
                            <Heading size="sm" style={{ color: "#3182CE" }}>
                              {other.name}
                            </Heading>

                            <Text fontSize="sm" py={2}>
                              {other.description}
                            </Text>

                            <Stack spacing={2}>
                              {other.buttons.map((button) => (
                                <Link
                                  key={button.text}
                                  href={button.href}
                                  color={`${color}.400`}
                                  target="_blank"
                                >
                                  {button.text}
                                </Link>
                              ))}
                            </Stack>
                            <HStack flexWrap="wrap" pt={4} spacing={2}>
                              {other.badges.map((badge) => (
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

export default Projects;

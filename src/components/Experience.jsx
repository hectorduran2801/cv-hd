import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import ExperienceArrayES from "./ExperienceArrayES";
import TagsArray from "./TagsArray";

function Experience({ color, language, onLanguageChange }) {
  const experience = ExperienceArray();
  const experienceES = ExperienceArrayES();
  const options = TagsArray("ExperienceTags");
  const optionsES = TagsArray("ExperienceTagsES");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(
        language === "es" ? "Práctica Profesional" : "Professional Practice"
      );
    }
  }, [options, language]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  const translations = {
    en: {
      experience: "Experience",
    },
    es: {
      experience: "Experiencia",
    },
  };

  const selectedTranslations = translations[language];

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>{selectedTranslations.experience}</Text>
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
          <Stack px={4} spacing={4}>
            {language === "es"
              ? experienceES
                  .filter((exp) => exp.tags.includes(selected))
                  .map((exp) => (
                    <Fade bottom>
                      <Card key={exp.company} size="sm">
                        <CardHeader>
                          <Flex justifyContent="space-between">
                            <HStack>
                              <Image src={exp.image} h={50} />
                              <Box px={2} align="left">
                                <Text fontWeight={600}>{exp.company}</Text>
                                <Text>{exp.position}</Text>
                              </Box>
                            </HStack>
                            <Text px={2} fontWeight={300}>
                              {exp.duration}
                            </Text>
                          </Flex>
                        </CardHeader>
                        <CardBody>
                          <Flex>
                            <List align="left" spacing={3}>
                              {exp.listItems.map((item, index) => (
                                <ListItem key={index}>
                                  <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={`${color}.500`}
                                  />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Flex>
                        </CardBody>
                        <CardFooter>
                          <HStack spacing={2}>
                            {exp.badges.map((badge) => (
                              <Badge
                                key={badge.name}
                                colorScheme={badge.colorScheme}
                              >
                                {badge.name}
                              </Badge>
                            ))}
                          </HStack>
                        </CardFooter>
                      </Card>
                    </Fade>
                  ))
              : experience
                  .filter((exp) => exp.tags.includes(selected))
                  .map((exp) => (
                    <Fade bottom>
                      <Card key={exp.company} size="sm">
                        <CardHeader>
                          <Flex justifyContent="space-between">
                            <HStack>
                              <Image src={exp.image} h={50} />
                              <Box px={2} align="left">
                                <Text fontWeight={600}>{exp.company}</Text>
                                <Text>{exp.position}</Text>
                              </Box>
                            </HStack>
                            <Text px={2} fontWeight={300}>
                              {exp.duration}
                            </Text>
                          </Flex>
                        </CardHeader>
                        <CardBody>
                          <Flex>
                            <List align="left" spacing={3}>
                              {exp.listItems.map((item, index) => (
                                <ListItem key={index}>
                                  <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={`${color}.500`}
                                  />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Flex>
                        </CardBody>
                        <CardFooter>
                          <HStack spacing={2}>
                            {exp.badges.map((badge) => (
                              <Badge
                                key={badge.name}
                                colorScheme={badge.colorScheme}
                              >
                                {badge.name}
                              </Badge>
                            ))}
                          </HStack>
                        </CardFooter>
                      </Card>
                    </Fade>
                  ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Experience;

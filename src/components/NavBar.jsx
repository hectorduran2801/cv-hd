import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
  Select,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
const TbIcons = require("react-icons/tb");

function Nav({ color, language, onLanguageChange }) {
  const profile = ProfileArray();
  /* const colors = {
    blue: "#3182CE",
    cyan: "#00B5D8",
    gray: "#718096",
    green: "#38A169",
    orange: "#DD6B20",
    pink: "#D53F8C",
    purple: "#805AD5",
    red: "#E53E3E",
    teal: "#319795",
    yellow: "#D69E2E",
  }; */
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToStudies = () => {
    const studiesSection = document.querySelector("#studies");
    studiesSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillsSection = document.querySelector("#skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  const translations = {
    en: {
      about: "About",
      studies: "Studies",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    es: {
      about: "Sobre mí",
      studies: "Estudios",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
  };

  const selectedTranslations = translations[language];

  return (
    <>
      <Flex
        bg={useColorModeValue("blue.100", "blue.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link onClick={scrollToHero}>
          <HStack>
            {TbLetterComponents.map((Component, index) => (
              <Component key={index} color="white" />
            ))}
          </HStack>
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToAbout}>
                  {selectedTranslations.about}
                </Button>
                <Button variant="ghost" onClick={scrollToStudies}>
                  {selectedTranslations.studies}
                </Button>
                <Button variant="ghost" onClick={scrollToSkills}>
                  {selectedTranslations.skills}
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  {selectedTranslations.experience}
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  {selectedTranslations.projects}
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  {selectedTranslations.contact}
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Select
              value={language}
              onChange={(event) => onLanguageChange(event.target.value)}
              width="100px"
              mx={2}
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
            </Select>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        {selectedTranslations.about}
                      </Button>
                      <Button variant="ghost" onClick={scrollToStudies}>
                        {selectedTranslations.studies}
                      </Button>
                      <Button variant="ghost" onClick={scrollToSkills}>
                        {selectedTranslations.skills}
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        {selectedTranslations.experience}
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        {selectedTranslations.projects}
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        {selectedTranslations.contact}
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default Nav;

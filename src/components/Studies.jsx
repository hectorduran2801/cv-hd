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
    Image,
    List,
    ListItem,
    ListIcon,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { Fade } from "react-reveal";
  
  import StudiesArray from "./StudiesArray";
  
  function Studies({ color }) {
    const studies = StudiesArray();
  
    return (
      <>
        <Container maxW={"3xl"} id="studies">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  02
                </Text>
                <Text fontWeight={800}>Studies</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
  
            <Stack px={4} spacing={4}>
              {studies.map((stu) => (
                <Fade key={stu.institution} bottom>
                  <Card size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={stu.image} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{stu.institution}</Text>
                            <Text>{stu.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {stu.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {stu.listItems.map((item, index) => (
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
                    <CardFooter></CardFooter>
                  </Card>
                </Fade>
              ))}
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  
  export default Studies;
  
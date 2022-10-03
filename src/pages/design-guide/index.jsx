import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
import React from "react";

function DesignGuide() {
  return (
    <Box bgGradient="linear(to-br, rgba(203, 48, 104, 0.8), rgba(217, 71, 77, 0.8), rgba(223, 80, 66, 0.8), rgba(227, 86, 59, 0.8), rgba(253, 127, 11, 0.8))">
      <Container py="5" maxW="1175px">
        <Heading as="h1" mb="10">
          Design Guide
        </Heading>
        <section>
          <Heading as="h2" mb="3">
            Colours
          </Heading>
          <SimpleGrid columns={2} spacing={30} color="white">
            <Center
              as="article"
              bg="#FD7F0B"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">main</Text>
            </Center>
            <Center
              as="article"
              bg="#5D5FEF"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">secondary</Text>
            </Center>
            <Center
              as="article"
              bg="#1E1E2C"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">backboard</Text>
            </Center>
            <Center
              as="article"
              bg="#71727E"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">inactive</Text>
            </Center>
            <Center
              as="article"
              bg="#1E1E1E"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">background</Text>
            </Center>
            <Center
              as="article"
              bg="#242636"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">background.500</Text>
            </Center>
            <Center
              as="article"
              bg="#37394D"
              h="150"
              maxW="400px"
              rounded="2xl"
            >
              <Text fontSize="3xl">background.400</Text>
            </Center>
          </SimpleGrid>
        </section>
      </Container>
    </Box>
  );
}

export default DesignGuide;

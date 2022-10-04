import { Box } from "@chakra-ui/react";

export default function Background({ children }) {
  return (
    <Box
      pos="relative"
      as="main"
      w="100%"
      minH="670px"
      h="100vh"
      fontFamily="Ubuntu"
      color="white"
      bgGradient="linear(289.58deg, rgba(203, 48, 104, 0.8) 1.6%, rgba(217, 71, 77, 0.8) 25.93%, rgba(223, 80, 66, 0.8) 35.26%, rgba(227, 86, 59, 0.8) 43.02%, rgba(253, 127, 11, 0.8) 93%)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        bgImage: "url('/bg-cube.png')",
        bgRepeat: "no-repeat",
        bgPosition: "center",
      }}
      _after={{
        content: '""',
        position: "absolute",
        bottom: "-30px",
        left: "45%",
        width: "50%",
        height: "100%",
        bgImage: "url('/rocket.png')",
        bgRepeat: "no-repeat",
        bgPosition: "center",
      }}
    >
      <Box w="100%" px="120px" pt="101px">
        {children}
      </Box>
    </Box>
  );
}

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeadingText = () => {
  return (
    <Flex direction="column" paddingRight={{ lg: "50px" }}>
      <Box>
        <Heading
          size={{ base: "3xl", lg: "5xl", xl: "7xl" }}
          fontWeight="extrabold"
          whiteSpace="nowrap"
        >
          FIND CLOTHES
        </Heading>
        <Heading
          size={{ base: "3xl", lg: "5xl", xl: "7xl" }}
          fontWeight="extrabold"
          whiteSpace="nowrap"
        >
          THAT MATCHES
        </Heading>
        <Heading
          size={{ base: "3xl", lg: "5xl", xl: "7xl" }}
          fontWeight="extrabold"
          whiteSpace="nowrap"
        >
          YOUR STYLE
        </Heading>
        <Text>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </Text>
      </Box>
      <Button
        marginY="20px"
        width={{ base: "100%", md: "40%" }}
        borderRadius="20px"
      >
        Shop Now
      </Button>
    </Flex>
  );
};

export default HeadingText;

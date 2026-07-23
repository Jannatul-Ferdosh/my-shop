import NavBar from "@/components/NavBar";
import NavBar2 from "@/components/NavBar2";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box hideBelow="md">
        <NavBar />
      </Box>
      <Box hideFrom="md">
        <NavBar2 />
      </Box>
      <Heading>Oppss.....</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurs"}
      </Text>
    </>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Box, Container } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container height="100vh" maxW="100%" centerContent>
      <Header />
      <Box
        color="#50c6ee"
        width="30%"
        height="30%"
        fontSize="40px"
        bgColor="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="dark-lg"
        borderRadius="40px"
        mt="150px"
      >
        <Link to="/quiz">Take Quiz</Link>
      </Box>
    </Container>
  );
};

export default HomePage;

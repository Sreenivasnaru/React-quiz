import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";

const QuizTopicsPage = () => {
  return (
    <Container height="100vh" maxW="100%" centerContent>
      <Header />
      <Box
        color="#50c6ee"
        width="30%"
        height="10%"
        fontSize="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        borderRadius="40px"
        mt="50px"
        bgColor="aliceblue"
      >
        <Text>Quiz Topics</Text>
      </Box>
      <Box
        color="#50c6ee"
        width="20%"
        height="7%"
        fontSize="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        borderRadius="40px"
        mt="50px"
        bgColor="aliceblue"
      >
        <Link to="/quiz/react">React</Link>
      </Box>
      <Box
        color="#50c6ee"
        width="20%"
        height="7%"
        fontSize="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        borderRadius="40px"
        mt="50px"
        bgColor="aliceblue"
      >
        <Link to="/quiz/javascript">JavaScript</Link>
      </Box>
      <Box
        color="#50c6ee"
        width="20%"
        height="7%"
        fontSize="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        borderRadius="40px"
        mt="50px"
        bgColor="aliceblue"
      >
        <Link to="/quiz/html">HTML</Link>
      </Box>
    </Container>
  );
};

export default QuizTopicsPage;

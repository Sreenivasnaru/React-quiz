import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container maxW="100%" color="black" mb="30px" centerContent>
      <Box
        mt="10px"
        p={4}
        width="60%"
        fontSize="50px"
        fontWeight="500"
        borderRadius="10px"
        boxShadow="md"
        display="flex"
        justifyContent="center"
        bgColor="aliceblue"
        color="#50c6ee"
      >
        <Link to="/">The Quiz</Link>
      </Box>
    </Container>
  );
};

export default Header;

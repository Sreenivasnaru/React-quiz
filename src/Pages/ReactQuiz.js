import React, { useState, useEffect } from "react";
import topics from "../Components/data/data";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import Header from "../Components/Header/Header";

const ReactQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(600);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(id);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const currentQuestion = topics[0].questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (!selectedOption) {
      alert("Please select an option");
      return;
    }

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < topics[0].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      clearInterval(intervalId);
      alert(`Quiz ended. Your score is ${score}. Now click on The Quiz`);
    }
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <Container height="100vh" maxW="100%" centerContent>
      <Header />
      <Text
        bgColor="aliceblue"
        borderRadius="40px"
        boxShadow="xl"
        color="black"
        fontSize="20px"
        width="10%"
        height="5%"
        textAlign="center"
      >
        Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{" "}
      </Text>
      <Box
        color="black"
        width="60%"
        height="70%"
        fontSize="25px"
        bgColor="white"
        display="flex"
        flexDirection="column"
        boxShadow="xl"
        borderRadius="40px"
        mt="20px"
        bgColor="aliceblue"
        gap="20px"
        p="40px"
      >
        <Text width="50%">Question {currentQuestionIndex + 1}</Text>
        <Text width="50%">{currentQuestion.question}</Text>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li style={{ listStyleType: "none", padding: 0 }} key={index}>
              <input
                type="radio"
                id={option}
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label htmlFor={option}>{option}</label>
            </li>
          ))}
        </ul>
        <Button
          onClick={handleNextButtonClick}
          disabled={timer === 0}
          colorScheme="blue"
          mt="30px"
          width="250px"
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default ReactQuiz;

import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import QuizTopicsPage from "./Pages/QuizTopicsPage";
import ReactQuiz from "./Pages/ReactQuiz";
import htmlQuiz from "./Pages/htmlQuiz";
import JavascriptQuiz from "./Pages/JavascriptQuiz";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact Component={HomePage} />
        <Route path="/quiz" exact Component={QuizTopicsPage} />
        <Route path="/quiz/react" Component={ReactQuiz} />
        <Route path="/quiz/javascript" Component={JavascriptQuiz} />
        <Route path="/quiz/html" Component={htmlQuiz} />
      </Routes>
    </div>
  );
}

export default App;

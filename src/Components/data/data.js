const topics = [
  {
    id: 1,
    title: "React",
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A programming language",
          "A database management system",
          "A web browser",
        ],
        correctAnswer: "A JavaScript library for building user interfaces",
      },
      {
        id: 2,
        question: "Who developed React?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        correctAnswer: "Facebook",
      },
      {
        id: 3,
        question: "What is JSX in React?",
        options: [
          "JavaScript XML",
          "JavaScript Extension",
          "JavaScript External",
          "JavaScript Framework",
        ],
        correctAnswer: "JavaScript XML",
      },
      {
        id: 4,
        question: "What are React components?",
        options: [
          "Reusable building blocks for UI elements",
          "Functions that take input and return JSX elements",
          "JavaScript objects representing DOM elements",
          "Files containing CSS styles for UI elements",
        ],
        correctAnswer: "Reusable building blocks for UI elements",
      },
      {
        id: 5,
        question: "What is the virtual DOM in React?",
        options: [
          "A representation of the actual DOM in memory",
          "A tool for testing React components",
          "A method for styling React components",
          "A technique for optimizing React performance",
        ],
        correctAnswer: "A representation of the actual DOM in memory",
      },
      {
        id: 6,
        question: "What is the purpose of state in React?",
        options: [
          "To store data that can change over time",
          "To define the structure of a component",
          "To handle events in a component",
          "To manage routing in a React application",
        ],
        correctAnswer: "To store data that can change over time",
      },
      {
        id: 7,
        question: "What is a React hook?",
        options: [
          "A function that lets you use state and other React features without writing a class",
          "A tool for debugging React applications",
          "A method for styling React components",
          "A technique for optimizing React performance",
        ],
        correctAnswer:
          "A function that lets you use state and other React features without writing a class",
      },
      {
        id: 8,
        question: "Which of the following is NOT a React lifecycle method?",
        options: [
          "componentDidMount",
          "componentWillUnmount",
          "componentDidRender",
          "componentDidUpdate",
        ],
        correctAnswer: "componentDidRender",
      },
      {
        id: 9,
        question: "What is Redux?",
        options: [
          "A state management library for React",
          "A testing framework for React",
          "A routing library for React",
          "A server-side rendering library for React",
        ],
        correctAnswer: "A state management library for React",
      },
      {
        id: 10,
        question: "What is the purpose of props in React?",
        options: [
          "To pass data from parent to child components",
          "To handle events in a component",
          "To store data that can change over time",
          "To define the structure of a component",
        ],
        correctAnswer: "To pass data from parent to child components",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript",
    questions: [
      {
        id: 1,
        question: "What is JavaScript?",
        options: [
          "A programming language for building interactive websites",
          "A database management system",
          "A web browser",
          "A version control system",
        ],
        correctAnswer:
          "A programming language for building interactive websites",
      },
      {
        id: 2,
        question: "Who developed JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Oracle"],
        correctAnswer: "Netscape",
      },
      {
        id: 3,
        question: "What is the ECMAScript?",
        options: [
          "A version control system",
          "A standard for JavaScript",
          "A framework for building web applications",
          "A programming language",
        ],
        correctAnswer: "A standard for JavaScript",
      },
      {
        id: 4,
        question: "What is a closure in JavaScript?",
        options: [
          "A block of code that is executed when a function is called",
          "A way to limit access to certain variables",
          "A function defined within another function that has access to its parent function's scope",
          "A method for styling JavaScript code",
        ],
        correctAnswer:
          "A function defined within another function that has access to its parent function's scope",
      },
      {
        id: 5,
        question: "What is the result of the expression '2' + 2 in JavaScript?",
        options: ["'22'", "4", "'4'", "NaN"],
        correctAnswer: "'22'",
      },
      {
        id: 6,
        question:
          "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
          "To enable strict mode, which catches common coding mistakes",
          "To disable strict mode and allow flexible coding practices",
          "To import external JavaScript libraries",
          "To define a strict hierarchy for JavaScript objects",
        ],
        correctAnswer:
          "To enable strict mode, which catches common coding mistakes",
      },
      {
        id: 7,
        question: "What does the '=== operator do in JavaScript?",
        options: [
          "Checks for equality without type conversion",
          "Assigns a value to a variable",
          "Performs bitwise addition",
          "Converts a string to uppercase",
        ],
        correctAnswer: "Checks for equality without type conversion",
      },
      {
        id: 8,
        question: "What is an example of a falsy value in JavaScript?",
        options: ["0", "'' (empty string)", "null", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: 9,
        question: "What is an event listener in JavaScript?",
        options: [
          "A function that is executed when an event occurs",
          "A method for styling HTML elements",
          "A way to store data in the browser",
          "A tool for debugging JavaScript code",
        ],
        correctAnswer: "A function that is executed when an event occurs",
      },
      {
        id: 10,
        question:
          "What is an example of a higher-order function in JavaScript?",
        options: ["map()", "slice()", "indexOf()", "concat()"],
        correctAnswer: "map()",
      },
    ],
  },
  {
    id: 3,
    title: "HTML",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper Text Makeup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        id: 2,
        question: "Which tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<ulist>"],
        correctAnswer: "<ul>",
      },
      {
        id: 3,
        question: "Which tag is used to define a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        correctAnswer: "<a>",
      },
      {
        id: 4,
        question:
          "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: ["alt", "title", "src", "href"],
        correctAnswer: "alt",
      },
      {
        id: 5,
        question: "What does the <canvas> element provide?",
        options: [
          "A container for SVG graphics",
          "A container for animations",
          "A container for bitmap graphics",
          "A container for audio files",
        ],
        correctAnswer: "A container for bitmap graphics",
      },
      {
        id: 6,
        question: "Which tag is used to define a table row?",
        options: ["<tr>", "<td>", "<table>", "<th>"],
        correctAnswer: "<tr>",
      },
      {
        id: 7,
        question:
          "Which tag is used to define a footer for a document or section?",
        options: ["<footer>", "<bottom>", "<end>", "<section>"],
        correctAnswer: "<footer>",
      },
      {
        id: 8,
        question: "Which tag is used to define a form in HTML?",
        options: ["<form>", "<input>", "<button>", "<submit>"],
        correctAnswer: "<form>",
      },
      {
        id: 9,
        question:
          "Which HTML element is used to specify a header for a document or section?",
        options: ["<header>", "<top>", "<heading>", "<h1>"],
        correctAnswer: "<header>",
      },
      {
        id: 10,
        question: "What is the purpose of the <script> tag in HTML?",
        options: [
          "To define styles for HTML elements",
          "To include external JavaScript files",
          "To define metadata about the document",
          "To define a client-side script",
        ],
        correctAnswer: "To define a client-side script",
      },
    ],
  },
];

export default topics;

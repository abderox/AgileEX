import { ChakraProvider, theme, Text, Heading, Flex, CardFooter } from "@chakra-ui/react";
import KanbanBoard from "./components/KanbanBoard";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          minHeight : "85vh",
          
        }}
      >
      <div style={{
        margin :"5vh 0",
        justifyContent
        : "center",
        alignItems: "center",
        display: "flex",
        height: "10vh",

      }}
      >
        
      <h1>
        <span>always be</span>
        <div className="message">
          <div className="word1">Agile</div>
          <div className="word2">with</div>
          <div className="word3">AgileEx</div>
        </div>
      </h1>

      </div>
      <KanbanBoard />
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          backgroundColor: "#e2e8f0",
          bottom
          : "0",

        }}
      >
        <Text fontSize="sm" color="gray.600">
          Made with
          <span role="img" aria-label="love">
            ❤️
          </span>
          by
          <a
            href="https://github.com/abderox"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" Abderox"}
          </a>

        </Text>
      </footer>
    </ChakraProvider>
  );
}

export default App;

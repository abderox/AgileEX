import { ChakraProvider, theme, Text } from "@chakra-ui/react";
import KanbanBoard from "./components/KanbanBoard";


function App() {
  return (
    <ChakraProvider theme={theme}>
    <Text fontSize="4xl" padding="5" fontWeight="bold" fontStyle="italic"
    color={
      {
        base: "gray.600",
    }
    }
textAlign
    ="center"
    >
       AgileEx
    </Text>
    <KanbanBoard />
  </ChakraProvider>
  );
}

export default App;

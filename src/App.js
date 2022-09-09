import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Storys from "./components/storys";
function App() {
  return (
    <Box bg="#FAFAFA" w="100%" h="100vh">
      <Header />
      <Box maxW="935px" mx="auto">
        <Storys />
      </Box>
    </Box>
  );
}

export default App;

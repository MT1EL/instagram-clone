import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Post from "./components/Post";
import Storys from "./components/storys";
import Suggestions from "./components/Suggestions";
function App() {
  return (
    <Box bg="#FAFAFA" w="100%" h="100vh">
      <Header />
      <Box maxW="935px" mx="auto" display="flex">
        <Box>
          <Storys />
          <Post />
        </Box>
        <Suggestions />
      </Box>
    </Box>
  );
}

export default App;

import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Authenticated from "./stacks/authenticated";
import Authentication from "./stacks/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const [authenticated, setAuthenticated] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthenticated(user);
    });
    // setAuthenticated(JSON.parse(localStorage.getItem("user")));
    return unsubscribe();
  }, []);
  return (
    <Box bg="#FAFAFA" w="100%" h="100%">
      {authenticated ? (
        <Authenticated
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      ) : (
        <Authentication setAuthenticated={setAuthenticated} />
      )}
    </Box>
  );
}

export default App;

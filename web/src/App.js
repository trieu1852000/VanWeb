import React from 'react';
import { Box, ChakraProvider, Flex, Spacer, Button } from "@chakra-ui/react";
import Welcome from './Welcome';
import Navbar from './Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Welcome />
    </ChakraProvider>
  );
}

export default App;

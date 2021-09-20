import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import theme from '../src/theme';
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p="4" minHeight="100vh" bg="cyan.50">
        <Container maxW="8xl" px="0" mb="12" alignSelf="start" color="cyan.700">
          <Header></Header>
          <Content></Content>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

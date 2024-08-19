import React from 'react';
import { Grid, GridItem, Show, Flex, Box } from '@chakra-ui/react';
import NavBar from "./components/navigation/NavBar";
import Burgermenu from './components/Burgermenu';
import LoginButton from './components/login_button';
import Footer from './components/navigation/footer';

function App() {
  return (
    <Flex direction="column" minHeight="100vh">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        flex="1"
        alignContent="start"
       
      >
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside">
            <Burgermenu />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <LoginButton />
        </GridItem>
      </Grid>
      <GridItem>
      <Box mt="auto">
          <Footer />
        </Box>
      </GridItem>
    </Flex>
  );
}

export default App;

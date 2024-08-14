import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from "./components/NavBar" 
import Burgermenu from "./components/Burgermenu"
import LoginButton from "./components/login_button"


function App() {
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      >

      <GridItem gridArea="nav">
      <NavBar/>
      </GridItem>
      <Show above="lg">
      <GridItem gridArea="aside">
      <Burgermenu/>
      </GridItem>
      </Show>
      <GridItem gridArea="main">
        <LoginButton/>
      </GridItem>
    
    </Grid>
    
  )
}

export default App

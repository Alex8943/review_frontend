import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from "./components/NavBar" 
import BurgerMenuSwitch from "./components/BurgerSwitch"


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
      <GridItem gridArea="aside" bg="green">
      <BurgerMenuSwitch/>
      </GridItem>
      </Show>
      <GridItem gridArea="main" bg="orange">
        main
      </GridItem>
    
    </Grid>
    
  )
}

export default App

import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import './App.css';

import Card from './components/CardView.js'
import SearchView from './components/SearchView.js';
import { Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    black: {
      main: '#000',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    white: {
      main: '#FFF',
      contrastText: '#FFF'
    },
    blueHeader: {
      main: '#0042B5',
      contrastText: '#FFF'
    },
    blueBtn: {
      main: '#0051DE',
      contrastText: "#FFF"
    }
  },
});

function App() {

  const [cards, setCards] = useState([])
  const [pagination, setPagination] = useState("num=6&offset=100")
  const [query, setQuery] = useState("")

  const callApi = () => {
    (async () => {
      const resp = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${pagination}`)
      const data = await resp.json()
      setCards(data.data)
    })()
  }
  
  useEffect(() => {
    callApi()
  }, [])

  return (

    <div className="App" >
      <ThemeProvider theme={theme}>
        <header >
          <AppBar position="static" className='App-header-bar' color='blueHeader'>
            <Toolbar variant="dense" >
              <Typography variant="h5" color="inherit" component="div">
                CardsSearch YuGiOh
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <main id='main'>


          {/* Search View Component*/}
          <SearchView />
          

          <Grid container spacing={4} align="center" className='main-card'>

            {
              cards.map((card) => (
                <Card 
                  image={card["card_images"][0].image_url_cropped}
                  name={card.name}
                  type={card.type}
                />
              ))
            }

          </Grid>
          

        </main>

        <footer>

        </footer>

      </ThemeProvider>
    </div>

  );

}

export default App;

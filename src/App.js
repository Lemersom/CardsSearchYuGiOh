import React, { createContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { Grid, Typography } from '@mui/material';

import './App.css';

import QueryContext from './QueryContext'

import Card from './components/CardView.js';
import SearchView from './components/SearchView.js';
import Footer from './components/Footer.js'
import Header from './components/Header.js';

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
      contrastText: '#FFF',
    },
    blueHeader: {
      main: '#0042B5',
      contrastText: '#FFF',
    },
    blueBtn: {
      main: '#0051DE',
      contrastText: '#FFF',
    },
  },
});


function App() {
  const [cards, setCards] = useState([]);
  const [maxCards, setMaxCards] = useState(0)
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("")
  const [errorMsg, setErrorMsg] = useState(0)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const callApi = () => {
    (async () => {
      const resp = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${(page - 1) * 20}${query}`
      );
      const data = await resp.json();
      
      if(data.error){
        setErrorMsg(1)
      }
      else{
        setErrorMsg(0)
        setCards(data.data)
        setMaxCards(data.meta.total_rows)
      }
    })();
  };

  useEffect(() => {
    callApi();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [page, query]);

  return (

    <div className="App">

      <ThemeProvider theme={theme}>

        <Header />

        <main id="main">

          <QueryContext.Provider value={{setQuery, errorMsg}}>
            <SearchView />
          </QueryContext.Provider>

          <Grid container spacing={4} align="center" className="main-card">

            {
              !errorMsg && cards.map((card) => (
                <Card
                  image={card["card_images"][0].image_url_cropped}
                  name={card.name}
                  type={card.type}
                  
                />
              ))
            }

          </Grid>
          
          { !errorMsg &&
            <Pagination
            count={Math.ceil(maxCards / 20)}
            page={page}
            onChange={handleChange}
            className='main-pagination-bar'
            variant="outlined" 
            shape="rounded"
            color='white'
            size='large'
            />
          }

        </main>

        <Footer />

      </ThemeProvider>

    </div>
  );
}

export default App;
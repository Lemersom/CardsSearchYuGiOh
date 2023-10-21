import React, { useEffect, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material';

import './App.css';

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
  const [page, setPage] = useState(1);
  const [maxCards, setMaxCards] = useState(0)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const callApi = () => {
    (async () => {
      const resp = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${(page - 1) * 20}`
      );
      const data = await resp.json();
      setCards(data.data);
    })();
  };

  const callApiAll = () => {
    (async () => {
      const resp = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php`
      );
      const data = await resp.json();
      setMaxCards(data.data.length)
    })();
  };

  useEffect(() => {
    callApi();
    callApiAll();
  }, [page]);

  return (

    <div className="App">

      <ThemeProvider theme={theme}>

        <Header />

        <main id="main">

          <SearchView />

          <Grid container spacing={4} align="center" className="main-card">

            {cards.map((card) => (
              <Card
                image={card["card_images"][0].image_url_cropped}
                name={card.name}
                type={card.type}
                func={() =>{console.log(maxCards)}}
              />
            ))
            }

          </Grid>
          
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

        </main>

        <Footer />

      </ThemeProvider>

    </div>
  );
}

export default App;
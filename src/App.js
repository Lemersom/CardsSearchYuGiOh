import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Card from './components/Card.js'

import './App.css';

import React from 'react';

const theme = createTheme({
  palette: {
    black: {
      main: '#000',
      light: '#000',
      dark: '#000',
      contrastText: '#000',
    },
    blue: {
      main: '#001969',
      light: '#bfddf3',
      dark: '#bfddf3',
      contrastText: '#bfddf3',
    }
  },
});

function App() {

  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (

    <div className="App" >
      <ThemeProvider theme={theme}>
        <header >
          <AppBar position="static" className='App-header-bar' color='blue'>
            <Toolbar variant="dense" >
              <Typography variant="h5" color="inherit" component="div">
                CardsSearch YuGiOh
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <div className="App-main">


            <TextField id="outlined-basic" label="Buscar..." variant="outlined" color="black" />

            <FormControl className="App-main-form" color="black">

              <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={filter}
                label="Filtro"
              >
                <MenuItem value={'type'}>Tipo</MenuItem>
                <MenuItem value={'star'}>Estrelas</MenuItem>
                <MenuItem value={'effect'}>Efeito</MenuItem>
              </Select>



            </FormControl>

            <Button variant="outlined" color="black" className="App-main-button">Buscar</Button>



          </div>

          <div className='main-card'>

            <Card />
            <Card />
            <Card />
            <Card />

          </div>
          

        </main>

        <footer>

        </footer>

      </ThemeProvider>
    </div>

  );

}

export default App;

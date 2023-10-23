import '../App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from '../Images/Yu-Gi-Oh.svg'

export default function Header() {

    return (

        <header>

          <AppBar position="static" className="App-header-bar" color="blueHeader">
            <Toolbar variant="dense">
            <img src={Image} alt='Logo'/>
              <Typography variant="h3" color="inherit" component="div" className='App-header-bar-typography'>
                CardsSearch
              </Typography>
            </Toolbar>
          </AppBar>

        </header>

    )
}
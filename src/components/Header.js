import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {

    return (

        <header>

          <AppBar position="static" className="App-header-bar" color="blueHeader">
            <Toolbar variant="dense">
              <Typography variant="h5" color="inherit" component="div">
                CardsSearch YuGiOh
              </Typography>
            </Toolbar>
          </AppBar>

        </header>

    )
}
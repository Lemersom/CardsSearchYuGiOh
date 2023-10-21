import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function SearchView(props) {
    
    const [filter, setFilter] = React.useState('name');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div className="App-main">

            <TextField id="outlined-basic" label={filter} variant="outlined" color="black"/>

            <div className='filter-btn-view'>
            <FormControl className="App-main-form" color="black">

              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={filter}
                label="Filtro"
              >
                <MenuItem value={'name'}>Name</MenuItem>
                <MenuItem value={'type'}>Type</MenuItem>
                <MenuItem value={'set_name'}>Set name</MenuItem>
              </Select>



            </FormControl>

            <Button variant="contained" color="blueBtn" className="App-main-button" onClick={props.func}>
                <Typography>Search</Typography>
            </Button>
            </div>


          </div>
    )
}
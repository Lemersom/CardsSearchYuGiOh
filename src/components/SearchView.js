import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import QueryContext from '../QueryContext';


export default function SearchView() {

    const { setQuery, errorMsg } = useContext(QueryContext)
    
    const [filter, setFilter] = React.useState("fname");
    const [placeholder, setPlaceholder] = React.useState("name")
    const [textFieldValue, setTextFieldValue] = React.useState("")

    const handleChange = (event) => {
      if(event.target.value === "fname"){
        setPlaceholder("name")
      }
      else{
        setPlaceholder(event.target.value)
        
      }
      
      setFilter(event.target.value); 
    };

    const changeTextInputValue = (event) => {
      setTextFieldValue(event.target.value)

      if(event.keyCode === 13){
        searchFunction()
      }
    }

    const searchFunction = () => {
      setQuery(`&${filter}=${textFieldValue}`)
    }

    return (
        <div className="App-main">

            <TextField 
              id="outlined-basic" 
              label={placeholder} 
              variant="outlined" 
              color="black"
              onKeyUp={changeTextInputValue}/>

            <div className='filter-btn-view'>
            <FormControl className="App-main-form" color="black">

              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChange}
                value={filter}
                label="Filter"
              >
                <MenuItem value={'fname'}>Name</MenuItem>
                <MenuItem value={'type'}>Type</MenuItem>
                <MenuItem value={'set'}>Set</MenuItem>
              </Select>



            </FormControl>

            <Button variant="contained" color="blueBtn" className="App-main-button" onClick={searchFunction}>
                <Typography>Search</Typography>
            </Button>
            </div>

            <div className='error-msg-div'>
              <Typography className='error-msg' variant='h5' display={errorMsg ? "block" : "none"}>Failed to find cards</Typography>
            </div>
        

          </div>
    )
}
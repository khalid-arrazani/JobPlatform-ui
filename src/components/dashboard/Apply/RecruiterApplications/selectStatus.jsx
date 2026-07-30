 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectStatus() {
  const [age, setAge] =  useState('Pending');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"Under review"}>Under review</MenuItem>
          <MenuItem value={"Interview"}>Interview</MenuItem>
          <MenuItem value={"Accepted"}>Accepted</MenuItem>
          <MenuItem value={"Rejected"}>Rejected</MenuItem>
         
        </Select>
      </FormControl>
  );
}

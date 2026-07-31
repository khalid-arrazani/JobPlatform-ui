 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { UpdateApplicationStatus } from '../../../../logic/api/apply/Apply';

export default function SelectStatus({ApplyId}) {
  const [status, setStatus] =  useState('Pending');

 

  const handleChange = async (event) => {
    setStatus(event.target.value);
    try {
        const changeStatus = await UpdateApplicationStatus({status,ApplyId})
        console.log(changeStatus);
     
    } catch (error) {
        console.log(error.response.data.message);
    }
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={status}
          onChange={handleChange}
        >
          <MenuItem sx={{color:"#de9c04",bgcolor:'#FEF3C7',mb:.5}} value={"Pending"}>Pending</MenuItem>
          <MenuItem sx={{color:"#1664e1",bgcolor:'#DBEAFE',mb:.5}}  value={"Under review"}>Under review</MenuItem>
          <MenuItem sx={{color:"#672ded",bgcolor:'#EDE9FE',mb:.5}}  value={"Interview"}>Interview</MenuItem>
          <MenuItem sx={{color:"#0c9769",bgcolor:'#D1FAE5',mb:.5}}  value={"Accepted"}>Accepted</MenuItem>
          <MenuItem sx={{color:"#e42828",bgcolor:'#FEE2E2',mb:.5}}  value={"Rejected"}>Rejected</MenuItem>
         
        </Select>
      </FormControl>
  );
}

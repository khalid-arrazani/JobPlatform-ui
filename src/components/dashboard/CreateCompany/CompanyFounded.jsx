import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

export default function CompanyFounded({ setFirstInfo }) {
  const [value, setValue] = useState(dayjs());

  useEffect(()=>{
    setFirstInfo((prev)=>({
    ...prev , company_founded : value.year()
    }))
  },[value])

  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DatePicker
        
     
        views={["year"]}
        openTo="year"
        value={value}
        onChange={setValue}
        sx={{ width:"100%"}}
        slotProps={{
            popper: { sx: { transition: "none", animation: "none",} },
         }}
      />
    </LocalizationProvider>
  );
}

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

export default function CompanyFounded({setCompanyinfo }) {
  const [value, setValue] = useState(dayjs());

  useEffect(()=>{
    setCompanyinfo((prev)=>({
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
        sx={{ width:"100%",bgcolor:"#fff"}}
        slotProps={{
            popper: { sx: { transition: "none", animation: "none",} },
         }}
      />
    </LocalizationProvider>
  );
}

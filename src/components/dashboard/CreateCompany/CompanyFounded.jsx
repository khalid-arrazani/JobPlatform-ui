import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function CompanyFounded() {
  const [value, setValue] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Founded Year"
        views={["year"]}
        openTo="year"
        value={value}
        onChange={setValue}
      />
    </LocalizationProvider>
  );
}

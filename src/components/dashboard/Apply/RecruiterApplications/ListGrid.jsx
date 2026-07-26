import { DataGrid } from "@mui/x-data-grid";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";



const rows = [
  { id: 1, name: "Khalid", status: "Pending" },
  { id: 2, name: "Sarah", status: "Interview" },

];

const columns = [
  {
    field: "name",
    headerName: "Applicant",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
];
export default function ListGrid() {
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
}

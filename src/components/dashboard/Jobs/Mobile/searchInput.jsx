import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";

export default function SearchInput({search , setSearch}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(236, 236, 236, 0.95)",
            px: 2,
            py: 0.4,
            borderRadius: "0.5rem",
            width: "80%",
            border:"1px dashed #c3c0c0",
            mt:'6px',
            mb:'6px',
            
          }}
        >
          <SearchIcon sx={{ color: "#555", fontSize: 20 }} />

          <InputBase
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value)
          }}
            placeholder="Search jobs..."
            sx={{
              ml: 1,
              flex: 1,
              color: "#000",
              fontFamily:"monospace"
            }}
          />
        </Box>
      </Box>
    </>
  );
}

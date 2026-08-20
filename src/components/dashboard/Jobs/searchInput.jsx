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
            background: "rgba(255,255,255,0.95)",
            px: 2,
            py: 0.5,
            borderRadius: "0.8rem",
            width: "80%",
            transition: "0.3s",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",

            "&:focus-within": {
              boxShadow: "0 0 8px rgba(0,0,0,0.3)",
              transform: "scale(1.02)",
            },
          }}
        >
          <SearchIcon sx={{ color: "#555", fontSize: 20 }} />

          <InputBase
            placeholder="Search jobs..."
            sx={{
              ml: 1,
              flex: 1,
              color: "#000",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

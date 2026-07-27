import {
  Box,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Tab, Tabs, Chip } from "@mui/material";


import { useApply } from "../../../../logic/context/ApplyContext";

export default function Header() {
  const { felterData, setFelterData, ...state } = useApply();

  return (
    <>
      <Box
        sx={{
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          pt: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
             Applications
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#64748B",
                fontSize: "0.95rem",
              }}
            >
              Review and mange applications for your job posts
            </Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Autocomplete
              size="small"
              sx={{
                width: 220,
                "& .MuiAutocomplete-clearIndicator": {
                  display: "none",
                },
                "& .MuiInputBase-root": { borderRadius: "8px" },
              }}
              options={["Newest First", "Oldest First"]}
              value={felterData.sort}
              onChange={(event, newValue) => {
                setFelterData((prev) => ({ ...prev, sort: newValue }));
              }}
              slotProps={{
                popper: {
                  sx: {
                    transition: "none",
                    animation: "none",
                  },
                },
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Sort by" />
              )}
            />
          </Box>
        </Box>

        <Tabs
          value={felterData.status}
          onChange={(event, newValue) => {
            setFelterData((prev) => ({
              ...prev,
              status: newValue,
              page: 1,
              search: "",
            }));
          }}
         
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#5590ff",
              height: "1px",
              borderRadius: "999px",
             
            
              
            },
            "& .MuiButtonBase-root":{p:1,minHeight:"2rem",},
            "& .MuiTabs-list":{p:0,gap:0.5}, pl:2
      
          }}
        >
          <Tab
            label="All"
            value={""}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
              padding: 0,
            }}
          />

          <Tab
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Pending</span>

                <Chip
                  label={state?.ListApply?.countPending || 0}
                  size="small"
                  sx={{ color: "#F59E0B", bgcolor: "#FEF3C7" }}
                />
              </Box>
            }
            value={"Pending"}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />

          <Tab
            value={"Under review"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Under review</span>

                <Chip
                  label={state?.ListApply?.countUnder_review || 0}
                  size="small"
                  sx={{ color: "#3B82F6", bgcolor: "#DBEAFE" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />

          <Tab
            value={"Accepted"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Accepted</span>

                <Chip
                  label={state?.ListApply?.countAccepted || 0}
                  size="small"
                  sx={{ color: "#10B981", bgcolor: "#D1FAE5" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />

          <Tab
            value={"Interview"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Interview</span>

                <Chip
                  label={state?.ListApply?.countInterview || 0}
                  size="small"
                  sx={{ color: "#8B5CF6", bgcolor: "#EDE9FE" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />

          <Tab
            value={"Rejected"}
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Rejected</span>
                <Chip
                  label={state?.ListApply?.countRejected || 0}
                  size="small"
                  sx={{ color: "#EF4444", bgcolor: "#FEE2E2" }}
                />
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 64,
            }}
          />
        </Tabs>
      </Box>
    </>
  );
}

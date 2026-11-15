import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { Tab, Tabs, Chip } from "@mui/material";
import { useApply } from "../../../../../logic/context/ApplyContext";

export default function Header() {
  const { felterData, setFelterData, ...state } = useApply();

  return (
    <>
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          pt: 1,
          gap: 2,
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
                color: "#03060ec4",
                fontFamily: "monospace",
              }}
            >
              Applications
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#64748B",
                fontSize: "0.88rem",
                fontWeight: 700,
                fontFamily: "monospace",
              }}
            >
              Review and mange applications for your job posts
            </Typography>
          </Box>

          {/* Right */}
          {/* <Box
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
          </Box> */}
        </Box>

        {/* <Tabs
          value={felterData.status}
          size="small"
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
              top: "52px", 
            },
            width:"100%",p:0,
            
            
            "& .css-rvn5oh-MuiTabs-root":{height:1},overflow:"auto"
          }}
        >
          <Tab
            label="All"
            value={""}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace', padding:.5
            }}
          />

          <Tab
            label={
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <span style={{ fontFamily: "system-ui" }}>Pending</span>

                <Chip
                  label={state?.ListApply?.countPending || 0}
                  size="small"
                  sx={{ color: "#F59E0B", bgcolor: "#FEF3C7",fontSize:"0.7rem" }}
                />
              </Box>
            }
            value={"Pending"}
           sx={{
              textTransform: "none",
              fontWeight: 600,
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace',padding:.5
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
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace',padding:.5
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
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace',padding:.5
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
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace',padding:.5
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
              minHeight: 5,
              minWidth:5,
              fontSize:"0.7rem",fontFamily:'monospace',padding:.5
            }}
          />
        </Tabs> */}

        {/* Taps category */}
        <Box
          sx={{
            width: "100%",
            height: "7rem",
            display: "flex",
            flexDirection: "column",
            gap:1
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "fit-content",
      
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              px: 1,
            }}
          >

            <Box
              title=""
              sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}} 
            >
              All
            </Box>
            <Box
            title="Pending"
            onClick={(e)=>{
              console.log(e.target.id)
            }}
              sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}}
            >Pending</Box>
            <Box
            title="Under review"
              sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}}
            >Under review</Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "fit-content",
             
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              px: 1,
            }}
          >
            <Box
            title="Accepted"
             sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}}
            >Accepted</Box>
            <Box
            title="Interview"
              sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}}
            >Interview</Box>
            <Box
            title="Rejected"
              sx={{ width: "7rem", height: "2rem", bgcolor: "#fff",borderRadius:"8px",border:"1px solid #e1e0e097",fontFamily:"monospace",textAlign:"center",alignContent:"center",color:"#010317d2",fontSize:"0.85rem",fontWeight:600}}
            >Rejected</Box>
          </Box>
        </Box>


      </Box>
    </>
  );
}

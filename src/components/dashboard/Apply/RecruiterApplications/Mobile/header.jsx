import { Box, Typography, TextField, Autocomplete } from "@mui/material";
import { Tab, Tabs, Chip } from "@mui/material";
import { useApply } from "../../../../../logic/context/ApplyContext";

export default function Header() {
  const { felterData, setFelterData, ...state } = useApply();

  const TapsChange = (e) => {
    setFelterData((prev) => ({
      ...prev,
      status: e.target.title,
      page: 1,
      search: "",
    }));
  };

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
          py: 1,
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
          {/* titel */}
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
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: 1,
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
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor: felterData.status == "" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color: felterData.status == "" ? "#320369d2" : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              All
            </Box>
            <Box
              title="Pending"
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "Pending" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor: felterData.status == "Pending" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color:
                  felterData.status == "Pending" ? "#320369d2" : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "Pending" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Pending
            </Box>
            <Box
              title="Under review"
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "Under review" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor:
                  felterData.status == "Under review" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color:
                  felterData.status == "Under review"
                    ? "#320369d2"
                    : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "Under review" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Under review
            </Box>
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
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "Accepted" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor: felterData.status == "Accepted" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color:
                  felterData.status == "Accepted" ? "#320369d2" : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "Accepted" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Accepted
            </Box>
            <Box
              title="Interview"
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "Interview" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor: felterData.status == "Interview" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color:
                  felterData.status == "Interview" ? "#320369d2" : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "Interview" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Interview
            </Box>
            <Box
              title="Rejected"
              onClick={(e) => {
                TapsChange(e);
              }}
              sx={{
                width: felterData.status == "Rejected" ? "6.8rem" : "7rem",
                height: "2rem",
                bgcolor: felterData.status == "Rejected" ? "#f7dcff" : "#fff",
                borderRadius: "8px",
                border: "1px solid #e1e0e097",
                fontFamily: "monospace",
                textAlign: "center",
                alignContent: "center",
                color:
                  felterData.status == "Rejected" ? "#320369d2" : "#010317d2",
                fontSize: "0.85rem",
                fontWeight: 700,
                scale: felterData.status == "Rejected" ? 1.1 : 1,
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              Rejected
            </Box>
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Autocomplete
            size="small"
            sx={{
              width: 220,
              "& .MuiAutocomplete-clearIndicator": {
                display: "none",
              },
              "& .MuiInputBase-root": {
                borderRadius: "5px",
                fontFamily: "monospace",
              },
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
              <TextField
                {...params}
                placeholder="Sort by"
                inputProps={{
                  ...params.inputProps,
                  readOnly: true,
                }}
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
}

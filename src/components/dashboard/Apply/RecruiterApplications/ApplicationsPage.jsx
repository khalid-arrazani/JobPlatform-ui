import { Box, Avatar, Typography, Chip } from "@mui/material";

import { Pagination } from "@mui/material";

import { useEffect } from "react";

import Header from "./header";
import ListGrid from "./ListGrid";
import { useApply } from "../../../../logic/context/ApplyContext";
import LoadingList from "./LoadingList";

export default function ApplicationsRc() {
  const { isLoading, ApplyJobs, felterData, setFelterData, ...state } =
    useApply();
  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    ApplyJobs();
  }, []);

  const apply = { status: "Pending" };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "92.4vh",
          bgcolor: "#dcdbdb",
          display: "flex",
        }}
      >
        {/* left side header and SavedJobsList */}
        <Box
          sx={{
            width: "70vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            borderRight: "solid 0.5px #6160601c",
            boxSizing: "border-box",
            px: 5,
          }}
        >
          <Header />

          <Box
            sx={{
              width: "100%",
              height: "62%",
              boxSizing: "border-box",
              placeItems: "center",
              overflow: "hidden",
              border: "solid 0.1px #8d8d8d3a",
            }}
          >
            {isLoading ? <LoadingList /> : <ListGrid />}
          </Box>
          <Pagination
            onChange={handleChange}
            page={felterData.page}
            count={state?.ListApply?.totalPages}
            sx={{
              mt: "auto",
              alignSelf: "center",
              mb: 1,
            }}
          />
        </Box>

        {/* right side profile card  */}
        <Box
          sx={{
            width: "30vw",
            height: "100%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            p: 2,
          }}
        >
          <Box
            sx={{
              boxSizing: "border-box",
              border: "1px #ddd dashed",
              height: "100%",
              width: "100%",
              borderRadius: "15px",
              px: 1,
            }}
          >
            <Box
              sx={{
                height: "40%",
                width: "100%",
                borderBottom: "1px dashed #ddd",
                placeItems: "center",
                boxSizing: "border-box",
                p: 2,
              }}
            >
              <Avatar sx={{ height: "8rem", width: "8rem" }} />

              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  color: "#00010ed0",
                  bt: 1,
                }}
              >
                {" "}
                Khalid Arazani{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                }}
              >
                {" "}
                Frontend React Developer{" "}
              </Typography>
            </Box>

            <Box
              sx={{
                height: "60%",
                width: "100%",
                boxSizing: "border-box",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                gap: 2,
              }}
            >
              <Chip
                label={`• ${apply?.status}`}
                sx={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  borderRadius: "8px",
                  fontFamily: "monospace",
                  color:
                    apply?.status == "Pending"
                      ? "#F59E0B"
                      : apply?.status == "Accepted"
                        ? "#10B981"
                        : apply?.status == "Interview"
                          ? "#8B5CF6"
                          : apply?.status == "Rejected"
                            ? "#EF4444"
                            : apply?.status == "Under review"
                              ? "#3B82F6"
                              : null,

                  bgcolor:
                    apply?.status == "Pending"
                      ? "#FEF3C7"
                      : apply?.status == "Accepted"
                        ? "#D1FAE5"
                        : apply?.status == "Interview"
                          ? "#8a5cf620 "
                          : apply?.status == "Rejected"
                            ? "#FEE2E2"
                            : apply?.status == "Under review"
                              ? "#DBEAFE"
                              : null,
                  fontWeight: 600,
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                }}
              >
                {" "}
                📍 Taroudant, Morocco{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                }}
              >
                {" "}
                ✉ karazani2003@gmail.com{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                }}
              >
                📞 +212 777964129
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                }}
              >
               <Chip  label={`✔ React `} /> - <Chip  label={`✔ JavaScript `} /> - <Chip  label={`✔ Node.js `} /> 
               
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

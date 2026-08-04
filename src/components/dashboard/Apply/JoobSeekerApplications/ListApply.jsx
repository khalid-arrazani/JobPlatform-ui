import { Card, Typography, Box, Avatar, Chip } from "@mui/material";

import { useApply } from "../../../../logic/context/ApplyContext";

import { formatDistanceToNow, format } from "date-fns";
import MenuApply from "./Menu";
import NoApplyFound from "./EmptyList/NoApplyFound";
 

export default function ListApply() {
  const {...state } = useApply();


  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          placeItems: "center",
          overflow: "auto",
        }}
      >
        {state?.ListApply?.hasApply ? 
        
        state?.ListApply?.applications?.map((app) => (
          <Card
            sx={{
              height: "6.5rem",
              width: "95%",
              my: 1,
              border: "1px solid #cfcececa",
              boxSizing: "border-box",
              display: "flex",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
              transition: "all 0.25s ease",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
                borderColor: "#b8b8b8",
                cursor: "pointer",
              },
            }}
            key={app._id}
          >
            <Box
              sx={{
                height: "100%",
                width: "6.5rem",
                boxSizing: "border-box",
                p: 1,
                borderRight: "solid 1px #ddd",
              }}
            >
              <Avatar
                src={app?.company?.companyLogo?.url}
                sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            </Box>

            <Box sx={{ height: "100%", flex: 1, display: "flex", pr: 1 }}>
              <Box
                sx={{
                  height: "100%",
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 0.5,
                  pl: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    fontFamily: "ui-monospace",
                  }}
                >
                  {app?.job?.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: "#02020db4",
                  }}
                >
                  {app?.job?.location}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: "#02020db4",
                    mb: 0.5,
                  }}
                >
                  Applied on {""}

                  {formatDistanceToNow(new Date(app?.createdAt), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>

              <Box
                sx={{
                  height: "100%",
                  width: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Chip
                  label={`• ${app?.status}`}
                  sx={{
                    fontSize: "0.9rem",
                    borderRadius: "8px",
                    fontFamily: "system-ui",
                    color:
                      app?.status == "Pending"
                        ? "#F59E0B"
                        : app?.status == "Accepted"
                          ? "#10B981"
                          : app?.status == "Interview"
                            ? "#8B5CF6"
                            : app?.status == "Rejected"
                              ? "#EF4444"
                              : app?.status == "Under review"
                                ? "#3B82F6"
                                : null,

                    bgcolor:
                      app?.status == "Pending"
                        ? "#FEF3C7"
                        : app?.status == "Accepted"
                          ? "#D1FAE5"
                          : app?.status == "Interview"
                            ? "#EDE9FE"
                            : app?.status == "Rejected"
                              ? "#FEE2E2"
                              : app?.status == "Under review"
                                ? "#DBEAFE"
                                : null,
                    fontWeight: 600,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    width: "40%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      color: "#02020db4",
                      mb: 0.5,
                    }}
                  >
                    {format(new Date(app?.createdAt), "MMM dd, yyyy")}
                  </Typography>

                  <MenuApply JobId={app?.job?._id} />
                </Box>
              </Box>
            </Box>
          </Card>
        )):
        <NoApplyFound/> }
       
       
      </Box>
    </>
  );
}

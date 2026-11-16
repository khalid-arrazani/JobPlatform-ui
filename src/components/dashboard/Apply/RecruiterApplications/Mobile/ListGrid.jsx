import { Avatar, Box, Typography, Chip, Button } from "@mui/material";
import MenuApply from "./Menu";

import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import NoApplyFound from "./EmptyList/NoApplyFound";
import { useApply } from "../../../../../logic/context/ApplyContext";

export default function ListGrid() {
  const { setProfile, ...state } = useApply();

  const navigate = useNavigate();

  return (
    <>
      {state?.ListApply?.hasApply ? (
        <Box
          sx={{
            width: "100%",
            px: 1,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            py: 1,
          }}
        >
          {state?.ListApply?.applications?.map((apply) => (
            <Box
              key={apply._id}
              sx={{
                width: "100%",
                height: "auto",
                bgcolor: "#fff",
                border: "1px solid #eeeeee",
                borderRadius: "8px",
              }}
            >
              {/* top content */}
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  boxSizing: "border-box",
                  borderBottom: "1px solid #ddddddb3",
                }}
              >
                {/* avatar */}
                <Box
                  sx={{
                    width: "4.5rem",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    p: 1,
                  }}
                >
                  <Avatar
                    src={apply?.profile?.ProfileImage?.url}
                    sx={{
                      height: "3.5rem",
                      width: "3.5rem",
                      borderRadius: "10px",
                      border: "1px solid #dddddd",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    height: "100%",
                    boxSizing: "border-box",
                    p: 0.6,
                    py: 1.1,
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      boxSizing: "border-box",

                      width: "12em",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#01010edf",
                      }}
                    >
                      {apply?.profile?.fullName}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#01010e90",
                      }}
                    >
                      {apply?.applicant?.email}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#01010e90",
                      }}
                    >
                      {apply?.profile?.location.slice(0, 40)}
                      {apply?.profile?.location.length > 40
                        ? "....."
                        : null}{" "}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      height: "auto",
                      display: "flex",
                      alignItems: "end",
                      gap: 1,
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <MenuApply
                      ApplyId={apply?._id}
                      JobId={apply?.job._id}
                      status={apply.status}
                    />

                    <Button
                      onClick={() =>
                        navigate(
                          `/Dashboard/Profile/Details/${apply?.profile?._id}/${apply?.applicant?.role}`,
                        )
                      }
                      sx={{
                        textTransform: "none",
                        fontSize: "0.65rem",
                        color: "#7d09bb",
                        border: "#7d09bb87 1px solid",
                        fontWeight: 600,
                        fontFamily: "system-ui",
                        bgcolor: "#fffefe",
                        borderRadius: "8px",
                      }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* bottom content */}
              <Box
                sx={{
                  height: "auto",
                  width: "100%",

                  display: "flex",

                  boxSizing: "border-box",
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    height: "auto",
                    flex: 1,
                    boxSizing: "border-box",
                    p: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#6f6f70df",
                    }}
                  >
                    Job post
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      color: "#020210df",
                    }}
                  >
                    {apply?.job?.title.slice(0, 26)}
                    {apply?.job?.title.length > 26 ? "....." : null}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    height: "auto",
                    flex: 1,
                    borderLeft: "1px dashed #ddd",
                    borderRight: "1px dashed #ddd",
                    boxSizing: "border-box",
                    p: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#6f6f70df",
                    }}
                  >
                    Status
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      color: "#020210df",
                    }}
                  >
                    <Chip
                      label={`• ${apply?.status}`}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        alignItems: "center",
                        borderRadius: "8px",
                        fontFamily: "system-ui",
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
                      }}
                    />
                  </Typography>
                </Box>

                <Box
                  sx={{
                    height: "100%",
                    flex: 1,
                    boxSizing: "border-box",
                    p: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#6f6f70df",
                    }}
                  >
                    Applied On
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      color: "#020210df",
                    }}
                  >
                    {format(new Date(apply?.createdAt), "MMM dd, yyyy")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <NoApplyFound />
      )}
    </>
  );
}

{
  /* <Box
                key={apply._id}
                onClick={() => {
                  setProfile(apply);
                }}
                sx={{
                  height: "5.5rem",
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  px: 2,

                  borderBottom: "solid 1px #ddd",
                  transition: "0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#f6fbff",
                  },
                  cursor: "pointer",

                  "&:active": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#f6fbff",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "32%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    color: "#02010e9c",
                    fontSize: "0.9rem",
                    gap: 1.5,
                  }}
                >
                  <Avatar
                    src={apply?.profile?.ProfileImage?.url}
                    sx={{ height: "3rem", width: "3rem" }}
                  />

                  <Box
                    sx={{
                      width: "auto",
                      height: "100%",
                      display: "flex",
                      fontFamily: "system-ui",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                      gap: 0.2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "system-ui",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#020210df",
                      }}
                    >
                      {apply?.profile?.fullName}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "system-ui",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    >
                      {apply?.applicant?.email}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "system-ui",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    >
                      {apply?.profile?.location.slice(0, 20)}
                      {apply?.profile?.location.length > 20
                        ? "....."
                        : null}{" "}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "20%",
                    height: "100%",
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#020210df",
                    }}
                  >
                    {apply?.job?.title.slice(0, 26)}
                    {apply?.job?.title.length > 26 ? "....." : null}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "system-ui",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      color: "#6a6969",
                    }}
                  >
                    {apply?.job?.jobType} • {apply?.job?.workMode}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "18%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    color: "#02010e9c",
                    fontSize: "0.9rem",
                  }}
                >
                  <Chip
                    label={`• ${apply?.status}`}
                    sx={{
                      fontSize: "0.8rem",
                      alignItems: "center",
                      borderRadius: "8px",
                      fontFamily: "system-ui",
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
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "13%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    color: "#02010e50",
                    fontSize: "0.9rem",
                  }}
                >
                  {format(new Date(apply?.createdAt), "MMM dd, yyyy")}
                </Box>
                <Box
                  sx={{
                    width: "17%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    direction: "rtl",
                    fontFamily: "system-ui",
                    fontWeight: 600,
                    color: "#02010e9c",
                    fontSize: "0.9rem",
                    gap: 1,
                  }}
                >
                  <MenuApply
                    ApplyId={apply?._id}
                    JobId={apply?.job._id}
                    status={apply.status}
                  />

                  <Button
                    onClick={() =>
                      navigate(
                        `/Dashboard/Profile/Details/${apply?.profile?._id}/${apply?.applicant?.role}`,
                      )
                    }
                    sx={{
                      textTransform: "none",
                      fontSize: "0.8rem",
                      color: "#000000c3",
                      border: "#ddd 1px solid",
                      fontWeight: 600,
                      fontFamily: "system-ui",
                      bgcolor: "#fffefe",
                    }}
                  >
                    View Profile
                  </Button>
                </Box>
              </Box> */
}

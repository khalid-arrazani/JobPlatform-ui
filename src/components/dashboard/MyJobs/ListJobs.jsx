import { Box, Typography, Chip, Card, Stack, Avatar } from "@mui/material";

import MenuCard from "./Menu";
import { useJob } from "../../../logic/context/JobContext";
import { formatDistanceToNow } from "date-fns";
import MenuCardDraft from "./draft/MenuDraft";

import LinearProgress from "@mui/material/LinearProgress";

export default function CardJobs() {
  const { ...state } = useJob();

  return (
    <>
      {state.MyJobs?.jobs.map((job) => {

        const fields = [
          "title",
          "description",
          "location",
          "minSalary",
          "maxSalary",
          "jobType",
          "workMode",
          "experienceLevel",
          "skills",
        ];

        let completed = 0;

        fields.forEach((field) => {
          const value = job[field];

          if (
            value !== undefined &&
            value !== null &&
            value !== "" &&
            (!Array.isArray(value) || value.length > 0)
          ) {
            completed++;
          }
        });

        return (
          <>
            {job.status === "draft" ? (
              <Card
                sx={{
                  bgcolor: "#ffffff",
                  height: "9.5rem",
                  width: "100%",
                  border: "1px dashed #dddddd",
                  borderRadius: "10px",
                  display: "flex",
                  boxSizing: "border-box",
                  boxShadow: "none",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                  },
                  my: 2,
                  position: "relative",
                }}
              >
                {/* Left */}
                <Box
                  sx={{
                    width: "10rem",
                    height: "100%",
                    placeContent: "center",
                    placeItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "75%",
                      height: "75%",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      placeContent: "center",
                      placeItems: "center",
                      p: 1,
                    }}
                  >
                    <Avatar
                      src={job.createdBy?.companyLogo?.url}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Box>

                {/* Right */}
                <Box
                  sx={{
                    width: "84%",
                    borderLeft: "1px solid #ddd",
                    height: "100%",
                    pb: 1,
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{
                      mt: 1,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Chip
                      label="● Draft"
                      size="small"
                      sx={{
                        fontSize: "0.9rem",
                        height: "22px",
                        bgcolor: "#e1e1e1",
                        color: "rgb(98, 98, 98)",
                        borderRadius: "2px",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        width: "fit-Content",
                      }}
                    />

                    <Box
                      sx={{ display: "flex", height: "fit-Content", gap: 3 }}
                    >
                      <Chip
                        label={`Last saved ${formatDistanceToNow(
                          new Date(job.updatedAt),
                          { addSuffix: true },
                        )}`}
                        size="small"
                        sx={{
                          fontSize: "0.8rem",
                          height: "25px",
                          width: "fit-content",
                          bgcolor: "#e4e4e400",
                          color: "#666666",
                          fontWeight: 500,
                          borderRadius: "5px",
                        }}
                      />

                      {/* Menu */}
                      <MenuCardDraft JobId={job._id} jobInfo={job} />


                    </Box>
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "1.7rem",
                      fontWeight: 600,
                      fontFamily: "ui-monospace",
                      color: "#02020dda",
                    }}
                  >
                    {job?.title || "-----------------------"}
                  </Typography>

                  <Stack direction="row" spacing={1.5} sx={{ mt: 1, mb: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: "#02020db4",
                      }}
                    >
                      {job?.location || "---------------"}
                    </Typography>

                    
                    {job.jobType ? <Chip
                      label={job.jobType}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#d8f3ff",
                        color: "#0150b7",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    />:null}

                  
                    {job.experienceLevel ? <Chip
                      label={job.experienceLevel}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#ffd8de",
                        color: "rgb(158,64,64)",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    />:null}

                  {job.workMode ? <Chip
                      label={job.workMode}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#f6d8ff",
                        color: "#72037c",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    />:null}

                    
                  </Stack>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    position: "absolute",
                    bottom: 23,
                    right: 15,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: ".9rem",
                      fontWeight: 400,
                      color: "#727272",
                    }}
                  >
                    {completed} of 11 completed
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={(completed / 11) * 100}
                    sx={{
                      width: 170,
                      height: 8,
                      borderRadius: 5,
                      bgcolor: "#ECECEC",

                      "& .MuiLinearProgress-bar": {
                        borderRadius: 5,
                        bgcolor: "#6C3CF0",
                      },
                    }}
                  />
                </Box>
              </Card>
            ) : (
              <Card
                key={job._id}
                sx={{
                  bgcolor: "#ffffff",
                  height: "9.5rem",
                  width: "100%",
                  border: "1px solid #ddddddb9",
                  borderRadius: "10px",
                  display: "flex",
                  boxSizing: "border-box",
                  boxShadow: "none",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                  },
                  my: 2,
                }}
              >
                {/* card job left side */}
                <Box
                  sx={{
                    width: "10rem",
                    height: "100%",
                    placeContent: "center",
                    placeItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "75%",
                      height: "75%",

                      border: "solid 1px #ddd",
                      borderRadius: "8px",

                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",

                      boxSizing: "border-box",
                      placeContent: "center",
                      placeItems: "center",
                      p: 1,
                    }}
                  >
                    <Avatar
                      src={job.createdBy?.companyLogo?.url}
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Box>

                {/* card job right side */}
                <Box
                  sx={{
                    width: "84%",
                    borderLeft: "solid 1px #ddd",
                    height: "100%",
                    pb: 1,
                    px: 2,

                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.7rem",
                      fontWeight: 600,
                      fontFamily: "ui-monospace",
                      color: "#02020dda",
                    }}
                  >
                    {job?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      color: "#02020db4",
                    }}
                  >
                    {job?.location}
                  </Typography>
                  <Stack direction="row" spacing={1.5} sx={{ mt: 1, mb: 1 }}>
                    <Chip
                      label={job?.jobType}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#d8f3ff",
                        borderRadius: "5px",
                        color: "#0150b7",
                        fontWeight: 600,
                      }}
                    />

                    <Chip
                      label={job?.experienceLevel}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#ffd8de",
                        color: "rgb(158, 64, 64)",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label={job?.workMode}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: "22px",
                        bgcolor: "#f6d8ff",
                        color: "#72037c",
                        borderRadius: "5px",
                        fontWeight: 600,
                      }}
                    />
                  </Stack>

                  <Chip
                    label={formatDistanceToNow(new Date(job.createdAt), {
                      addSuffix: true,
                    })}
                    size="small"
                    sx={{
                      fontSize: "0.78rem",
                      height: "25px",
                      width: "fit-Content",
                      bgcolor: "#e4e4e4",
                      color: "#515151",
                      fontWeight: 500,
                      borderRadius: "5px",
                    }}
                  />

                  <Chip
                    label={`• ${job.status}`}
                    size="small"
                    sx={{
                      fontSize: "0.9rem",
                      height: "22px",
                      bgcolor:
                        job.status == "closed"
                          ? "#fde4af"
                          : job.status == "active"
                            ? "#d8ffda"
                            : null,
                      color:
                        job.status == "closed"
                          ? "rgb(137, 109, 10)"
                          : job.status == "active"
                            ? "rgb(27, 137, 10)"
                            : null,
                      borderRadius: "10px",
                      fontWeight: 600,
                      fontFamily: "monospace",
                      position: "absolute",
                      top: "18%",
                      right: "20%",
                    }}
                  />

                  {/* MoreVertIcon - Menu  */}
                  <MenuCard
                    JobId={job?._id}
                    Status={job?.status}
                    jobInfo={job}
                  />

                  <Box
                    sx={{
                      width: "10rem",
                      height: "3.5rem",
                      position: "absolute",
                      right: "15%",
                      bottom: "10%",
                      display: "flex",
                      textAlign: "center",
                    }}
                  >
                    <Box sx={{ height: "100%", width: "50%" }}>
                      <Typography
                        sx={{ fontWeight: 600, fontFamily: "system-ui" }}
                      >
                        {job.applicationsCount}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          color: "#04020e9a",
                          fontSize: "0.85rem",
                          fontFamily: "system-ui",
                        }}
                      >
                        Applicants
                      </Typography>
                    </Box>
                    <Box sx={{ height: "100%", width: "50%" }}>
                      <Typography
                        sx={{ fontWeight: 600, fontFamily: "system-ui" }}
                      >
                        {job.jobViews}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          color: "#04020e9a",
                          fontSize: "0.85rem",
                          fontFamily: "system-ui",
                        }}
                      >
                        Views
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            )}
          </>
        );
      })}
    </>
  );
}

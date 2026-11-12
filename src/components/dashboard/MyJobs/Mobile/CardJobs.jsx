import {
  Box,
  Typography,
  Chip,
  Card,
  Stack,
  Avatar,
  Button,
} from "@mui/material";

import MenuCard from "./Menu";

import { formatDistanceToNow } from "date-fns";
import MenuCardDraft from "./draft/MenuDraft";

import LinearProgress from "@mui/material/LinearProgress";
import { useJob } from "../../../../logic/context/JobContext";
import { useState } from "react";
import MyJobDetailsModal from "./MyJobDetailsModal/MyJobDetailsModal";

export default function CardJobs() {
  const { ...state } = useJob();
  const [openMyJobDetailsModal, setMyJobDetailsModal] = useState(false);

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
            <Box key={job._id} sx={{ width: "100%", placeItems: "center" }}>
              {job.status === "draft" ? (
                // <Card
                //   sx={{
                //     bgcolor: "#ffffff",
                //     height: "9.5rem",
                //     maxWidth:"100%",
                //     border: "1px dashed #dddddd",
                //     borderRadius: "10px",
                //     display: "flex",
                //     boxSizing: "border-box",
                //     boxShadow: "none",
                //     transition: "0.5s",
                //     "&:hover": {
                //       transform: "translateY(-4px)",
                //       boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                //     },
                //     my: 2,
                //     position: "relative",
                //   }}
                // >
                //   {/* Left */}
                //   <Box
                //     sx={{
                //       width: "10rem",
                //       height: "100%",
                //       placeContent: "center",
                //       placeItems: "center",
                //     }}
                //   >
                //     <Box
                //       sx={{
                //         width: "75%",
                //         height: "75%",
                //         border: "1px solid #ddd",
                //         borderRadius: "8px",
                //         placeContent: "center",
                //         placeItems: "center",
                //         p: 1,
                //       }}
                //     >
                //       <Avatar
                //         src={job.createdBy?.companyLogo?.url}
                //         sx={{
                //           width: "100%",
                //           height: "100%",
                //           borderRadius: "8px",
                //         }}
                //       />
                //     </Box>
                //   </Box>

                //   {/* Right */}
                //   <Box
                //     sx={{
                //       width: "84%",
                //       borderLeft: "1px solid #ddd",
                //       height: "100%",
                //       pb: 1,
                //       px: 2,
                //       display: "flex",
                //       flexDirection: "column",
                //       justifyContent: "center",
                //       position: "relative",
                //     }}
                //   >
                //     <Stack
                //       direction="row"
                //       spacing={1.5}
                //       sx={{
                //         mt: 1,
                //         width: "100%",
                //         justifyContent: "space-between",
                //       }}
                //     >
                //       <Chip
                //         label="● Draft"
                //         size="small"
                //         sx={{
                //           fontSize: "0.9rem",
                //           height: "22px",
                //           bgcolor: "#e1e1e1",
                //           color: "rgb(98, 98, 98)",
                //           borderRadius: "2px",
                //           fontWeight: 600,
                //           fontFamily: "monospace",
                //           width: "fit-Content",
                //         }}
                //       />

                //       <Box
                //         sx={{ display: "flex", height: "fit-Content", gap: 3 }}
                //       >
                //         <Chip
                //           label={`Last saved ${formatDistanceToNow(
                //             new Date(job.updatedAt),
                //             { addSuffix: true },
                //           )}`}
                //           size="small"
                //           sx={{
                //             fontSize: "0.8rem",
                //             height: "25px",
                //             width: "fit-content",
                //             bgcolor: "#e4e4e400",
                //             color: "#666666",
                //             fontWeight: 500,
                //             borderRadius: "5px",
                //           }}
                //         />

                //         {/* Menu */}
                //         <MenuCardDraft JobId={job._id} jobInfo={job} />
                //       </Box>
                //     </Stack>
                //     <Typography
                //       sx={{
                //         fontSize: "1.7rem",
                //         fontWeight: 600,
                //         fontFamily: "ui-monospace",
                //         color: "#02020dda",
                //       }}
                //     >
                //       {job?.title || "-----------------------"}
                //     </Typography>

                //     <Stack direction="row" spacing={1.5} sx={{ mt: 1, mb: 1 }}>
                //       <Typography
                //         sx={{
                //           fontSize: "0.8rem",
                //           fontWeight: 600,
                //           fontFamily: "monospace",
                //           color: "#02020db4",
                //         }}
                //       >
                //         {job?.location || "---------------"}
                //       </Typography>

                //       {job.jobType ? (
                //         <Chip
                //           label={job.jobType}
                //           size="small"
                //           sx={{
                //             fontSize: "0.7rem",
                //             height: "22px",
                //             bgcolor: "#d8f3ff",
                //             color: "#0150b7",
                //             borderRadius: "5px",
                //             fontWeight: 600,
                //           }}
                //         />
                //       ) : null}

                //       {job.experienceLevel ? (
                //         <Chip
                //           label={job.experienceLevel}
                //           size="small"
                //           sx={{
                //             fontSize: "0.7rem",
                //             height: "22px",
                //             bgcolor: "#ffd8de",
                //             color: "rgb(158,64,64)",
                //             borderRadius: "5px",
                //             fontWeight: 600,
                //           }}
                //         />
                //       ) : null}

                //       {job.workMode ? (
                //         <Chip
                //           label={job.workMode}
                //           size="small"
                //           sx={{
                //             fontSize: "0.7rem",
                //             height: "22px",
                //             bgcolor: "#f6d8ff",
                //             color: "#72037c",
                //             borderRadius: "5px",
                //             fontWeight: 600,
                //           }}
                //         />
                //       ) : null}
                //     </Stack>
                //   </Box>

                //   <Box
                //     sx={{
                //       display: "flex",
                //       alignItems: "center",
                //       gap: 2,
                //       position: "absolute",
                //       bottom: 23,
                //       right: 15,
                //     }}
                //   >
                //     <Typography
                //       sx={{
                //         fontSize: ".9rem",
                //         fontWeight: 400,
                //         color: "#727272",
                //       }}
                //     >
                //       {completed} of 11 completed
                //     </Typography>

                //     <LinearProgress
                //       variant="determinate"
                //       value={(completed / 11) * 100}
                //       sx={{
                //         width: 170,
                //         height: 8,
                //         borderRadius: 5,
                //         bgcolor: "#ECECEC",

                //         "& .MuiLinearProgress-bar": {
                //           borderRadius: 5,
                //           bgcolor: "#6C3CF0",
                //         },
                //       }}
                //     />
                //   </Box>
                // </Card>

                <Card
                  sx={{
                    bgcolor: "#ffffff",
                    height: "auto",
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
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      width: "100%",
                      display: "flex",
                      borderBottom: "1px #ddd solid",
                    }}
                  >
                    {/* Avatar */}
                    <Box
                      sx={{
                        height: "100%",
                        width: "6rem",
                        display: "flex",
                        justifyContent: "center",
                        boxSizing: "border-box",
                        py: "0.7rem",
                      }}
                    >
                      <Avatar
                        src={job.createdBy?.companyLogo?.url}
                        sx={{
                          width: "4.5rem",
                          height: "4.5rem",
                          borderRadius: "6px",
                          border: "1px solid #ebebebca",
                        }}
                      />
                    </Box>

                    {/* right content */}
                    <Box
                      sx={{
                        height: "auto",
                        flex: 1,
                        boxSizing: "border-box",
                        py: "0.7rem",
                        px: 0.5,
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
                            fontSize: "0.98rem",
                            height: "22px",
                            bgcolor: "#e1e1e1",
                            color: "rgb(98, 98, 98)",
                            borderRadius: "2px",
                            fontWeight: 600,
                            fontFamily: "monospace",
                            width: "fit-Content",
                          }}
                        />
                      </Stack>

                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          fontFamily: "monospace",
                          color: "#02020dcc",
                        }}
                      >
                        {job?.title || "-----------------------"}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          fontFamily: "monospace",
                          color: "#02020d93",
                        }}
                      >
                        {job?.location || "---------------"}
                      </Typography>

                      <Stack direction="row" spacing={1.5}>
                        {job.jobType ? (
                          <Chip
                            label={job.jobType}
                            size="small"
                            sx={{
                              fontSize: "0.8rem",
                              height: "22px",
                              bgcolor: "#d8f3ff",
                              color: "#013f8f",
                              borderRadius: "5px",
                              fontWeight: 600,
                              fontFamily: "monospace",
                            }}
                          />
                        ) : null}

                        {job.experienceLevel ? (
                          <Chip
                            label={job.experienceLevel}
                            size="small"
                            sx={{
                              fontSize: "0.8rem",
                              height: "22px",
                              bgcolor: "#ffd8de",
                              color: "rgb(158, 30, 30)",
                              borderRadius: "5px",
                              fontWeight: 600,
                              fontFamily: "monospace",
                            }}
                          />
                        ) : null}

                        {job.workMode ? (
                          <Chip
                            label={job.workMode}
                            size="small"
                            sx={{
                              fontSize: "0.8rem",
                              height: "22px",
                              bgcolor: "#f6d8ff",
                              color: "#72037c",
                              borderRadius: "5px",
                              fontWeight: 600,
                              fontFamily: "monospace",
                            }}
                          />
                        ) : null}
                      </Stack>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      height: "3.5rem",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      px: 1,
                      alignItems:"center",boxSizing:"border-box"
                    }}
                  >
                    <Chip
                      label={`Last saved ${formatDistanceToNow(
                        new Date(job.updatedAt),
                        { addSuffix: true },
                      )}`}
                      
                      sx={{
                        fontSize: "0.7rem",
                        width: "fit-content", 
                        color: "#666666",
                        fontWeight: 600,
                        borderRadius: "5px",
                        fontFamily:"monospace"
                      }}
                    />

                    <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.3,
                      flexDirection:"column"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: ".7rem",
                        fontWeight: 600,
                        color: "#727272",
                        fontFamily:"monospace"
                      }}
                    >
                      {completed} of 11 completed
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={(completed / 11) * 100}
                      sx={{
                        width: 110,
                        height: 8,
                        borderRadius: 2,
                        bgcolor: "#ECECEC",

                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          bgcolor: "#6C3CF0",
                        },
                      }}
                    />
                  </Box>




                  </Box>
                </Card>
              ) : (
                <Card
                  sx={{
                    bgcolor: "#ffffff",
                    height: "auto",
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
                    flexDirection: "column",
                  }}
                >
                  <MyJobDetailsModal
                    open={openMyJobDetailsModal}
                    setOpen={setMyJobDetailsModal}
                    jobInfo={job}
                  />
                  <Box
                    sx={{
                      bgcolor: "#ffffff",
                      height: "auto",
                      borderBottom: "1px solid #ddddddb9",
                      width: "100%",
                      display: "flex",
                      boxSizing: "border-box",
                      boxShadow: "none",
                    }}
                  >
                    {/* Avatar */}
                    <Box
                      sx={{
                        height: "100%",
                        width: "6rem",
                        display: "flex",
                        justifyContent: "center",
                        boxSizing: "border-box",
                        py: "0.7rem",
                      }}
                    >
                      <Avatar
                        src={job.createdBy?.companyLogo?.url}
                        sx={{
                          width: "4.5rem",
                          height: "4.5rem",
                          borderRadius: "6px",
                          border: "1px solid #ebebebca",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        height: "auto",
                        flex: 1,
                        boxSizing: "border-box",
                        py: "0.7rem",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontFamily: "monospace",
                          color: "#120328da",
                          position: "relative",
                        }}
                      >
                        {job?.title || "-----------------------"}
                        {/* MoreVertIcon - Menu  */}
                        <MenuCard
                          JobId={job?._id}
                          Status={job?.status}
                          jobInfo={job}
                          openMyJobDetailsModal={openMyJobDetailsModal}
                          setMyJobDetailsModal={setMyJobDetailsModal}
                        />
                      </Typography>

                      <Box
                        sx={{ display: "flex", gap: 0.8, alignItems: "center" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            fontFamily: "monospace",
                            color: "#02020d7a",
                          }}
                        >
                          {job?.location || "---------------"}
                        </Typography>
                      </Box>

                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={job?.jobType}
                          size="small"
                          sx={{
                            fontSize: "0.88rem",
                            height: "22px",
                            bgcolor: "#d8f3ff",
                            borderRadius: "5px",
                            color: "#013578bf",
                            fontWeight: 600,
                            fontFamily: "monospace",
                          }}
                        />

                        <Chip
                          label={job?.workMode}
                          size="small"
                          sx={{
                            fontSize: "0.88rem",
                            height: "22px",
                            bgcolor: "#f6d8ff",
                            color: "#6f0779ba",
                            borderRadius: "5px",
                            fontWeight: 600,
                            fontFamily: "monospace",
                          }}
                        />
                      </Stack>
                    </Box>
                  </Box>

                  {/* fotor */}

                  <Box
                    sx={{
                      bgcolor: "#dedcdc65",
                      height: "auto",

                      width: "100%",

                      display: "flex",
                      boxSizing: "border-box",
                      boxShadow: "none",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        boxSizing: "border-box",
                        py: 0.3,
                        height: "auto",
                        width: "100%",
                        bgcolor: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Chip
                        label={`• ${job.status}`}
                        sx={{
                          fontSize: "1rem",
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
                          borderRadius: "5px",
                          fontWeight: 600,
                          fontFamily: "monospace",
                        }}
                      />
                      <Box
                        sx={{
                          height: "fit-content",
                          width: "fit-content",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: 600, fontFamily: "system-ui" }}
                        >
                          {job.applicationsCount}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#04020e9a",
                            fontSize: "1rem",
                            fontFamily: "monospace",
                          }}
                        >
                          Applicants
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "fit-content",
                          width: "fit-content",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: 600, fontFamily: "system-ui" }}
                        >
                          {job.jobViews}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#04020e9a",
                            fontSize: "1rem",
                            fontFamily: "monospace",
                          }}
                        >
                          Views
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        height: "3rem",
                        width: "100%",
                        bgcolor: "#fff",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Chip
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              id="Calendar-Mark--Streamline-Solar"
                              height="18"
                              width="18"
                              style={{ marginBottom: "0.2rem" }}
                            >
                              <desc>
                                Calendar Mark Streamline Icon:
                                https://streamlinehq.com
                              </desc>
                              <g id="Line Duotone/Time/Calendar Mark">
                                <path
                                  id="Vector"
                                  stroke="#737373"
                                  stroke-linecap="round"
                                  d="M7 4V2.5"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  id="Vector_2"
                                  stroke="#737373"
                                  stroke-linecap="round"
                                  d="M17 4V2.5"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  id="Vector_3"
                                  stroke="#737373"
                                  stroke-linecap="round"
                                  d="M2 9h20"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  id="Vector_4"
                                  stroke="#000000a2"
                                  d="M2 12c0 -3.77124 0 -5.65685 1.17157 -6.82843C4.34315 4 6.22876 4 10 4h4c3.7712 0 5.6569 0 6.8284 1.17157C22 6.34315 22 8.22876 22 12v2c0 3.7712 0 5.6569 -1.1716 6.8284C19.6569 22 17.7712 22 14 22h-4c-3.77124 0 -5.65685 0 -6.82843 -1.1716C2 19.6569 2 17.7712 2 14v-2Z"
                                  stroke-width="1.5"
                                ></path>
                                <path
                                  id="Vector_5"
                                  stroke="#000000b6"
                                  d="M16.5 18c0.8284 0 1.5 -0.6716 1.5 -1.5s-0.6716 -1.5 -1.5 -1.5 -1.5 0.6716 -1.5 1.5 0.6716 1.5 1.5 1.5Z"
                                  stroke-width="1.5"
                                ></path>
                              </g>
                            </svg>

                            {formatDistanceToNow(new Date(job.createdAt), {
                              addSuffix: true,
                            })}
                          </Box>
                        }
                        sx={{
                          fontSize: "0.9rem",
                          height: "30px",
                          width: "fit-Content",
                          bgcolor: "#e4e4e4",
                          color: "#515151",
                          fontWeight: 500,
                          borderRadius: "5px",
                          fontFamily: "monospace",
                        }}
                      />

                      <Button
                        onClick={() => {
                          setMyJobDetailsModal(true);
                        }}
                        sx={{
                          height: "30px",
                          color: "#5911b1",
                          display: "flex",
                          border: "1px solid #5911b1d4",
                          borderRadius: "8px",
                          alignItems: "center",
                          gap: 1.2,
                          textTransform: "none",
                          fontFamily: "monospace",
                          fontWeight: 600,
                        }}
                      >
                        View Job
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          id="Line-Arrow-Right-1--Streamline-Sharp-Remix"
                          height="24"
                          width="24"
                        >
                          <desc>
                            Line Arrow Right 1 Streamline Icon:
                            https://streamlinehq.com
                          </desc>
                          <g id="Remix/Interface Essential/line-arrow-right-1--arrow-right-keyboard">
                            <path
                              id="Union"
                              fill="#5911b1d4"
                              fill-rule="evenodd"
                              d="m23.1173 11.1162 -8 -7.99999 -1.7678 1.76777 5.8661 5.86612 -19.214623437 0 0 2.5 19.214623437 0 -5.8661 5.8661 1.7678 1.7678 8 -8 0.8839 -0.8839 -0.8839 -0.8839Z"
                              clip-rule="evenodd"
                              stroke-width="0.5"
                            ></path>
                          </g>
                        </svg>
                      </Button>
                    </Box>
                  </Box>
                </Card>
              )}
            </Box>
          </>
        );
      })}
    </>
  );
}

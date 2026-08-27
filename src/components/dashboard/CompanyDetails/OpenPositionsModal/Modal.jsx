import {
  Typography,
  Box,
  Button,
  Modal,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";

import { LuWorkflow } from "react-icons/lu";
import { MdChevronRight } from "react-icons/md";

import Pagination from "@mui/material/Pagination";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchAndFilter from "./CardFilterAndSearch";

export default function ModalOpenPositions({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "95%",
            width: "60%",
            bgcolor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "20%",
              width: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              px: "1rem",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-between",
              py: 1.2,
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",
                alignContent: "center",
                width: "100%",
                height: "fitContent",
                display: "flex",
                gap: 1,
              }}
            >
              <Avatar
                src="https://res.cloudinary.com/dzppmepd9/image/upload/v1786651831/profile-images/rppnczrtt7z2zdvjehe0.png"
                sx={{
                  height: "3.5rem",
                  width: "3.5rem",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                  border: "1px solid #ddd",
                  p: 1,
                }}
              />

              <Box
                sx={{
                  boxSizing: "border-box",
                  alignContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "system-ui",
                    color: "#010318d0",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Google Open Positions
                </Typography>

                <Typography
                  sx={{ fontFamily: "monospace", color: "#0205226f" }}
                >
                  Explore all current job openings at Google.{" "}
                </Typography>
              </Box>
            </Box>

            <SearchAndFilter />
          </Box>

          <Box
            sx={{
              height: "72%",
              width: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
              px: 2,
              py: 1,
            }}
          >
            <Box
              sx={{
                height: "5rem",
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid #ddd",
                borderRadius: "10px",
                display: "flex",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "40%",
                  boxSizing: "border-box",

                  px: 1.5,
                  placeContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    color: "#00001bc5",
                  }}
                >
                  Frontend Devloper
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{ fontSize: "0.9rem", color: "#575757" }}
                    />

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: "#010115a7",
                        textAlign: "center",
                      }}
                    >
                      Montain View, CA
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <LuWorkflow sx={{ fontSize: "0.9rem", color: "#575757" }} />

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: "#0101159c",
                        textAlign: "center",
                      }}
                    >
                      Remote
                    </Typography>
                  </Box>
                </Stack>
              </Box>

              <Box
                sx={{
                  height: "100%",
                  width: "30%",
                  boxSizing: "border-box",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Chip
                  size="small"
                  sx={{
                    bgcolor: "#a4c5ffa8",
                    color: "#221c73c3",
                    fontWeight: 600,
                    borderRadius: "5px",
                    fontFamily: "monospace",
                  }}
                  label={"Full-Time"}
                />

                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    color: "#010215b2",
                  }}
                >
                  80k-110k
                </Typography>
              </Box>

              <Box
                sx={{
                  height: "100%",
                  width: "30%",
                  boxSizing: "border-box",
                 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    color: "#010215b2",
                  }}
                >
                  2 days ago 
                </Typography>

                <Button
                  sx={{
                    border: "1px solid #b3b9ff",
                    color: "#3867ff",
                    textTransform: "none",
                    fontFamily: "monospace",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  View Job <MdChevronRight />
                </Button>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              height: "10%",
              width: "100%",

              overflow: "hidden",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={2}>
              <Pagination
              // onChange={handleChange}
              // count={state.JobInfo?.totalPages}
              />
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

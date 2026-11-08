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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { millify } from "millify";
import { useNavigate } from "react-router-dom";
import { formatRelative } from "date-fns";
import LoadingList from "./LoadingList";
import { GetCompaniesJobs } from "../../../../../logic/api/job/Job";

export default function ModalOpenPositions({ open, setOpen }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const { CompanyId } = useParams();

  const [felterData, setFelterData] = useState({
    page: 1,
    search: "",
    sort: "Newest First",
    CompanyId: CompanyId,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFelterData((prev) => {
        if (prev.search === search) return prev;

        return {
          ...prev,
          search: search.trim(),
          page: 1,
        };
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const fetchCompany = async () => {
    setLoading(true);

    try {
      const data = await GetCompaniesJobs(felterData);
      setList(data);

      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  useEffect(() => {
    fetchCompany();
  }, [felterData]);

  const handleClose = () => {
    setOpen(false);
  };

  const openJob = async (e) => {
    const jobId = e.currentTarget.dataset.id;
    navigate(`/Dashboard/Jobs/Details/${jobId}`);
  };

  const handleChange = (event, value) => {
    setFelterData((prev) => ({ ...prev, page: value }));
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
            width: "96%",
            bgcolor: "#fbf4fc",
            borderRadius: "10px",
            overflow: "hidden",
            boxSizing: "border-box",
            outline: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* header section */}
          <Box
            sx={{
              height: "fit-content",
              width: "100%",
              overflow: "hidden",
              boxSizing: "border-box",
              px: "0.5rem",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              py: 1,
              gap: 1,
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
                  border: "1px solid #dddddd",
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
                    fontFamily: "monospace",
                    color: "#010318b5",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  Google Open Positions
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0205226f",
                    fontSize: "0.9rem",
                  }}
                >
                  Explore all current job openings at Google.
                </Typography>
              </Box>
            </Box>

            <SearchAndFilter search={search} setSearch={setSearch} />
          </Box>

          {/* jobs list section  */}
          <Box
            sx={{
              height: "72%",
              width: "100%",

              boxSizing: "border-box",
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
              px: 1,
              py: 1,
              overflow: "scroll",
            }}
          >
            {/* list jobs */}

            {loading ? (
              <LoadingList />
            ) : (
              list?.jobs?.map((item) => (
                <Box
                  key={item?._id}
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    boxSizing: "border-box",
                    border: "1px solid #ecd7f9a3",
                    borderRadius: "8px",
                    display: "flex",
                    mb: 1,
                    bgcolor: "#ffff",py:1.2
                  }}
                >
                  {/* right */}
                  <Box
                    sx={{
                      height: "100%",
                      flex: 1,
                      boxSizing: "border-box",
                      px: 0.8,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#00001bb8",
                        fontFamily: "monospace",
                      }}
                      title={item.title}
                    >
                      {item?.title?.slice(0, 20)}
                      {item?.title?.length > 20 ? "..." : null}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontFamily: "monospace",
                          fontWeight: 600,
                          color: "#010115a7",
                          textAlign: "center",
                        }}
                      >
                        {item?.location}
                      </Typography>

                      
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <LuWorkflow
                         color="#010115a7"
                         size={"0.8rem"}
                        />

                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            fontFamily: "monospace",
                            fontWeight: 600,
                            color: "#0101159c",
                            textAlign: "center",
                          }}
                        >
                          {item?.workMode}
                        </Typography>
                      </Box>
                    </Box>
                    
                     <Box
                    sx={{
                      width: "fit-content",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",gap:1
                    }}
                  >
                    <Chip
                      size="small"
                      sx={{
                        bgcolor: "#a4c5ffa8",
                        color: "#1845c4ee",
                        fontWeight: 600,
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                      }}
                      label={item?.jobType}
                    />
                    <Chip
                      size="small"
                      sx={{
                        bgcolor: "#e4c8f9a8",
                        color: "#6a1ca5d3",
                        fontWeight: 600,
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "0.7rem",
                      }}
                      label={`${millify(item.maxSalary)}-${millify(item.minSalary)}
                      ${item.salaryCurrency}`}
                    />

                  </Box>
                  </Box>

                  {/* left */}

                  <Box
                    sx={{
                     
                      width: "6rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      px: 0.6,
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: "#010215b2",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 48 48"
                        id="Calendar-Mark--Streamline-Plump"
                        height="12"
                        width="12"
                      >
                        <desc>
                          Calendar Mark Streamline Icon:
                          https://streamlinehq.com
                        </desc>
                        <g id="calendar-mark--calendar-date-day-month-mark">
                          <path
                            id="Vector 1380"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M22 25h4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector 1381"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M32 25h4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector 1382"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 25h-4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector 1383"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M22 35h4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector 1384"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M32 35h4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector 1385"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 35h-4"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Subtract"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.003 8.563c-1.137 0.11 -2.12 0.225 -2.952 0.336 -2.199 0.293 -3.877 1.948 -4.192 4.144C3.451 15.887 3 20.41 3 26.5c0 6.09 0.451 10.614 0.859 13.458 0.315 2.196 1.993 3.85 4.192 4.144 3.13 0.417 8.38 0.898 15.949 0.898 7.568 0 12.818 -0.48 15.949 -0.898 2.199 -0.293 3.877 -1.948 4.192 -4.144 0.408 -2.844 0.859 -7.368 0.859 -13.458 0 -6.089 -0.451 -10.613 -0.859 -13.457 -0.315 -2.196 -1.993 -3.851 -4.192 -4.144a82.173 82.173 0 0 0 -2.952 -0.336"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Subtract_2"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M29 8.074A164.037 164.037 0 0 0 24 8c-1.796 0 -3.462 0.027 -5 0.074"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M29.013 9.27c0.043 2.08 1.409 3.694 3.489 3.726a32.976 32.976 0 0 0 0.996 0c2.08 -0.032 3.446 -1.646 3.489 -3.726a61.262 61.262 0 0 0 0 -2.54c-0.043 -2.08 -1.409 -3.694 -3.489 -3.726a32.444 32.444 0 0 0 -0.996 0c-2.08 0.032 -3.446 1.646 -3.489 3.726a61.262 61.262 0 0 0 0 2.54Z"
                            stroke-width="3"
                          ></path>
                          <path
                            id="Vector_2"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.013 9.27c0.043 2.08 1.409 3.694 3.489 3.726a32.976 32.976 0 0 0 0.996 0c2.08 -0.032 3.446 -1.646 3.489 -3.726a61.262 61.262 0 0 0 0 -2.54c-0.043 -2.08 -1.409 -3.694 -3.489 -3.726a32.444 32.444 0 0 0 -0.996 0c-2.08 0.032 -3.446 1.646 -3.489 3.726a61.262 61.262 0 0 0 0 2.54Z"
                            stroke-width="3"
                          ></path>
                        </g>
                      </svg>
                      {formatRelative(new Date(item.createdAt), new Date())}
                    </Typography>

                    <Button
                      data-id={item._id}
                      onClick={openJob}
                      sx={{
                        border: "1px solid #8856dde4",
                        color: "#4f0fbce4",
                        fontWeight: 600,
                        textTransform: "none",
                        fontFamily: "monospace",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                        fontSize: "0.65rem",
                        borderRadius: "10px",
                      }}
                    >
                      View Job
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        id="Arrow-Forward-Ios-Fill--Streamline-Outlined-Fill-Material"
                        height="14"
                        width="14"
                      >
                        <desc>
                          Arrow Forward Ios Fill Streamline Icon:
                          https://streamlinehq.com
                        </desc>
                        <path
                          fill="#4f0fbce4"
                          d="m7.59995 21.9502 -1.4 -1.425 8.575 -8.575 -8.575 -8.575005 1.4 -1.425 10 10.000005 -10 10Z"
                          stroke-width="0.5"
                        ></path>
                      </svg>
                    </Button>
                  </Box>

                  {/* left info */}
                  {/* <Box
                    sx={{
                      height: "100%",
                      width: "40%",
                      boxSizing: "border-box",
                      px: 1,
                      placeContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                       
                        fontWeight: 600,
                        color: "#00001bb8",
                      }}
                      title={item.title}
                    >
                      {item?.title?.slice(0, 20)}
                      {item?.title?.length > 20 ? "..." : null}
                    </Typography>

                   
                      <Box
                        sx={{
                          display: "flex",
                          
                         
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.6rem",
                            fontFamily: "monospace",
                            fontWeight: 600,
                            color: "#010115a7",
                            textAlign: "center",
                          }}
                        >
                          {item?.location}
                        </Typography>
                      </Box>

                       
              
                  </Box> */}

                  {/* center info */}
                  {/* <Box
                    sx={{
                      height: "100%",
                      width: "30%",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexDirection:'column'
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
                        fontSize: "0.6rem",
                      }}
                      label={item?.jobType}
                    />

                    <Typography
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: "#010215b2",
                      }}
                    >
                      {millify(item.maxSalary)}-{millify(item.minSalary)}{" "}
                      {item.salaryCurrency}
                    </Typography>
                       <Typography
                          sx={{
                            fontSize: "0.6rem",
                            fontFamily: "monospace",
                            fontWeight: 600,
                            color: "#0101159c",
                            textAlign: "center",
                          }}
                        >
                          {item?.workMode}
                        </Typography>
                  </Box> */}

                  {/* right info */}
                  {/* <Box
                    sx={{
                      height: "100%",
                      width: "30%",
                      boxSizing: "border-box",
                  
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.6rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: "#010215b2",
                      }}
                    >
                      {formatRelative(new Date(item.createdAt), new Date())}
                    </Typography>

                    <Button
                      data-id={item._id}
                      onClick={openJob}
                      sx={{
                        border: "1px solid #b3b9ff",
                        color: "#3867ffe4",
             
                        textTransform: "none",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-between",
                       minWidth:'fit-content'
                      }}
                    >
                     <MdChevronRight />
                    </Button>
                  </Box> */}
                </Box>
              ))
            )}
          </Box>

          {/* pagination section */}
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
              <Pagination onChange={handleChange} count={list?.totalPages} />
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

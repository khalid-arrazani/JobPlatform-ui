import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import CardCompany from "./CardCompany";

import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { getJobID } from "../../../../logic/api/job/Job";




export default function JobDetailsMobile() {
  const navigate = useNavigate();

  const { JobId } = useParams();
  
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobById();
  }, []);

  const fetchJobById = async () => {
    setLoading(true);
    try {
      const jobById = await getJobID(JobId);
      setJob(jobById);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  const fetchJobByIdWithoutReload = async () => {
    try {
      const jobById = await getJobID(JobId);
      setJob(jobById);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              flex: 1,
              background: "#f7f7f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              pt: 1,
              boxSizing:"border-box"
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                background: "#f7f7f7",

               
              }}
            >
              <Box
              sx={{

                width: "100%",
                background: "#f7f7f7",
                display:"flex"
               
              }}
            >
              <Button
                startIcon={<KeyboardBackspaceIcon />}
                onClick={() => navigate(-1)}
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#ae2eb0ec",
                  borderRadius: "12px",
                  px: 1.5,

                  mb: 0.8,
                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "rgba(139, 92, 246, 0.08)",
                    color: "#f02bf3dc",
                    transform: "translateX(-3px)",
                  },
                  display: "flex",
                  alignContent: "center",
                }}
              >
                Go Back
              </Button>

            </Box>

              <CardCompany jobInfo={job} JobId={JobId} fetchJobById={fetchJobByIdWithoutReload} />
              {/* <DescriptionSection jobInfo={job} /> */}
              {/* <AbouttheCompany jobInfo={job} /> */}
              {/* <Divider /> */}
            </Box>

            
          </Box>
        </Box>
      )}
    </>
  );
}

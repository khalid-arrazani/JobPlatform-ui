import { Box, Avatar, Typography, Chip } from "@mui/material";
import { useApply } from "../../../../logic/context/ApplyContext";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Person2Icon from "@mui/icons-material/Person2";

export default function Profile() {
  const { Profile } = useApply();
  console.log(Profile);

  return (
    <>
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
        style={{transition:"all  none"}}
      >

        {!Profile ? 

        <Box
          sx={{
            boxSizing: "border-box",
            border: "1px #ddd dashed",
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            px: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              border: "1px  dashed #ddd ",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              display:"flex",justifyContent:"center",alignItems:"center"
            }}
          >
            <Person2Icon  sx={{width:"80%",height:"80%",color:"#3b3b3b"}}/>
          </Box>

          <Typography
            sx={{
              fontSize: "1.2rem",
              fontFamily: "monospace",
              fontWeight: 600,
              color: "#00010ec9",
              bt: 1,
              textAlign: "center",
            }}
          >
            No profile selected
          </Typography>

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontFamily: "monospace",
              fontWeight: 600,
              color: "#00010eac",
              bt: 1,
              textAlign: "center",
            }}
          >
            Select an applicant from the list to view their profile details
          </Typography>
        </Box>:

        <Box
          sx={{
            boxSizing: "border-box",
            border: "1px #ddd dashed",
            height: "100%",
            width: "100%",
            borderRadius: "15px",
            px: 1,transition:"none"
          }}

          
        >


          <Box
            sx={{
              height: "37%",
              width: "100%",
              borderBottom: "1px dashed #ddd",
              placeItems: "center",
              boxSizing: "border-box",
              p: 1,
            }}
          >
            <Avatar src={Profile?.profile?.ProfileImage?.url} sx={{ height: "7rem", width: "7rem" }} />

            <Typography
              sx={{
                fontSize: "1.6rem",
                fontFamily: "system-ui",
                fontWeight: 600,
                color: "#00010ed0",
                bt: 1,
              }}
            >
              {Profile?.profile?.fullName}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "monospace",
                fontWeight: 600,
                color: "#00010eac",
                bt: 1,
                textAlign: "center",
              }}
            >
              {Profile?.profile?.headline?.length > 60
                ? `${Profile.profile.headline.slice(0, 60)}...`
                : Profile?.profile?.headline}
            </Typography>
          </Box>

          <Box
            sx={{
              height: "63%",
              width: "100%",
              boxSizing: "border-box",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
              gap: 2,
              justifyContent: "",
            }}
          >
            <Chip
              label={`• ${Profile?.status}`}
              sx={{
                fontSize: "1.2rem",
                alignItems: "center",
                borderRadius: "8px",
                fontFamily: "monospace",
                color:
                  Profile?.status == "Pending"
                    ? "#F59E0B"
                    : Profile?.status == "Accepted"
                      ? "#10B981"
                      : Profile?.status == "Interview"
                        ? "#8B5CF6"
                        : Profile?.status == "Rejected"
                          ? "#EF4444"
                          : Profile?.status == "Under review"
                            ? "#3B82F6"
                            : null,

                bgcolor:
                  Profile?.status == "Pending"
                    ? "#FEF3C7"
                    : Profile?.status == "Accepted"
                      ? "#D1FAE5"
                      : Profile?.status == "Interview"
                        ? "#8a5cf620 "
                        : Profile?.status == "Rejected"
                          ? "#FEE2E2"
                          : Profile?.status == "Under review"
                            ? "#DBEAFE"
                            : null,
                fontWeight: 600,
                mb: 1,
              }}
            />

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontFamily: "monospace",
                fontWeight: 600,
                color: "#00010eac",
                bt: 1,
              }}
            >
              📍{" "}
              {Profile?.profile?.location?.length > 35
                ? `${Profile.profile.location.slice(0, 35)}...`
                : Profile?.profile?.location}
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
              ✉{" "}
              {Profile?.applicant?.email?.length > 35
                ? `${Profile.applicant.email.slice(0, 35)}...`
                : Profile?.applicant?.email}
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
              📞 {Profile?.applicant?.number || "----------"}
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eaf",
                  pb: 0.5,
                  pl: 0.1,
                }}
              >
                🛠 Skills
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010eac",
                  bt: 1,
                  display: "flex",
                  gap: 1,
                }}
              >
                {Profile?.profile?.skills.slice(0, 3).map((i) => (
                  <Chip label={`✔ ${i} `} />
                ))}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  fontWeight: 600,
                  color: "#00010ed4",
                  pb: 0.5,
                  pl: 0.1,
                }}
              >
                💼 Career Timeline
              </Typography>

              {Profile?.profile?.experience.slice(0, 3).map((i) => (


                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "monospace",
                    fontWeight: 600,
                    color: "#00010eac",
                    bt: 1,
                  }}
                >
                  {i.period}  |  {i.title} 
                </Typography>


              ))}

             
            </Box>
          </Box>



        </Box>
}

      </Box>
    </>
  );
}

import { Typography } from "@mui/material";

export default function CompleteProfileDs() {
  return (
    <>
      <div
        style={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "1rem",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            fontWeight: "600",
            color: "#0e0d0dcb",
            fontSize: "1.7rem",
          }}
        >
          Complete Your Profile
        </Typography>
        <Typography
          variant="h7"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            fontWeight: "500",
            color: "#0e0d0dcb",
            pt: "0.5rem",
          }}
        >
          Let's create your company profile. Complete your profile
          to post jobs, attract top talent and grow your team.
        </Typography>
      </div>
    </>
  );
}

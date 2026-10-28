import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
} from "@mui/material";
import logoTitle from "../../../../assets/Logo/logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";



import { Button} from "@mui/material";
import MainList from "./mainList";
import { useContext, useState } from "react";

import EditInfoModal from "./Edit Profile Info/EditInfoModal";
import UploadProfilePhoto from "./UploadProfilePhoto";
import { ProfileContext } from "../../../../logic/context/profileContext";
import Info from "./InfoProfile/Info";
import More_Info from "./InfoProfile/More Info";

import About_Me from "./InfoProfile/About Me";
import Experience from "./InfoProfile/Experience";
import Education from "./InfoProfile/Education";
import Social_Links from "./InfoProfile/Social Links";
import Skills from "./InfoProfile/Skills";
import Hiring_Focus from "./InfoProfile/Hiring Focus";
import Navbar from "../../../NavBar/Navbar";
import MobileNavbar from "../../../NavBar/variants/MobileNavbar/MobileNavbar";


export default function JobSeekerProfileMobile() {
  const { ...state } = useContext(ProfileContext);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [section , setSection] = useState("Profile")

  const onClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
         <Navbar/>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            overflow: "auto",
          }}
        >
          {/* header */}
          <Box
            sx={{
              width: "100%",
              height: "10rem",
              boxSizing: "border-box",
              mb: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "#9f55f3",
                width: "100%",
                height: "60%",
                backgroundImage:
                  "url(https://res.cloudinary.com/dzppmepd9/image/upload/v1782590346/AAYABATzAAgAAQAAAAAAAMRw-ZRQGUcDTI2otj46zINFIw_ajmzct.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              sx={{
                bgcolor: "#fff",
                width: "100%",
                height: "40%",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <UploadProfilePhoto />
              

              {/* open edit info modal */}
              <Button
                sx={{
                  border: "#75578d18 solid 1px",
                  position: "absolute",
                  right: 20,
                  textTransform: "none",
                  color: "#7e4da4",
                  borderRadius: "15px",
                  fontFamily: "monospace",
                  bgcolor: "#efa5ea25",
                  display: "flex",
                  gap: 1,
                }}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Edit Info
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="Pencil-Line--Streamline-Mingcute"
                  height="18"
                  width="18"
                >
                  <g fill="none" fill-rule="nonzero">
                    <path
                      d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
                      stroke-width="0.6667"
                    ></path>
                    <path
                      fill="#933dd5"
                      d="M10.69 2.01a2 2 0 0 1 2.732666666666667 -0.09l0.09599999999999999 0.09 0.47133333333333327 0.47133333333333327a2 2 0 0 1 0.09 2.7319999999999998l-0.09 0.09599999999999999L6.5153333333333325 12.784666666666666a1 1 0 0 1 -0.3746666666666667 0.236l-0.108 0.03133333333333333 -2.969333333333333 0.6853333333333333a0.6673333333333332 0.6673333333333332 0 0 1 -0.8133333333333332 -0.7253333333333334l0.013333333333333332 -0.07533333333333334 0.6846666666666665 -2.9699999999999998a1 1 0 0 1 0.1933333333333333 -0.3986666666666666l0.074 -0.08333333333333333L10.69 2.01Zm-0.47133333333333327 2.3566666666666665 -5.993333333333333 5.993333333333333 -0.424 1.8386666666666667 1.8386666666666667 -0.42466666666666664 5.993333333333333 -5.993333333333333 -1.4146666666666665 -1.4133333333333333Zm2.357333333333333 -1.414a0.6666666666666666 0.6666666666666666 0 0 0 -0.88 -0.05533333333333333l-0.06266666666666666 0.05533333333333333 -0.472 0.47133333333333327 1.4146666666666665 1.414 0.47133333333333327 -0.47133333333333327a0.6666666666666666 0.6666666666666666 0 0 0 0.05533333333333333 -0.88l-0.05533333333333333 -0.06266666666666666 -0.47133333333333327 -0.47133333333333327Z"
                      stroke-width="0.6667"
                    ></path>
                  </g>
                </svg>
              </Button>

              {/* modal edit info */}
              <EditInfoModal setOpen={setOpenModal} open={openModal} section={section} setSection={setSection} />
            </Box>
          </Box>

          {/* lower */}
          <Box sx={{ width: "100%", boxSizing: "border-box", px: 2 }}>
            {/* Info */}
            <Info state={state} />

            {/* more info */}
            <More_Info state={state} setSection={setSection} setOpenModal={setOpenModal}/>

            {/* Hiring_Focus */}
            <Hiring_Focus  state={state} setSection={setSection} setOpenModal={setOpenModal} />

            {/* About me */}
            <About_Me state={state} setSection={setSection} setOpenModal={setOpenModal}/>

            {/* Experience */}
            <Experience state={state} setSection={setSection} setOpenModal={setOpenModal}/>

            {/* Education */}
            <Education state={state} setSection={setSection} setOpenModal={setOpenModal}/>

            {/* Social Links */}
            <Social_Links state={state} setSection={setSection} setOpenModal={setOpenModal}/>

            {/* Skills */}
            <Skills state={state} setSection={setSection} setOpenModal={setOpenModal}/>

          </Box>

        </Box>
        


      </Box>
    </>
  );
}

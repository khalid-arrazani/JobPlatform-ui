import { Box, Card, Typography, Chip, Button, IconButton } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import ModeRoundedIcon from "@mui/icons-material/ModeRounded";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const banners = {
  1: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590367/AAYABATzAAgAAQAAAAAAAGzDZR5rStISQ1yERktnsWHnrA_erl1qv.jpg",
  2: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590346/AAYABATzAAgAAQAAAAAAAMRw-ZRQGUcDTI2otj46zINFIw_ajmzct.jpg",
  3: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590332/AAYABATzAAgAAQAAAAAAAOBT-FNgMROnShuQ5eB2HbQteg_teo4cw.jpg",
  4: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590315/AAYABATzAAgAAQAAAAAAAN6Y-o5SDacURUWv0_FkZRq6Gg_m1bqxn.jpg",
  5: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590304/AAYABATzAAgAAQAAAAAAAMj_3rfOgP3ZQmm5o1-2ZgmbRw_oftb6h.jpg",
  6: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590296/AAYABATzAAgAAQAAAAAAAMo80PNuvpeYSWmOieS4NeQYtQ_avkput.jpg",
  7: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590281/AAYABATzAAgAAQAAAAAAAMOHxFnK8NKlT9yznyIWepeV4w_fapjy3.jpg",
  8: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590217/AAYABATzAAgAAQAAAAAAALNrMPYvoAPPTSuRq_eKjwPCMg_pvk6kp.jpg",
  9: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590212/AAYABATzAAgAAQAAAAAAAQidZ4lo5ohrTLODXaijuiow2A_uubxgf.jpg",
  10: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590190/AAYABATzAAgAAQAAAAAAALL3VUK4GDT6TD2xvmyubQ6QGQ_cf8v3m.jpg",
  11: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590173/AAYABATzAAgAAQAAAAAAAAPFzwpvhXv8S5-B3JgetGKbiQ_svtqwc.jpg",
  12: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590134/AAYABATzAAgAAQAAAAAAAAIViJt5_fXtQleFNmpGiUR4Cw_mfzkyj.jpg",
  13: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590118/AAYABATzAAgAAQAAAAAAAL1oYjwyW3ZoR2WlcN4Df8JI4A_yre58r.jpg",
  14: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782589674/AAYABATzAAgAAQAAAAAAAL7g7rQW-r65R0ySdjUJAn_9mQ_aygqkz.jpg",
};

const Default =
  "https://res.cloudinary.com/dzppmepd9/image/upload/v1782729270/d0d06930-b1a4-4f49-b7ac-b5756e6e065c_xorvuv.png";



import ModalChoise from "./banner/ModalChoise";
import Modalbanner from "./banner/Modalbanner";
import CompanyBG from "./banner/UploadCompanyBG";

import { useState } from "react";

export default function CompanyHeader({ CompanyInfo ,fetchCompany}) {
  
  const [modalChoise , setModalChoise] = useState(false)

  const [modalBanner , setModalBanner] = useState(false)

  const [openEditor , setOpenEditor] = useState(false)

  const [image , setImage] = useState(false)







  let BG = null;
  if (CompanyInfo?.companyBackground?.backgroundType == "banner") {
    BG = `url(${banners[CompanyInfo?.companyBackground?.bannerId] || Default})`;
  } else if (CompanyInfo?.companyBackground?.backgroundType == "upload") {
    BG = `url(${CompanyInfo?.companyBackground?.url} )`;
  }


  return (
    <>
      <Box
        sx={{
          height: "46vh ",
          width: "100%",
          bgcolor: "#ffffff",
          borderRadius: "15px",
          overflow: "hidden",
        }} 
      >
        {/* banner */}
        <Box
          sx={{
            height: "65% ",
            width: "100%",
            bgcolor: "#544f4f",
            backgroundImage: `${BG} `,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            position: "relative",
          }}
        >
          <IconButton
            size="small"
            sx={{ position: "absolute", right: 0, bgcolor: "#f8f8f8", m: 2 }}
            onClick={()=>setModalChoise(true)}
          >
            <ModeRoundedIcon sx={{ color: "#060420de" }} />
          </IconButton>
        </Box>

        {/* this section for edit Banner  */}
        {/* ============================================================================== */}
           <ModalChoise open={modalChoise} setOpen={setModalChoise} banner={BG}  setBannerModal={setModalBanner} />

           <Modalbanner open={modalBanner} setOpen={setModalBanner} bannerid={CompanyInfo?.companyBackground?.bannerId} fetchCompany={fetchCompany} />

           <CompanyBG open={modalBanner} setOpen={setModalBanner} bannerid={CompanyInfo?.companyBackground?.bannerId} fetchCompany={fetchCompany} />

        {/* ============================================================================== */}

        <Box
          sx={{
            height: "35% ",
            flex: 1,
            bgcolor: "#ffffff",
            pl: "13.5vw",
            position: "relative",
            pt: "0.2vh",
          }}
        >
          <Button
            variant="contained"
            startIcon={<EditOutlinedIcon />}
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              textTransform: "none",
              borderRadius: "5px",
              px: 2.5,
              border: "solid 1px #b9b9b959",
              color: "#434343",
              fontFamily: "sans-serif",
              fontWeight: 500,
              py: 1,
              bgcolor: "#fdfdfd",
              boxShadow: "0 4px 12px rgba(203, 226, 249, 0.25)",
              "&:hover": {
                bgcolor: "#e2f4fa",
              },
            }}
          >
            Edit Company Profile
          </Button>

          {/* logo */}
          <Card
            sx={{
              height: "8.5rem ",
              width: "8.5rem",
              p: 0.5,
              boxSizing: "border-box",
              bgcolor: "#fffafa",
              position: "absolute",
              top: "-50%",
              left: "2%",
              borderRadius: "15px",
              cursor: "pointer",
              transition: "0.2s",
              TransformOrigin: "center",
              "&:hover": {
                top: "-53%",
                height: "8.7rem ",
                width: "8.7rem",
                bgcolor: "#e6e5e5",
              },
              "&:active": {
                top: "-49%",
                height: "8.7rem ",
                width: "8.7rem",
              },
            }}
          >
            <img
              style={{ width: "100%" }}
              src={CompanyInfo?.companyLogo?.url}
              alt=""
              srcset=""
            />
          </Card>

          {/* Company Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 600,
                color: "#2e2e2e",
                fontFamily: "-apple-system",
              }}
            >
              {CompanyInfo?.name}
            </Typography>

            <VerifiedIcon
              sx={{
                color: "#1a73e8",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          {/* Info Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              mt: 0.3,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <BusinessCenterOutlinedIcon
                sx={{ fontSize: "1rem", color: "#666" }}
              />
              <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                {CompanyInfo?.industry}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOnOutlinedIcon
                sx={{ fontSize: "1rem", color: "#666" }}
              />
              <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
                {CompanyInfo?.headquarters}
              </Typography>
            </Box>
          </Box>

          {/* Website */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 1,
            }}
          >
            <Chip
              icon={<LanguageOutlinedIcon />}
              size="small"
              label={CompanyInfo?.website}
              clickable
              sx={{
                color: "#1a73e8",
                fontWeight: 500,
                bgcolor: "#f5f8ff",
                border: "1px solid #dbe7ff",
                "& .MuiChip-icon": {
                  color: "#666",
                },
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

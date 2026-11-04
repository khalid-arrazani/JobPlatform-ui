import { Box, Card, Typography, Chip, Avatar } from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useNavigate } from "react-router-dom";

import { HiOutlineShieldCheck } from "react-icons/hi";
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

export default function CompanyHeader({ CompanyInfo }) {
  
  let BG = null;
  if (CompanyInfo?.companyBackground?.backgroundType == "banner") {
    BG = `url(${banners[CompanyInfo?.companyBackground?.bannerId] || Default})`;
  } else if (CompanyInfo?.companyBackground?.backgroundType == "upload") {
    BG = `url(${CompanyInfo?.companyBackground?.url} )`;
  }

  console.log(CompanyInfo);

    const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          height: "11rem",
          width: "100%",
          borderRadius: "20px",
          overflow: "hidden",
           
            backgroundImage: `${BG} `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display:"flex",
            alignItems:"end" 
        }}
      >
        {/* banner */}
        <Box
          sx={{
            height: "50% ",
            width: "100%",
            bgcolor: "#fffefe",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
           {/* logo */}
          <Card
            component="label"
            sx={{
              height: "5.2rem ",
              width: "5.2rem",

              boxSizing: "border-box",
              bgcolor: "#fffafa",
              position: "absolute",
              top: "-38%",
              left: "1rem",
              borderRadius: "15px",
              cursor: "pointer",
              transition: "0.2s",
              TransformOrigin: "center",
              
              "&:active": {
                top: "-35%",
                height: "5.2rem  ",
                width: "5.2rem ",
              },
              boxShadow:"0 1px 5px 5px #5351511e",p:"2px"
            }}
          >
            <img
              style={{ width: "100%" }}
              src={CompanyInfo?.companyLogo?.url}
              alt=""
              srcset=""
            />
          </Card>


          <Box sx={{height:"100%"}}></Box>
        </Box>

       
      </Box>
    </>
  );
}

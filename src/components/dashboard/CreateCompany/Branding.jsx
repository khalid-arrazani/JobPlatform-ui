import { Box, Typography, Button ,Modal } from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";

import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const banners = {
  1:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590367/AAYABATzAAgAAQAAAAAAAGzDZR5rStISQ1yERktnsWHnrA_erl1qv.jpg",
  2:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590346/AAYABATzAAgAAQAAAAAAAMRw-ZRQGUcDTI2otj46zINFIw_ajmzct.jpg",
  3:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590332/AAYABATzAAgAAQAAAAAAAOBT-FNgMROnShuQ5eB2HbQteg_teo4cw.jpg",
  4:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590315/AAYABATzAAgAAQAAAAAAAN6Y-o5SDacURUWv0_FkZRq6Gg_m1bqxn.jpg",
  5:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590304/AAYABATzAAgAAQAAAAAAAMj_3rfOgP3ZQmm5o1-2ZgmbRw_oftb6h.jpg",
  6:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590296/AAYABATzAAgAAQAAAAAAAMo80PNuvpeYSWmOieS4NeQYtQ_avkput.jpg",
  7:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590281/AAYABATzAAgAAQAAAAAAAMOHxFnK8NKlT9yznyIWepeV4w_fapjy3.jpg",
  8:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590217/AAYABATzAAgAAQAAAAAAALNrMPYvoAPPTSuRq_eKjwPCMg_pvk6kp.jpg",
  9:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590212/AAYABATzAAgAAQAAAAAAAQidZ4lo5ohrTLODXaijuiow2A_uubxgf.jpg",
  10:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590190/AAYABATzAAgAAQAAAAAAALL3VUK4GDT6TD2xvmyubQ6QGQ_cf8v3m.jpg",
  11:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590173/AAYABATzAAgAAQAAAAAAAAPFzwpvhXv8S5-B3JgetGKbiQ_svtqwc.jpg",
  12:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590134/AAYABATzAAgAAQAAAAAAAAIViJt5_fXtQleFNmpGiUR4Cw_mfzkyj.jpg",
  13:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782590118/AAYABATzAAgAAQAAAAAAAL1oYjwyW3ZoR2WlcN4Df8JI4A_yre58r.jpg",
  14:"https://res.cloudinary.com/dzppmepd9/image/upload/v1782589674/AAYABATzAAgAAQAAAAAAAL7g7rQW-r65R0ySdjUJAn_9mQ_aygqkz.jpg"
}

import CompanyLogo from "./UploadCompanyLogo";
import CompanyBG from "./UploadCompanyBG";

import { MdOutlineFileUpload } from "react-icons/md";
import { useState } from "react";

import ModalChoise from "./ModalChoise";
import Modalbanner from "./Modalbanner";

export default function Branding({setThirdInfo}) {
  
  const [ImageLogo, setImagLogo] = useState("");
  const [openImageLogo, openSetImagLogo] = useState("");

  const [ImageBG, setImagBG] = useState("");
  const [openImageBG, openSetImagBG] = useState("");

  const [previewLogo, setPreviewLogo] = useState("");
  const [previewBG, setPreviewBG] = useState("");

  const[choiseModal , setchoiseModal]= useState(false)

  const handlechoiseModal = () => {setchoiseModal(true)}

  const[bannerModal , setbannerModal]= useState(false)


  return (
    <>

     <ModalChoise choiseModal={choiseModal} setchoiseModal={setchoiseModal} setImagBG={setImagBG}  openSetImagBG={openSetImagBG} />
     
     <Modalbanner choiseModal={choiseModal} setchoiseModal={setchoiseModal} setImagBG={setImagBG}  openSetImagBG={openSetImagBG} />
      <Box
        sx={{
          height: "70%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderTop: "solid 0.5px #b3b0b069",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            borderRadius: "15px",
            overflow: "hidden",
            border: "solid 0.5px #b3b0b069",
            position: "relative",
          }}
        >
          {/* Company BG */}
          <Box
            sx={{
              width: "100%",
              height: "68%",
              bgcolor: "#ebebeb",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              backgroundImage: previewBG ? `url(${previewBG})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "40%",
              }}
            >
              {!previewBG ? (
                <>
                  <PanoramaOutlinedIcon
                    sx={{ width: "3rem", height: "3rem", color: "#0958c6" }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "-apple-system",
                      fontWeight: 700,
                      color: "#0b0b12d9",
                      m: 0,
                    }}
                  >
                    Upload cover background
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "-apple-system",
                      fontWeight: 700,
                      color: "#0a0a189f",
                      m: 0,
                      fontSize: "0.8rem",
                      p: 0,
                    }}
                  >
                    JBG or PNG. Recommended size 1920x600px. Max size 5MB
                  </Typography>
                </>
              ) : null}
            </Box>

            <Button
              component="label"
              onClick={handlechoiseModal}
              sx={{
                color: "#4a62ff",
                bgcolor: "#ffffff",
                p: 0.8,
                display: "flex",
                gap: 0.5,
                alignItems: "center",
                borderRadius: "5px",
                mt: 1.5,
                textTransform: "none",
              }}
            >
              <MdOutlineFileUpload
                style={{
                  width: "1.3rem",
                  height: "1.3rem",
                }}
              />
              Choose Image







            </Button>

            <CompanyBG
              openImageBG={openImageBG}
              openSetImagBG={openSetImagBG}
              ImageBG={ImageBG}
              previewBG={previewBG}
              setPreviewBG={setPreviewBG}


              setThirdInfo={setThirdInfo}
              
            />
          </Box>

          {/* Company lOGO */}
          <Box
            sx={{
              width: "100%",
              height: "32%",
              bgcolor: "#ffffff",
              position: "relative",
              borderTop: "solid 0.5px #b3b0b069",
            }}
          >
            <Box
              sx={{
                width: "8rem",
                height: "8rem",
                position: "absolute",
                top: -75,
                left: 25,
                p: 0,
                bgcolor: "#fff",
                borderRadius: "25px",
                border: "solid 0.5px #b3b0b069",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: previewLogo ? `url(${previewLogo})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {previewLogo ? null : (
                <DomainIcon
                  sx={{ width: "70%", height: "70%", color: "#b1afaf" }}
                />
              )}

              <Button
                component="label"
                size="small"
                sx={{
                  position: "absolute",
                  bottom: -9,
                  right: -20,
                  bgcolor: "#0033ffd0",
                  color: "#fff",
                  p: 1,
                  borderRadius: "50%",
                  minWidth: 0,
                  "&:hover": {
                    bgcolor: "#0033ff",
                  },
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setImagLogo(file);
                      openSetImagLogo(true);
                    }
                  }}
                />

                <PhotoCameraIcon
                  sx={{
                    width: "1.6rem",
                    height: "1.6rem",
                  }}
                />
              </Button>

              <CompanyLogo
                openImageLogo={openImageLogo}
                openSetImagLogo={openSetImagLogo}
                ImageLogo={ImageLogo}
                previewLogo={previewLogo}
                setPreviewLogo={setPreviewLogo}


                setThirdInfo={setThirdInfo}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

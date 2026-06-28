import validator from "validator";

import {
  Typography,
  Box,
  IconButton,
  Button,
  buttonBaseClasses,
  imageListClasses,
} from "@mui/material";
import Modal from "@mui/material/Modal";

import Left_side from "./left_Side";

import { useId, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import Header from "./header";
import ButtonB from "./ButtonB";
import CompanyInformationForm from "./CompanyInformationForm";
import MoreInfo from "./MoreInfo";
import Branding from "./Branding";

import gsap from "gsap";
import { GalleryHorizontal, ImageUp } from "lucide-react";
import { create_company } from "../../../logic/api/company/Company";

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

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function CreateCompanyPage() {
  const [err, setErr] = useState("");
  const [step, setStep] = useState(0);

  const [firstInfo, setFirstInfo] = useState({
    company_name: "",
    company_email: "",
    company_number: "",
    company_locatin: "",
    company_industry: "",
    company_webSite: "",
    company_about: "",
  });

  const [secondtInfo, setSecondInfo] = useState({
    company_linkdin: {
      platform: "linkdin",
      url: "",
    },
    company_facebook: {
      platform: "facebook",
      url: "",
    },
    company_instagram: {
      platform: "instagram",
      url: "",
    },
    company_x: {
      platform: "x",
      url: "",
    },
    company_benefit: [],
  });

  const [thirdtInfo, setThirdInfo] = useState({
    company_logo: "",
    company_banner: "",
  });
  console.log(thirdtInfo);

  const validatefirstInfo = () => {
    if (validator.isEmpty(firstInfo.company_name.trim())) {
      setErr("Invalid Company name");
      return false;
    }

    if (!validator.isEmail(firstInfo.company_email)) {
      setErr("Invalid email");
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_number.trim()) ||
      !validator.isMobilePhone(firstInfo.company_number, "any")
    ) {
      setErr("Invalid phone number");
      return false;
    }

    if (
      firstInfo.company_webSite &&
      !validator.isURL(firstInfo.company_webSite)
    ) {
      setErr("Invalid website");
      return false;
    }

    if (validator.isEmpty(firstInfo.company_industry.trim())) {
      setErr("Industry is required");
      return false;
    }

    if (validator.isEmpty(firstInfo.company_locatin.trim())) {
      setErr("Location is required");
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_about.trim()) ||
      !validator.isLength(firstInfo.company_about, { min: 20, max: 2000 })
    ) {
      setErr("About company must be between 20 and 2000 characters");
      return false;
    }
    return true;
  };

  const validatesecondtInfo = () => {
    if (
      secondtInfo.company_linkdin.url &&
      !validator.isURL(secondtInfo.company_linkdin.url)
    ) {
      setErr("Invalid LinkedIn URL");
      return false;
    }

    if (
      secondtInfo.company_facebook.url &&
      !validator.isURL(secondtInfo.company_facebook.url)
    ) {
      setErr("Invalid Facebook URL");
      return false;
    }

    if (
      secondtInfo.company_instagram.url &&
      !validator.isURL(secondtInfo.company_instagram.url)
    ) {
      setErr("Invalid Instagram URL");
      return false;
    }

    if (
      secondtInfo.company_x.url &&
      !validator.isURL(secondtInfo.company_x.url)
    ) {
      setErr("Invalid X URL");
      return false;
    }
    return true;
  };

  const gs = () => {
    const tl = gsap.timeline();

    tl.to(".snakbar", {
      y: -100,
      duration: 0.2,
      opacity: 1,
      yoyo: true,
      repeat: 1,
      repeatDelay: 2.3,
    });
  };

  const next = () => {
    if (!validatefirstInfo()) {
      gs();
    } else if (!validatesecondtInfo() && step == 1) {
      gs();
    } else if (step == 2) {
      handleCreateProfile();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  // this section for create company api
  const handleCreateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("name", firstInfo.company_name);
      formData.append("company_email", firstInfo.company_email);
      formData.append("company_number", firstInfo.company_number);
      formData.append("location", firstInfo.company_locatin);
      formData.append("industry", firstInfo.company_industry);
      formData.append("website", firstInfo.company_webSite);
      formData.append("description", firstInfo.company_about);

      formData.append(
        "socialLinks",
        JSON.stringify([
          secondtInfo.company_linkdin,
          secondtInfo.company_facebook,
          secondtInfo.company_instagram,
          secondtInfo.company_x,
        ]),
      );

      formData.append("benefits", JSON.stringify(secondtInfo.company_benefit));

      if (thirdtInfo.company_logo) {
        formData.append("companyLogo", thirdtInfo.company_logo);
      }

      if (thirdtInfo.company_banner) {
        formData.append("companyBackground", thirdtInfo.company_banner);
      }

      const data = await create_company(formData);

      console.log(data);

      // setSnackBar({
      //   open: true,
      //   message: data?.message,
      //   severity: "success",
      // });
      // navigate('/profile')
    } catch (error) {
      console.log(error.response.data);

      // setSnackBar({
      //   open: true,
      //   message: error.response.data?.message,
      //   severity: "error",
      // });
    }
  };
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [SelectedBanner, setSelectedBanner] = useState();

  console.log( SelectedBanner );

  return (
    <>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClose={handleClose}
        open={true}
      >
        <Box
          sx={{
            width: "60%",
            borderRadius: "10px",
            height: "50%",
            bgcolor: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "&:focus": {
              outline: "none",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "15%",
              bgcolor: "#ffffff",
              display: "flex",
              alignItems: "center",
              px: 2,
              boxSizing: "border-box",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#050318d2",
                fontFamily: "system-ui",
              }}
            >
              {" "}
              Banner
            </Typography>{" "}
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%", height: "60%", bgcolor: "#9c9c9c" }}></Box>

          <Box
            sx={{
              width: "100%",
              height: "25%",
              bgcolor: "#ffffff",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "70%",
                display: "flex",
                justifyContent: "space-around",

                boxSizing: "border-box",
              }}
            >
              <Button
                size="small"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0px",
                  gap: 0.5,
                }}
              >
                <GalleryHorizontal
                  size={30}
                  color="#2a6aff"
                  style={{ margin: 0 }}
                />
                <Typography sx={{ fontSize: "0.9rem" }}>
                  {" "}
                  Choose Banner{" "}
                </Typography>
              </Button>

              <Button
                size="small"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0px",
                  gap: 0.5,
                }}
              >
                <ImageUp size={30} color="#2a6aff" style={{ margin: 0 }} />
                <Typography sx={{ fontSize: "0.9rem" }}>
                  {" "}
                  Upload Image{" "}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClose={handleClose}
        open={true}
      >
        <Box
          sx={{
            width: "90%",

            borderRadius: "10px",
            height: "90%",
            bgcolor: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "&:focus": {
              outline: "none",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "10%",

              display: "flex",
              alignItems: "center",
              px: 2,
              boxSizing: "border-box",
              justifyContent: "space-between",
              borderBottom: "solid #b4b4b473 1px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 600,
                color: "#050318d2",
                fontFamily: "system-ui",
              }}
            >
              Add a cover image
            </Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "78%",
              display: "flex",
              p: 2,
              boxSizing: "border-box",
              justifyContent:"space-evenly",
              borderBottom: "solid #b4b4b473 1px",
              flexWrap:"wrap",
              overflow:"auto",
              gap:2
            }}
          >
            {Object.entries(banners).map(([id, url]) => (
              <Box
                key={id}
                component="img"
                src={url}
                onClick={() => setSelectedBanner(Number(id))}
                sx={{
                  width: 300,
                  height: 120,
                  cursor: "pointer",
                  borderRadius: 2,
                  border:
                    SelectedBanner === Number(id)
                      ? "3px solid #268ff9"
                      : "3px solid transparent",
                }}
              />
            ))}
          </Box>

          <Box></Box>
        </Box>
      </Modal>

      <Box
        sx={{
          height: "92.3vh",
          width: "100vw",
          bgcolor: "#F8FAFC",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        {/* this section for snakbar */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box
          className="snakbar"
          sx={{
            border: "solid 1px #c9c9c9",
            bgcolor: "#fff",
            width: "auto",
            borderRadius: "10px",
            pr: 2,
            by: 1,
            position: "absolute",
            left: "50%",
            opacity: 0,
            bottom: "-10%",
            zIndex: 5000,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <lord-icon
              src="https://cdn.lordicon.com/lltgvngb.json"
              trigger="loop"
              colors="primary:#4f46e5"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></lord-icon>

            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#980505e1",
              }}
            >
              {err}
            </Typography>
          </Box>
        </Box>
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Left side */}
        <Left_side />

        {/* right side */}
        <Box
          sx={{
            height: "100%",
            bgcolor: "#F8FAFC",
            width: "75%",
            borderLeft: "solid 0.5px #d5d5d5",

            position: "relative",
            boxSizing: "border-box",
            px: 4,
          }}
        >
          {/* header */}
          <Header step={step} />

          {/* Content */}
          {step == 0 ? (
            <CompanyInformationForm
              setFirstInfo={setFirstInfo}
              firstInfo={firstInfo}
            />
          ) : step == 1 ? (
            <MoreInfo secondtInfo={secondtInfo} setSecondInfo={setSecondInfo} />
          ) : step == 2 ? (
            <Branding setThirdInfo={setThirdInfo} />
          ) : null}

          {/* Bottom */}
          <ButtonB step={step} setStep={setStep} next={next} back={back} />
        </Box>
      </Box>
    </>
  );
}

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
          display: "flex",
          alignItems: "end",
        }}
      >
        {/* content */}
        <Box
          sx={{
            height: "fit-content ",
            width: "100%",
            bgcolor: "#fffefe",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            display: "flex",
            py:1
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
              boxShadow: "0 1px 5px 5px #5351511e",
              p: "2px",
            }}
          >
            <img
              style={{ width: "100%" }}
              src={CompanyInfo?.companyLogo?.url}
              alt=""
              srcset=""
            />
          </Card>

          <Box sx={{ height: "100%", flex: 1, ml: "7rem" }}>
            <Box sx={{ height: "100%", flex: 1 }}>
              {/* Company Name */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#2e2e2e",
                    fontFamily: "monospace",
                  }}
                >
                  {CompanyInfo?.name}
                </Typography>

                <VerifiedIcon
                  sx={{
                    color: "#1a73e8",
                    fontSize: "1.1rem",
                  }}
                />
              </Box>

              {/* Info Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 48 48"
                    id="Bag-Suitcase-4--Streamline-Plump"
                    height="15"
                    width="15"
                  >
                    <desc>
                      Bag Suitcase 4 Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="bag-suitcase-4--product-business-briefcase">
                      <path
                        id="Rectangle 97"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.586 14.236c0.21 -2.133 1.67 -3.848 3.785 -4.196C10.353 9.548 15.57 9 24 9c8.43 0 13.647 0.548 16.63 1.04 2.114 0.348 3.575 2.063 3.784 4.196C44.69 17.033 45 21.426 45 27c0 5.574 -0.31 9.967 -0.586 12.764 -0.21 2.133 -1.67 3.848 -3.785 4.196C37.647 44.452 32.43 45 24 45c-8.43 0 -13.646 -0.548 -16.63 -1.04 -2.114 -0.348 -3.575 -2.063 -3.784 -4.196C3.31 36.967 3 32.574 3 27c0 -5.573 0.31 -9.967 0.586 -12.764Z"
                        stroke-width="2"
                      ></path>
                      <path
                        id="Intersect"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M44.986 24.972C39.6 26.67 28.47 30 24 30c-4.47 0 -15.6 -3.33 -20.986 -5.028"
                        stroke-width="2"
                      ></path>
                      <path
                        id="Subtract"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.738 9.2c0.457 -1.408 1.238 -3.052 1.824 -4.204 0.478 -0.938 1.34 -1.615 2.384 -1.755A22.939 22.939 0 0 1 24 3.045c1.245 0 2.278 0.091 3.053 0.196 1.044 0.14 1.906 0.817 2.384 1.755 0.586 1.152 1.367 2.796 1.824 4.203"
                        stroke-width="2"
                      ></path>
                    </g>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      color: "#555",
                      fontFamily: "monospace",
                    }}
                  >
                    {CompanyInfo?.industry}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="Location-Pin--Streamline-Guidance-Free"
                    height="15"
                    width="15"
                  >
                    <desc>
                      Location Pin Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path
                      stroke="#000000"
                      d="M12 23.92a9.04 9.04 0 0 0 -2.96 -6.61l-2.567 -2.334A8.365 8.365 0 0 1 3.75 8.799C3.75 4.242 7.444 0.5 12 0.5s8.25 3.741 8.25 8.298c0 2.343 -0.989 4.6 -2.723 6.177l-2.568 2.334a9.041 9.041 0 0 0 -2.96 6.61Zm0 0V24l0 -0.057M12 11.5a2.5 2.5 0 1 1 0 -5 2.5 2.5 0 0 1 0 5Z"
                      stroke-width="1"
                    ></path>
                  </svg>
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      color: "#555",
                      fontFamily: "monospace",
                    }}
                  >
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
                }}
              >
                <Chip
                  icon={
                    <svg
                      viewBox="-0.5 -0.5 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="Language--Streamline-Iconoir"
                      height="12"
                      width="12"
                    >
                      <desc>
                        Language Streamline Icon: https://streamlinehq.com
                      </desc>
                      <path
                        d="M0.6628125 7.5c0 3.7760624999999997 3.061125 6.837187500000001 6.837187500000001 6.837187500000001 3.7760624999999997 0 6.837187500000001 -3.061125 6.837187500000001 -6.837187500000001 0 -3.7760624999999997 -3.061125 -6.837187500000001 -6.837187500000001 -6.837187500000001C3.7239375000000003 0.6628125 0.6628125 3.7239375000000003 0.6628125 7.5Z"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.7"
                      ></path>
                      <path
                        d="M8.18375 0.6965s2.051125 2.7011249999999998 2.051125 6.8034375c0 4.1023125 -2.051125 6.8035 -2.051125 6.8035"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.7"
                      ></path>
                      <path
                        d="M6.81625 14.303437500000001s-2.051125 -2.7011875 -2.051125 -6.8035S6.81625 0.6965 6.81625 0.6965"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.7"
                      ></path>
                      <path
                        d="M1.0933125000000001 9.892999999999999h12.8134375"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.7"
                      ></path>
                      <path
                        d="M1.0933125000000001 5.107h12.8134375"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.7"
                      ></path>
                  </svg>
                  }
                  size="small"
                  label={CompanyInfo?.website}
                  clickable
                  sx={{
                    color: "#1a73e8",
                    fontWeight: 500,
                    bgcolor: "#f5f8ff",
                    border: "1px solid #dbe7ff",
                    fontFamily: "monospace",
                    borderRadius: "5px",
                    fontSize: "0.62rem",
                    height:"fit-content"
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

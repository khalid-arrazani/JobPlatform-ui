import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function EditInfoModal({ setOpen, open }) {
  const [about, setAbout] = useState("");
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={onClose} sx={{ placeContent: "center" }}>
        <Box
          sx={{
            height: "100%",
            width: "100vw",
            bgcolor: "#f4edf5",
            px: 2,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >

            {/* header */}
          <Box
            sx={{
              width: "100%",
              height: "4.5rem",
              borderBottom: "solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
              Edit Profile
            </Typography>

            <Button
              onClick={() => {
                setOpen(false);
              }}
              sx={{ borderRadius: "20px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                id="X--Streamline-Tabler"
                height="24"
                width="24"
              >
                <path d="M18 6 6 18" stroke-width="2"></path>
                <path d="m6 6 12 12" stroke-width="2"></path>
              </svg>
            </Button>
          </Box>



          <Box sx={{ flex: 1, pt: 4 }}>
            {/* full name */}
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Full Name
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",
                    width: "3.4rem",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: "solid #ddd 1px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="Multiple-Neutral-2--Streamline-Ultimate"
                    height="30"
                    width="30"
                  >
                    <desc>
                      Multiple Neutral 2 Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <path
                      fill="#e3e3e3"
                      d="M17.6716 13.4164c0.4079 0 0.8118 -0.0804 1.1886 -0.2365 0.3769 -0.1561 0.7193 -0.3849 1.0077 -0.6733 0.2885 -0.2884 0.5173 -0.6309 0.6734 -1.0077 0.156 -0.3769 0.2364 -0.7808 0.2364 -1.1887 0 -0.40787 -0.0804 -0.81178 -0.2364 -1.18863 -0.1561 -0.37686 -0.3849 -0.71927 -0.6734 -1.0077 -0.2884 -0.28844 -0.6308 -0.51723 -1.0077 -0.67333 -0.3768 -0.1561 -0.7807 -0.23644 -1.1886 -0.23644 -0.8238 0 -1.6139 0.32725 -2.1964 0.90977 -0.5825 0.58251 -0.9098 1.37257 -0.9098 2.19633 0 0.8238 0.3273 1.6139 0.9098 2.1964 0.5825 0.5825 1.3726 0.9098 2.1964 0.9098Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M17.6716 9.17004c0.6496 0.00138 1.2824 0.20712 1.8087 0.58809 0.5262 0.38097 0.9193 0.91787 1.1234 1.53457 0.1109 -0.3154 0.1702 -0.648 0.174 -0.9825 0 -0.82376 -0.3273 -1.61382 -0.9098 -2.19633 -0.5825 -0.58252 -1.3725 -0.90977 -2.1963 -0.90977 -0.8238 0 -1.6139 0.32725 -2.1964 0.90977 -0.5825 0.58251 -0.9098 1.37257 -0.9098 2.19633 0.0039 0.3345 0.0631 0.6662 0.174 0.9825 0.2043 -0.6166 0.5974 -1.1534 1.1236 -1.53439 0.5262 -0.38095 1.1589 -0.58674 1.8086 -0.58827Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#e3e3e3"
                      d="M12.3467 20.14c0.0187 -1.4004 0.5882 -2.7371 1.5851 -3.7208 0.997 -0.9836 2.3411 -1.5351 3.7417 -1.5351 1.4005 0 2.7447 0.5515 3.7416 1.5351 0.9969 0.9837 1.5664 2.3204 1.5851 3.7208H12.3467Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffffff"
                      d="M17.673 16.5092c1.1155 0.0005 2.2027 0.3513 3.1081 1.003 0.9055 0.6516 1.5834 1.5711 1.9381 2.6287h0.281c-0.0187 -1.4004 -0.5882 -2.737 -1.5851 -3.7207 -0.9969 -0.9836 -2.3411 -1.5352 -3.7416 -1.5352 -1.4006 0 -2.7447 0.5516 -3.7417 1.5352 -0.9969 0.9837 -1.5664 2.3203 -1.5851 3.7207h0.281c0.3544 -1.0576 1.0321 -1.9771 1.9374 -2.6288s1.9924 -1.0025 3.1079 -1.0029Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffdda1"
                      d="M7.69175 11.9828c1.07727 0 2.11042 -0.428 2.87215 -1.1897 0.7618 -0.7617 1.1897 -1.7949 1.1897 -2.87217 0 -1.07727 -0.4279 -2.11042 -1.1897 -2.87217 -0.76173 -0.76175 -1.79488 -1.18969 -2.87215 -1.18969 -1.07728 0 -2.11043 0.42794 -2.87218 1.18969 -0.76174 0.76175 -1.18969 1.7949 -1.18969 2.87217 0 1.07727 0.42795 2.11047 1.18969 2.87217 0.76175 0.7617 1.7949 1.1897 2.87218 1.1897Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffdda1"
                      d="M7.69175 6.42999c0.85021 0.00223 1.67815 0.27208 2.36635 0.77128 0.6883 0.4992 1.2019 1.20241 1.468 2.0099 0.1463 -0.41479 0.2227 -0.8506 0.2275 -1.29024 0 -1.07727 -0.4279 -2.11042 -1.1897 -2.87217 -0.76173 -0.76175 -1.79488 -1.18969 -2.87215 -1.18969 -1.07728 0 -2.11043 0.42794 -2.87218 1.18969 -0.76174 0.76175 -1.18969 1.7949 -1.18969 2.87217 0.00465 0.43964 0.0815 0.87552 0.22747 1.29024 0.26614 -0.80749 0.77975 -1.5107 1.468 -2.0099 0.68824 -0.4992 1.51618 -0.76905 2.3664 -0.77128Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#66e1ff"
                      d="M1 20.1065c0 -1.7743 0.70485 -3.476 1.95949 -4.7306 1.25464 -1.2547 2.95631 -1.9595 4.73064 -1.9595s3.47597 0.7048 4.73067 1.9595c1.2546 1.2546 1.9595 2.9563 1.9595 4.7306H1Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#c2f3ff"
                      d="M7.69013 15.5467c1.40073 0.0009 2.76587 0.4415 3.90287 1.2596s1.9886 1.9724 2.4346 3.3002h0.3527c0 -1.7743 -0.7049 -3.476 -1.9595 -4.7306 -1.2547 -1.2547 -2.95634 -1.9595 -4.73067 -1.9595s-3.476 0.7048 -4.73064 1.9595C1.70485 16.6305 1 18.3322 1 20.1065h0.35267c0.44603 -1.3278 1.29759 -2.4821 2.4346 -3.3002 1.13701 -0.8181 2.50212 -1.2587 3.90286 -1.2596Z"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.72397 12.0162c1.07728 0 2.11043 -0.4279 2.87213 -1.1896 0.7618 -0.7618 1.1897 -1.79495 1.1897 -2.87222s-0.4279 -2.11042 -1.1897 -2.87217c-0.7617 -0.76175 -1.79485 -1.18969 -2.87213 -1.18969 -1.07727 0 -2.11042 0.42794 -2.87217 1.18969 -0.76175 0.76175 -1.18969 1.7949 -1.18969 2.87217 0 1.07727 0.42794 2.11042 1.18969 2.87222 0.76175 0.7617 1.7949 1.1896 2.87217 1.1896Z"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1.03418 20.14c0 -1.7744 0.70485 -3.476 1.95949 -4.7307 1.25464 -1.2546 2.95631 -1.9595 4.73064 -1.9595s3.47599 0.7049 4.73059 1.9595c1.2547 1.2547 1.9595 2.9563 1.9595 4.7307H1.03418Z"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.2921 20.1065h6.6901c0 -0.9021 -0.2322 -1.789 -0.6742 -2.5754 -0.442 -0.7864 -1.079 -1.4459 -1.8496 -1.9148 -0.7706 -0.469 -1.649 -0.7318 -2.5506 -0.763 -0.9015 -0.0313 -1.796 0.17 -2.5973 0.5845"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.6716 13.4164c0.4079 0 0.8118 -0.0804 1.1886 -0.2365 0.3769 -0.1561 0.7193 -0.3849 1.0077 -0.6733 0.2885 -0.2884 0.5173 -0.6309 0.6734 -1.0077 0.156 -0.3769 0.2364 -0.7808 0.2364 -1.1887 0 -0.40787 -0.0804 -0.81178 -0.2364 -1.18863 -0.1561 -0.37686 -0.3849 -0.71927 -0.6734 -1.0077 -0.2884 -0.28844 -0.6308 -0.51723 -1.0077 -0.67333 -0.3768 -0.1561 -0.7807 -0.23644 -1.1886 -0.23644 -0.8238 0 -1.6139 0.32725 -2.1964 0.90977 -0.5825 0.58251 -0.9098 1.37257 -0.9098 2.19633 0 0.8238 0.3273 1.6139 0.9098 2.1964 0.5825 0.5825 1.3726 0.9098 2.1964 0.9098Z"
                      stroke-width="1"
                    ></path>
                  </svg>
                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  placeholder="Enter your Full name"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-input": {
                      py: 0,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>

             {/* Headline */}
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Headline
              </Typography>

              <Box
                sx={{
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",

                    display: "flex",
                    alignItems: "center",

                    borderBottom: "solid #ddd 1px",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      height: "3.4rem",
                      width: "3.4rem",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight: "solid #ddd 1px",
                    }}
                  >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="Human-Resources-Businessman--Streamline-Ultimate"
                    height="30"
                    width="30"
                  >
                    <desc>
                      Human Resources Businessman Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <path
                      fill="#ffbc44"
                      d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffdda1"
                      d="M22.0432 15.3483h-7.6516c-0.2537 0 -0.497 0.1009 -0.6764 0.2802 -0.1794 0.1792 -0.2801 0.4227 -0.2801 0.6762v5.7389c0 0.2536 0.1008 0.497 0.2801 0.6763 0.1793 0.1793 0.4227 0.2801 0.6764 0.2801h0.2687l7.6067 -7.6067c-0.0724 -0.0242 -0.1476 -0.0393 -0.2238 -0.045Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffdda1"
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.78267 7.69662c0.66205 0 1.30926 -0.19638 1.85984 -0.56415 0.55049 -0.36787 0.97955 -0.89074 1.23293 -1.50242 0.25338 -0.61168 0.31966 -1.28476 0.19053 -1.93412 -0.12923 -0.64935 -0.448 -1.24591 -0.91621 -1.71402 -0.46821 -0.4682 -1.06466 -0.78707 -1.71402 -0.9162 -0.64936 -0.129133 -1.32243 -0.06286 -1.93412 0.19052 -0.61178 0.25338 -1.13454 0.68245 -1.50241 1.23293 -0.36787 0.55049 -0.56415 1.19779 -0.56415 1.85984 0 0.8878 0.35264 1.7393 0.98053 2.36709 0.62778 0.62779 1.47918 0.98053 2.36708 0.98053Z"
                      stroke-width="0.8"
                    ></path>
                    <path
                      fill="#66e1ff"
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m7.69621 22.9999 0.47816 -5.7387h2.39123v-3.3476c0 -1.2684 -0.5039 -2.4848 -1.40075 -3.3816 -0.89688 -0.89688 -2.11322 -1.40071 -3.38158 -1.40071s-2.4848 0.50383 -3.38158 1.40071c-0.89688 0.8968 -1.40071 2.1132 -1.40071 3.3816v3.3476h2.39109l0.47826 5.7387h3.82588Z"
                      stroke-width="0.8"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z"
                      stroke-width="0.5"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m15.8252 15.3483 0.4782 -0.9565c0.1043 -0.2926 0.3003 -0.5437 0.5588 -0.716 0.2585 -0.1724 0.5656 -0.2567 0.8758 -0.2405h0.9566c0.3101 -0.0162 0.6173 0.0681 0.8758 0.2405 0.2585 0.1723 0.4545 0.4234 0.5588 0.716l0.4783 0.9565"
                      stroke-width="0.5"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.4351 19.1741h9.5645"
                      stroke-width="0.5"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.2168 19.1741v1.4347"
                      stroke-width="0.8"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.78271 11.0443v2.8693"
                      stroke-width="0.5"
                    ></path>
                    <path
                      fill="#c77f67"
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.89903 4.34899c0.75145 -0.0001 1.49519 -0.15197 2.18642 -0.44674 -0.08863 -0.68976 -0.39129 -1.33444 -0.86545 -1.84334 -0.47416 -0.50891 -1.0957 -0.85628 -1.77756 -0.99351 -0.68177 -0.137231 -1.38949 -0.05729 -2.02353 0.22849 -0.63403 0.28588 -1.16255 0.76326 -1.5112 1.36499 0.51818 0.53467 1.13855 0.95974 1.82412 1.25011 0.68567 0.29027 1.42258 0.4399 2.1672 0.44Z"
                      stroke-width="0.5"
                    ></path>
                  </svg>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 500,

                      color: "#070e1ee5",
                      fontFamily: "monospace",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    Create your headline
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Arrow-Rectangle-Down-2--Streamline-Ultimate"
                      height="24"
                      width="24"
                    >
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.75 0.75h18.5s2 0 2 2v18.5s0 2 -2 2H2.75s-2 0 -2 -2V2.75s0 -2 2 -2Z"
                        stroke-width="0"
                      ></path>
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.649 6.937 12 11.1l5.351 -4.162c0.1191 -0.09868 0.2626 -0.16334 0.4154 -0.18714 0.1528 -0.0238 0.3092 -0.00585 0.4527 0.05193 0.1434 0.05779 0.2686 0.15328 0.3622 0.27636 0.0937 0.12308 0.1523 0.26918 0.1697 0.42285v4.417c-0.0032 0.2197 -0.0568 0.4357 -0.1567 0.6315 -0.0999 0.1957 -0.2433 0.3659 -0.4193 0.4975l-5.618 4.369c-0.1602 0.1207 -0.3554 0.186 -0.556 0.186 -0.2006 0 -0.3958 -0.0653 -0.556 -0.186l-5.619 -4.37c-0.17599 -0.1316 -0.31944 -0.3018 -0.4193 -0.4975 -0.09986 -0.1958 -0.15347 -0.4118 -0.1567 -0.6315V7.5c0.01769 -0.1534 0.07646 -0.29919 0.1701 -0.42197 0.09364 -0.12279 0.21868 -0.21803 0.36193 -0.27568 0.14325 -0.05765 0.29941 -0.07557 0.452 -0.05187 0.15259 0.02369 0.29595 0.08813 0.41497 0.18652Z"
                        clip-rule="evenodd"
                        stroke-width="1.2"
                      ></path>
                    </svg>
                  </Typography>
                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  placeholder="Enter your headline"
                  multiline
                  rows={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      py: 0.5,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box> 

            {/* location */}
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Location
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",
                    width: "3.4rem",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: "solid #ddd 1px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    id="Share-Location-Hand-2--Streamline-Ultimate"
                    height="30"
                    width="30"
                  >
                    <path
                      fill="#ff808c"
                      d="M16.3046 1c1.5221 0 2.9818 0.60466 4.0581 1.68095 1.0763 1.0763 1.681 2.53607 1.681 4.05818 0 2.43243 -3.3794 7.60917 -4.9519 9.88657 -0.088 0.1275 -0.2056 0.2317 -0.3427 0.3036 -0.1371 0.072 -0.2897 0.1096 -0.4445 0.1096 -0.1549 0 -0.3074 -0.0376 -0.4446 -0.1096 -0.1371 -0.0719 -0.2547 -0.1761 -0.3427 -0.3036 -1.5725 -2.2774 -4.9519 -7.45414 -4.9519 -9.88657 0 -1.52211 0.6047 -2.98188 1.681 -4.05818C13.3227 1.60466 14.7824 1 16.3046 1Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffbfc5"
                      d="M16.3046 17.038c-0.1549 0.0001 -0.3075 -0.0375 -0.4446 -0.1095 -0.1372 -0.072 -0.2548 -0.1762 -0.3427 -0.3037 -1.5725 -2.2765 -4.9519 -7.45323 -4.9519 -9.88567 0 -1.52211 0.6047 -2.98188 1.681 -4.05818C13.3227 1.60466 14.7824 1 16.3046 1v16.038Z"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1.95654 15.3478V23"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffdda1"
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.3044 22.0435c0 -0.7611 -0.3024 -1.491 -0.8405 -2.0291 -0.5382 -0.5382 -1.268 -0.8405 -2.0291 -0.8405H9.84785c0 -0.761 -0.30233 -1.4909 -0.84048 -2.0291 -0.53815 -0.5381 -1.26803 -0.8405 -2.02909 -0.8405H1.95654v5.7392H16.3044Z"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.97852 19.1739h3.58698"
                      stroke-width="1"
                    ></path>
                    <path
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.3046 1c1.5221 0 2.9818 0.60466 4.0581 1.68095 1.0763 1.0763 1.681 2.53607 1.681 4.05818 0 2.43243 -3.3794 7.60917 -4.9519 9.88657 -0.088 0.1275 -0.2056 0.2317 -0.3427 0.3036 -0.1371 0.072 -0.2897 0.1096 -0.4445 0.1096 -0.1549 0 -0.3074 -0.0376 -0.4446 -0.1096 -0.1371 -0.0719 -0.2547 -0.1761 -0.3427 -0.3036 -1.5725 -2.2774 -4.9519 -7.45414 -4.9519 -9.88657 0 -1.52211 0.6047 -2.98188 1.681 -4.05818C13.3227 1.60466 14.7824 1 16.3046 1Z"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#ffffff"
                      stroke="#191919"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.3042 8.65218c0.5073 0 0.9939 -0.20156 1.3527 -0.56032 0.3587 -0.35877 0.5603 -0.84536 0.5603 -1.35273s-0.2016 -0.99396 -0.5603 -1.35272c-0.3588 -0.35877 -0.8454 -0.56032 -1.3527 -0.56032 -0.5074 0 -0.994 0.20155 -1.3528 0.56032 -0.3587 0.35876 -0.5603 0.84535 -0.5603 1.35272 0 0.50737 0.2016 0.99396 0.5603 1.35273 0.3588 0.35876 0.8454 0.56032 1.3528 0.56032Z"
                      stroke-width="1"
                    ></path>
                  </svg>
                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  placeholder="Enter your location"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-input": {
                      py: 0,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>

           
        
            {/* about me */}
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                About me
              </Typography>

              <Box
                sx={{
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",

                    display: "flex",
                    alignItems: "center",

                    borderBottom: "solid #ddd 1px",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      height: "3.4rem",
                      width: "3.4rem",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight: "solid #ddd 1px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                      id="Information-Circle--Streamline-Flex"
                      height="28"
                      width="28"
                    >
                     
                      <g id="information-circle--information-frame-info-more-help-point-circle">
                        <path
                          id="Vector"
                          fill="#d7e0ff"
                          d="M2.11452 11.3428c2.2445 2.6357 7.52645 2.6357 9.77098 0 2.0673 -2.4277 1.9104 -7.17948 -0.5779 -9.2579 -2.22871 -1.861655 -6.3865 -1.861655 -8.61525 0C0.204096 4.16332 0.0471919 8.9151 2.11452 11.3428Z"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector_2"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.11452 11.3428c2.2445 2.6357 7.52645 2.6357 9.77098 0 2.0673 -2.4277 1.9104 -7.17948 -0.5779 -9.2579 -2.22871 -1.861655 -6.3865 -1.861655 -8.61525 0C0.204096 4.16332 0.0471919 8.9151 2.11452 11.3428Z"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1187"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.74599 6h0.49646c0.55229 0 1 0.44772 1 1v2.73504"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1188"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.76066 9.73505h2.97826"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1189"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.25713 3.71982v0.32278"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 500,

                      color: "#070e1ee5",
                      fontFamily: "monospace",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    tell us about you
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Arrow-Rectangle-Down-2--Streamline-Ultimate"
                      height="24"
                      width="24"
                    >
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.75 0.75h18.5s2 0 2 2v18.5s0 2 -2 2H2.75s-2 0 -2 -2V2.75s0 -2 2 -2Z"
                        stroke-width="0"
                      ></path>
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.649 6.937 12 11.1l5.351 -4.162c0.1191 -0.09868 0.2626 -0.16334 0.4154 -0.18714 0.1528 -0.0238 0.3092 -0.00585 0.4527 0.05193 0.1434 0.05779 0.2686 0.15328 0.3622 0.27636 0.0937 0.12308 0.1523 0.26918 0.1697 0.42285v4.417c-0.0032 0.2197 -0.0568 0.4357 -0.1567 0.6315 -0.0999 0.1957 -0.2433 0.3659 -0.4193 0.4975l-5.618 4.369c-0.1602 0.1207 -0.3554 0.186 -0.556 0.186 -0.2006 0 -0.3958 -0.0653 -0.556 -0.186l-5.619 -4.37c-0.17599 -0.1316 -0.31944 -0.3018 -0.4193 -0.4975 -0.09986 -0.1958 -0.15347 -0.4118 -0.1567 -0.6315V7.5c0.01769 -0.1534 0.07646 -0.29919 0.1701 -0.42197 0.09364 -0.12279 0.21868 -0.21803 0.36193 -0.27568 0.14325 -0.05765 0.29941 -0.07557 0.452 -0.05187 0.15259 0.02369 0.29595 0.08813 0.41497 0.18652Z"
                        clip-rule="evenodd"
                        stroke-width="1.2"
                      ></path>
                    </svg>
                  </Typography>
                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  multiline
                  placeholder="Tell recruiters about your background, skills, and career goals..."

                  rows={3}
                sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      py: 0.5,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>



          </Box>

        </Box>
      </Modal>
    </>
  );
}

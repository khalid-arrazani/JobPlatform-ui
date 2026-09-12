import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import logo from "./../../../assets/Logo/logo.png";
import loadingAnimation from "../../../assets/loginloadingAnimation.json";

import { Button, Box, TextField, Typography, Divider, Card } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { Player } from "@lottiefiles/react-lottie-player";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";

import { useContext } from "react";

import { AuthContext } from "../../../logic/context/AuthContext";

export default function SignUp() {
  const { email, setEmail, password, setPassword, handleLogin, ...state } =
    useContext(AuthContext);

  const outlinedPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  console.log(state.loading);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "95%",
          boxSizing: "border-box",
          px: 3,
          py: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 1,
            fontSize: "1rem",
            fontFamily: "system-ui",
            color: "#040217ec",
            mt: 2,
          }}
        >
          Username
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#ececec",
            pl: 1,
            borderRadius: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Multiple-Neutral-2--Streamline-Ultimate"
            height="35"
            width="32"
          >
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
              fill="#f7a0ff"
              d="M7.69175 11.9828c1.07727 0 2.11042 -0.428 2.87215 -1.1897 0.7618 -0.7617 1.1897 -1.7949 1.1897 -2.87217 0 -1.07727 -0.4279 -2.11042 -1.1897 -2.87217 -0.76173 -0.76175 -1.79488 -1.18969 -2.87215 -1.18969 -1.07728 0 -2.11043 0.42794 -2.87218 1.18969 -0.76174 0.76175 -1.18969 1.7949 -1.18969 2.87217 0 1.07727 0.42795 2.11047 1.18969 2.87217 0.76175 0.7617 1.7949 1.1897 2.87218 1.1897Z"
              stroke-width="1"
            ></path>
            <path
              fill="#ffdda1"
              d="M7.69175 6.42999c0.85021 0.00223 1.67815 0.27208 2.36635 0.77128 0.6883 0.4992 1.2019 1.20241 1.468 2.0099 0.1463 -0.41479 0.2227 -0.8506 0.2275 -1.29024 0 -1.07727 -0.4279 -2.11042 -1.1897 -2.87217 -0.76173 -0.76175 -1.79488 -1.18969 -2.87215 -1.18969 -1.07728 0 -2.11043 0.42794 -2.87218 1.18969 -0.76174 0.76175 -1.18969 1.7949 -1.18969 2.87217 0.00465 0.43964 0.0815 0.87552 0.22747 1.29024 0.26614 -0.80749 0.77975 -1.5107 1.468 -2.0099 0.68824 -0.4992 1.51618 -0.76905 2.3664 -0.77128Z"
              stroke-width="1"
            ></path>
            <path
              fill="#f2aef0"
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

          <FormControl
            fullWidth
            sx={{
              bgcolor: "#f0f0f0a9",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
            variant="outlined"
          >
            <InputLabel
              sx={{ fontFamily: "system-ui" }}
              htmlFor={`${outlinedPasswordId}-input`}
            >
              Choose a username
            </InputLabel>
            <OutlinedInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              label="Enter your password"
            />
          </FormControl>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            mb: 1,
            fontSize: "1rem",
            fontFamily: "system-ui",
            color: "#040217ec",
            mt: 2,
          }}
        >
          Email Address
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#ececec",
            pl: 1,
            borderRadius: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Email-Action-Add--Streamline-Ultimate"
            height="32"
            width="32"
          >
            <path
              fill="#e3e3e3"
              d="M19.6526 1H2.43527c-0.38053 0 -0.74547 0.15116 -1.01454 0.42024 -0.26908 0.26907 -0.42024 0.63401 -0.42024 1.01454V12.9565c0 0.3805 0.15116 0.7455 0.42024 1.0145 0.26907 0.2691 0.63401 0.4203 1.01454 0.4203H19.6526c0.3805 0 0.7455 -0.1512 1.0145 -0.4203 0.2691 -0.269 0.4203 -0.634 0.4203 -1.0145V2.43478c0 -0.38053 -0.1512 -0.74547 -0.4203 -1.01454C20.3981 1.15116 20.0331 1 19.6526 1Z"
              stroke-width="1"
            ></path>
            <path
              fill="#ffffff"
              d="M2.43527 1c-0.38053 0 -0.74547 0.15116 -1.01454 0.42024 -0.26908 0.26907 -0.42024 0.63401 -0.42024 1.01454V12.9565c0 0.3805 0.15116 0.7455 0.42024 1.0145 0.26907 0.2691 0.63401 0.4203 1.01454 0.4203h1.27791L17.1044 1H2.43527Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.60916 14.3913H2.43527c-0.38053 0 -0.74547 -0.1512 -1.01454 -0.4203 -0.26908 -0.269 -0.42024 -0.634 -0.42024 -1.0145V2.43478c0 -0.38053 0.15116 -0.74547 0.42024 -1.01454C1.6898 1.15116 2.05474 1 2.43527 1H19.6526c0.3805 0 0.7455 0.15116 1.0145 0.42024 0.2691 0.26907 0.4203 0.63401 0.4203 1.01454v7.17389"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.6731 1.42657 -9.6293 7.70381 -9.62925 -7.70381"
              stroke-width="1"
            ></path>
            <path
              fill="#78eb7b"
              d="M17.2606 23c1.5221 0 2.9819 -0.6046 4.0582 -1.6809 1.0763 -1.0763 1.6809 -2.5361 1.6809 -4.0582 0 -1.5221 -0.6046 -2.9819 -1.6809 -4.0582 -1.0763 -1.0763 -2.5361 -1.6809 -4.0582 -1.6809 -1.5221 0 -2.9819 0.6046 -4.0582 1.6809 -1.0763 1.0763 -1.6809 2.5361 -1.6809 4.0582 0 1.5221 0.6046 2.9819 1.6809 4.0582C14.2787 22.3954 15.7385 23 17.2606 23Z"
              stroke-width="1"
            ></path>
            <path
              fill="#c9f7ca"
              d="M17.2614 11.5218c-1.1681 -0.0009 -2.3087 0.3549 -3.269 1.0198 -0.9603 0.665 -1.6947 1.6074 -2.1048 2.7011 -0.4102 1.0937 -0.4765 2.2866 -0.1902 3.4191 0.2864 1.1324 0.9117 2.1504 1.7924 2.9178l8.0902 -8.0902c-0.5369 -0.6181 -1.2004 -1.1137 -1.9455 -1.4531 -0.7451 -0.3395 -1.5544 -0.5149 -2.3731 -0.5145Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.2606 23c1.5221 0 2.9819 -0.6046 4.0582 -1.6809 1.0763 -1.0763 1.6809 -2.5361 1.6809 -4.0582 0 -1.5221 -0.6046 -2.9819 -1.6809 -4.0582 -1.0763 -1.0763 -2.5361 -1.6809 -4.0582 -1.6809 -1.5221 0 -2.9819 0.6046 -4.0582 1.6809 -1.0763 1.0763 -1.6809 2.5361 -1.6809 4.0582 0 1.5221 0.6046 2.9819 1.6809 4.0582C14.2787 22.3954 15.7385 23 17.2606 23Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.2607 14.3914v5.7391"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.1302 17.2609h-5.7391"
              stroke-width="1"
            ></path>
          </svg>

          <TextField
            label="Enter your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              bgcolor: "#f0f0f0a9",
              borderRadius: "10px",

              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          ></TextField>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            mb: 1,
            fontSize: "1rem",
            fontFamily: "system-ui",
            color: "#040217ec",
            mt: 2,
          }}
        >
          Password
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#ececec",
            pl: 1,
            borderRadius: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Shield-Lock--Streamline-Ultimate"
            height="32"
            width="32"
          >
            <path
              fill="#e3e3e3"
              d="M1.95703 4.13347V11.438c0.02797 2.4137 0.7971 4.7604 2.20322 6.7224 1.40613 1.9619 3.38129 3.4443 5.65797 4.2463l1.07218 0.396c0.7163 0.2631 1.5027 0.2631 2.219 0l1.0722 -0.396c2.2765 -0.8022 4.2516 -2.2847 5.6576 -4.2466 1.4061 -1.9619 2.1754 -4.3085 2.2036 -6.7221V4.13347c-0.0008 -0.28701 -0.0859 -0.56745 -0.2448 -0.80652 -0.1588 -0.23907 -0.3843 -0.42624 -0.6485 -0.53827 -2.8974 -1.2093 -6.0101 -1.817476 -9.1496 -1.78763 -3.13942 -0.029846 -6.2522 0.57833 -9.14953 1.78763 -0.26417 0.11213 -0.48963 0.29933 -0.64842 0.53837 -0.1588 0.23905 -0.24396 0.51944 -0.24492 0.80642Z"
              stroke-width="1"
            ></path>
            <path
              fill="#ffffff"
              d="M11.9999 1.00105c-3.13942 -0.029846 -6.2522 0.57833 -9.14953 1.78763 -0.26417 0.11213 -0.48963 0.29933 -0.64842 0.53837 -0.1588 0.23905 -0.24396 0.51944 -0.24492 0.80642V11.438c0.02797 2.4137 0.7971 4.7604 2.20322 6.7224 1.40613 1.9619 3.38129 3.4443 5.65797 4.2463l1.07218 0.396c0.3558 0.1301 0.7308 0.1971 1.1095 0.1971V1.00105Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M1.95703 4.13347V11.438c0.02797 2.4137 0.7971 4.7604 2.20322 6.7224 1.40613 1.9619 3.38129 3.4443 5.65797 4.2463l1.07218 0.396c0.7163 0.2631 1.5027 0.2631 2.219 0l1.0722 -0.396c2.2765 -0.8022 4.2516 -2.2847 5.6576 -4.2466 1.4061 -1.9619 2.1754 -4.3085 2.2036 -6.7221V4.13347c-0.0008 -0.28701 -0.0859 -0.56745 -0.2448 -0.80652 -0.1588 -0.23907 -0.3843 -0.42624 -0.6485 -0.53827 -2.8974 -1.2093 -6.0101 -1.817476 -9.1496 -1.78763 -3.13942 -0.029846 -6.2522 0.57833 -9.14953 1.78763 -0.26417 0.11213 -0.48963 0.29933 -0.64842 0.53837 -0.1588 0.23905 -0.24396 0.51944 -0.24492 0.80642Z"
              stroke-width="1"
            ></path>
            <path
              fill="#ffef5e"
              d="M15.3475 9.3634H8.65227c-0.12561 0 -0.24998 0.02474 -0.36603 0.07281 -0.11604 0.04807 -0.22148 0.11852 -0.3103 0.20734 -0.08881 0.08881 -0.15927 0.19425 -0.20733 0.31029 -0.04807 0.11606 -0.07281 0.24046 -0.07281 0.36606v5.7378c0 0.2537 0.10077 0.497 0.28014 0.6763 0.17937 0.1794 0.42266 0.2802 0.67633 0.2802h6.69523c0.2537 0 0.497 -0.1008 0.6763 -0.2802 0.1794 -0.1793 0.2802 -0.4226 0.2802 -0.6763v-5.7378c0 -0.2537 -0.1008 -0.49698 -0.2802 -0.67635 -0.1793 -0.17938 -0.4226 -0.28015 -0.6763 -0.28015Z"
              stroke-width="1"
            ></path>
            <path
              fill="#fff9bf"
              d="M11.9999 9.3634H8.65227c-0.12561 0 -0.24998 0.02474 -0.36603 0.07281 -0.11604 0.04807 -0.22148 0.11852 -0.3103 0.20734 -0.08881 0.08881 -0.15927 0.19425 -0.20733 0.31029 -0.04807 0.11606 -0.07281 0.24046 -0.07281 0.36606v5.7388c0 0.2536 0.10077 0.4969 0.28014 0.6763s0.42266 0.2801 0.67633 0.2801h3.34763V9.3634Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.3475 9.3634H8.65227c-0.12561 0 -0.24998 0.02474 -0.36603 0.07281 -0.11604 0.04807 -0.22148 0.11852 -0.3103 0.20734 -0.08881 0.08881 -0.15927 0.19425 -0.20733 0.31029 -0.04807 0.11606 -0.07281 0.24046 -0.07281 0.36606v5.7378c0 0.2537 0.10077 0.497 0.28014 0.6763 0.17937 0.1794 0.42266 0.2802 0.67633 0.2802h6.69523c0.2537 0 0.497 -0.1008 0.6763 -0.2802 0.1794 -0.1793 0.2802 -0.4226 0.2802 -0.6763v-5.7378c0 -0.2537 -0.1008 -0.49698 -0.2802 -0.67635 -0.1793 -0.17938 -0.4226 -0.28015 -0.6763 -0.28015Z"
              stroke-width="1"
            ></path>
            <path
              fill="#808080"
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.9998 14.4451c0.3171 0 0.6212 -0.126 0.8454 -0.3502 0.2242 -0.2242 0.3502 -0.5283 0.3502 -0.8454 0 -0.3171 -0.126 -0.6212 -0.3502 -0.8454 -0.2242 -0.2242 -0.5283 -0.3502 -0.8454 -0.3502 -0.3171 0 -0.6212 0.126 -0.8454 0.3502 -0.2242 0.2242 -0.3502 0.5283 -0.3502 0.8454 0 0.3171 0.126 0.6212 0.3502 0.8454 0.2242 0.2242 0.5283 0.3502 0.8454 0.3502Z"
              stroke-width="1"
            ></path>
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.3912 7.9287c0 -0.63418 -0.2519 -1.24238 -0.7003 -1.69081 -0.4485 -0.44843 -1.0567 -0.70035 -1.6909 -0.70035 -0.6341 0 -1.2423 0.25192 -1.6908 0.70035 -0.44839 0.44843 -0.70031 1.05663 -0.70031 1.69081v1.4347h4.78231V7.9287Z"
              stroke-width="1"
            ></path>
          </svg>

          <FormControl
            fullWidth
            sx={{
              bgcolor: "#f0f0f003",
              borderRadius: "10px",
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
            variant="outlined"
          >
            <InputLabel
              sx={{ fontFamily: "system-ui" }}
              htmlFor={`${outlinedPasswordId}-input`}
            >
              Enter your password
            </InputLabel>
            <OutlinedInput
              id={`${outlinedPasswordId}-input`}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Enter your password"
            />
          </FormControl>

          
        </Box>

        <Box sx={{width:"100%",height:"7rem",boxSizing:"border-box"}}>

          <Typography
          sx={{
            fontWeight: 600,
           
            fontSize: "1rem",
            fontFamily: "system-ui",
            color: "#040217ec",boxSizing:"border-box"
          
          }}
        >
         I am a 
        </Typography>
        <Box  sx={{width:"100%",
          display:"flex"
          ,justifyContent:"space-between",
          boxSizing:"border-box",
          alignItems:"center",
          height:"5rem",
      
          mt:1
        }}>
          <Box sx={{bgcolor:"#896363 " , width:"48%",height:"85%",borderRadius:"10px"}} ></Box>
          <Box sx={{bgcolor:"#b42525 " , width:"48%",height:"85%",borderRadius:"10px"}} ></Box>
        </Box>

           
        </Box>

        

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1.5rem",
          }}
        >
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            disabled={state.loadingLogin}
  
            sx={{
              bgcolor: "#6d04a1",
              mt: 2,
              placeSelf: "center",
              height: "3rem",
              fontSize: "1.4rem",
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "10px",
              display: "flex",
              alignContent: "center",
              position: "relative",
            }}
          >
            {state.loadingLogin ? (
              <Player
                autoplay
                loop
                src={loadingAnimation}
                style={{
                  width: "6rem",
                  position: "absolute",
                  top: -20,
                  left: "35%",
                }}
              />
            ) : (
              "Sing Up"
            )}
          </Button>
        </Box>

        <Divider
          sx={{
             fontFamily: "monospace",
            fontSize: "1.2rem",
            color: "#0f011a",
          }}
        >
          Already have an account?
        </Divider>

        <Box
          sx={{
            display: "flex",
            mb: "1.5rem",
            flexDirection: "column",
          }}
        >
        

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#db93ff00",
              color: "#6d04a1",
              mt:1,
              placeSelf: "center",
              height: "3.5rem",
              fontSize: "1.4rem",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
}

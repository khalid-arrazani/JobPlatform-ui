import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import logo from "./../../../assets/Logo/logo.png";
import loadingAnimation from "../../../assets/loginloadingAnimation.json";

import {
  Button,
  Box,
  TextField,
  Typography,
  Divider,
  Card,
} from "@mui/material";

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
            mt: 1,
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
            mt: 1,
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
            mt: 1,
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

        <Box
          sx={{
            width: "100%",
            height: "7rem",
            boxSizing: "border-box",
            pt: 0.5,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,

              fontSize: "1rem",
              fontFamily: "system-ui",
              color: "#040217ec",
              boxSizing: "border-box",
            }}
          >
            I am a
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
              alignItems: "center",
              height: "5rem",
              mt: 1,
            }}
          >
            <Box
              sx={{
                bgcolor: "#896363 ",
                width: "48%",
                height: "85%",
                borderRadius: "10px",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Human-Resources-Businessman--Streamline-Ultimate" height="100%"
                width="25%">
  
  <path fill="#ffbc44" d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z" stroke-width="1"></path>
  <path fill="#ffdda1" d="M22.0432 15.3483h-7.6516c-0.2537 0 -0.497 0.1009 -0.6764 0.2802 -0.1794 0.1792 -0.2801 0.4227 -0.2801 0.6762v5.7389c0 0.2536 0.1008 0.497 0.2801 0.6763 0.1793 0.1793 0.4227 0.2801 0.6764 0.2801h0.2687l7.6067 -7.6067c-0.0724 -0.0242 -0.1476 -0.0393 -0.2238 -0.045Z" stroke-width="1"></path>
  <path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.78267 7.69662c0.66205 0 1.30926 -0.19638 1.85984 -0.56415 0.55049 -0.36787 0.97955 -0.89074 1.23293 -1.50242 0.25338 -0.61168 0.31966 -1.28476 0.19053 -1.93412 -0.12923 -0.64935 -0.448 -1.24591 -0.91621 -1.71402 -0.46821 -0.4682 -1.06466 -0.78707 -1.71402 -0.9162 -0.64936 -0.129133 -1.32243 -0.06286 -1.93412 0.19052 -0.61178 0.25338 -1.13454 0.68245 -1.50241 1.23293 -0.36787 0.55049 -0.56415 1.19779 -0.56415 1.85984 0 0.8878 0.35264 1.7393 0.98053 2.36709 0.62778 0.62779 1.47918 0.98053 2.36708 0.98053Z" stroke-width="1"></path>
  <path fill="#66e1ff" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m7.69621 22.9999 0.47816 -5.7387h2.39123v-3.3476c0 -1.2684 -0.5039 -2.4848 -1.40075 -3.3816 -0.89688 -0.89688 -2.11322 -1.40071 -3.38158 -1.40071s-2.4848 0.50383 -3.38158 1.40071c-0.89688 0.8968 -1.40071 2.1132 -1.40071 3.3816v3.3476h2.39109l0.47826 5.7387h3.82588Z" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m15.8252 15.3483 0.4782 -0.9565c0.1043 -0.2926 0.3003 -0.5437 0.5588 -0.716 0.2585 -0.1724 0.5656 -0.2567 0.8758 -0.2405h0.9566c0.3101 -0.0162 0.6173 0.0681 0.8758 0.2405 0.2585 0.1723 0.4545 0.4234 0.5588 0.716l0.4783 0.9565" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.4351 19.1741h9.5645" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M18.2168 19.1741v1.4347" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.78271 11.0443v2.8693" stroke-width="1"></path>
  <path fill="#c77f67" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M6.89903 4.34899c0.75145 -0.0001 1.49519 -0.15197 2.18642 -0.44674 -0.08863 -0.68976 -0.39129 -1.33444 -0.86545 -1.84334 -0.47416 -0.50891 -1.0957 -0.85628 -1.77756 -0.99351 -0.68177 -0.137231 -1.38949 -0.05729 -2.02353 0.22849 -0.63403 0.28588 -1.16255 0.76326 -1.5112 1.36499 0.51818 0.53467 1.13855 0.95974 1.82412 1.25011 0.68567 0.29027 1.42258 0.4399 2.1672 0.44Z" stroke-width="1"></path>
</svg>
            </Box>
            <Box
              sx={{
                bgcolor: "#b42525 ",
                width: "48%",
                height: "85%",
                borderRadius: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Office-Outdoors--Streamline-Ultimate"
               height="50%"
                width="25%"
              >
                <path
                  fill="#e3e3e3"
                  d="M1 22.5589V6.94997c0.00527 -0.24852 0.10895 -0.48479 0.28827 -0.65694 0.17932 -0.17215 0.41963 -0.2661 0.66816 -0.26123h7.65144c0.24853 -0.00487 0.48883 0.08908 0.66813 0.26123 0.1794 0.17215 0.283 0.40842 0.2883 0.65694V22.5589"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ffffff"
                  d="M9.60787 6.03182H1.95643c-0.1231 -0.00254 -0.24548 0.0192 -0.36017 0.06397 -0.1147 0.04477 -0.21944 0.1117 -0.30826 0.19697 -0.08882 0.08526 -0.15997 0.18719 -0.20938 0.29997 -0.04942 0.11276 -0.07613 0.23416 -0.07862 0.35726v2.75452c0.00527 -0.24852 0.10895 -0.48479 0.28827 -0.65695 0.17932 -0.17214 0.41963 -0.26609 0.66816 -0.26122h7.65144c0.24853 -0.00487 0.48883 0.08908 0.66813 0.26122 0.1794 0.17216 0.283 0.40843 0.2883 0.65695V6.94999c-0.0025 -0.1231 -0.0292 -0.2445 -0.0787 -0.35726 -0.0493 -0.11278 -0.1205 -0.21471 -0.2093 -0.29997 -0.0888 -0.08527 -0.1936 -0.1522 -0.30825 -0.19697 -0.11469 -0.04477 -0.23708 -0.06651 -0.36018 -0.06397Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1 22.5589V6.94997c0.00527 -0.24852 0.10895 -0.48479 0.28827 -0.65694 0.17932 -0.17215 0.41963 -0.2661 0.66816 -0.26123h7.65144c0.24853 -0.00487 0.48883 0.08908 0.66813 0.26123 0.1794 0.17215 0.283 0.40842 0.2883 0.65694V22.5589"
                  stroke-width="1"
                ></path>
                <path
                  fill="#78eb7b"
                  d="M21.0857 16.5908c0.2525 0.0117 0.5046 -0.0278 0.7416 -0.1161 0.2368 -0.0883 0.4533 -0.2235 0.6366 -0.3974 0.1785 -0.1695 0.3186 -0.3753 0.4108 -0.6034 0.0922 -0.2282 0.1345 -0.4736 0.1238 -0.7194 0.0101 -0.2454 -0.0325 -0.4902 -0.1249 -0.7179 -0.0923 -0.2277 -0.2324 -0.4329 -0.4107 -0.602 -0.1829 -0.1744 -0.3992 -0.3101 -0.6358 -0.3987 -0.2368 -0.0888 -0.4889 -0.1289 -0.7414 -0.1177 -0.1588 -0.0201 -0.3194 -0.0201 -0.4782 0 0.0096 -0.1349 0 -0.3204 0 -0.4591 0 -2.2381 -1.3457 -3.67272 -2.8693 -3.67272 -1.9129 0 -2.8693 1.43462 -2.8693 3.67272 0.0522 0.643 0.2187 1.2717 0.4916 1.8564 -0.2555 -0.1242 -0.5384 -0.1814 -0.8221 -0.166 -0.2836 0.0152 -0.5587 0.1027 -0.7993 0.2537 -0.2405 0.1511 -0.4387 0.361 -0.5757 0.6099 -0.137 0.2488 -0.2084 0.5285 -0.2073 0.8126 0.0085 0.4444 0.1848 0.8691 0.4935 1.1888 0.2754 0.263 0.5987 1.0139 4.7668 1.0139 0.5658 0.061 1.1372 -0.0422 1.646 -0.297 0.5088 -0.2549 0.9334 -0.6509 1.2233 -1.1406Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.69482 22.559v-3.5962"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.4341 22.559v-3.5962"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.78223 18.8862h9.56427"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ff808c"
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.69487 3.73641c-0.00124 -0.06155 -0.01461 -0.12225 -0.03932 -0.17864 -0.0247 -0.05638 -0.06028 -0.10734 -0.10468 -0.14998 -0.04441 -0.04262 -0.09679 -0.07609 -0.15413 -0.09848 -0.05734 -0.02239 -0.11854 -0.03326 -0.18009 -0.03199H4.34736c-0.06154 -0.00127 -0.12274 0.0096 -0.18009 0.03199s-0.10972 0.05586 -0.15412 0.09848c-0.04442 0.04264 -0.07999 0.0936 -0.1047 0.14998 -0.02471 0.05639 -0.03806 0.11709 -0.03931 0.17864v2.29543h3.82573V3.73641Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.78223 3.27732V1.44098"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.91309 8.78638h5.73857"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.91309 12.459h5.73857"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.91309 16.1317h5.73857"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1 22.5589h21.0414"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.2158 12.9191v9.2582"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.2163 18.4272c-0.6134 -0.0145 -1.199 -0.2583 -1.6416 -0.6832 -0.4426 -0.4248 -0.71 -1 -0.7495 -1.6123"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18.2158 15.6726c0.8844 0.0072 1.7388 -0.3209 2.3911 -0.9181"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.0857 16.5908c0.2525 0.0117 0.5046 -0.0278 0.7416 -0.1161 0.2368 -0.0883 0.4533 -0.2235 0.6366 -0.3974 0.1785 -0.1695 0.3186 -0.3753 0.4108 -0.6034 0.0922 -0.2282 0.1345 -0.4736 0.1238 -0.7194 0.0101 -0.2454 -0.0325 -0.4902 -0.1249 -0.7179 -0.0923 -0.2277 -0.2324 -0.4329 -0.4107 -0.602 -0.1829 -0.1744 -0.3992 -0.3101 -0.6358 -0.3987 -0.2368 -0.0888 -0.4889 -0.1289 -0.7414 -0.1177 -0.1588 -0.0201 -0.3194 -0.0201 -0.4782 0 0.0096 -0.1349 0 -0.3204 0 -0.4591 0 -2.2381 -1.3457 -3.67272 -2.8693 -3.67272 -1.9129 0 -2.8693 1.43462 -2.8693 3.67272 0.0522 0.643 0.2187 1.2717 0.4916 1.8564 -0.2555 -0.1242 -0.5384 -0.1814 -0.8221 -0.166 -0.2836 0.0152 -0.5587 0.1027 -0.7993 0.2537 -0.2405 0.1511 -0.4387 0.361 -0.5757 0.6099 -0.137 0.2488 -0.2084 0.5285 -0.2073 0.8126 0.0085 0.4444 0.1848 0.8691 0.4935 1.1888"
                  stroke-width="1"
                ></path>
              </svg>
            </Box>
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
              mt: 1,
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

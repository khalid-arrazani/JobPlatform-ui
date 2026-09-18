import { Box, Typography, Avatar, IconButton } from "@mui/material";
import logoTitle from "../../../../assets/Logo/logo.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import WorkOutlineIcon from "@mui/icons-material/WorkOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";

import { Button, Paper, Divider } from "@mui/material";

export default function JobSeekerProfileMobile() {
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
        <Box
          sx={{
            height: "4.5rem",
            width: "100%",
            bgcolor: "#c571ec30",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            boxSizing: "border-box",
            borderRadius: "18px",
          }}
        >
          <IconButton size="small">
            <Avatar
              src="https://imgs.search.brave.com/sgSqeqpujrTJDQYBggmQDyLTjvjcKb7a4MsC7A2-fuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vdXNlci1wcm9m/aWxlLXBuZy1wcm9m/ZXNzaW9uYWwtYnVz/aW5lc3NtYW4tc3Rp/Y2tlci10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kXzUzODc2LTEw/NDg5MjkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
              sx={{
                width: 45,
                height: 45,
              }}
            />
            <KeyboardArrowRightIcon />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 2,
            }}
          >
            <img
              src={logoTitle}
              width={40}
              style={{ marginRight: "0.5rem" }}
              alt=""
            />
            <svg
              width="80"
              height="18"
              viewBox="0 0 80 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91999 15.52C8.67999 15.1733 7.87332 13.6933 6.49999 11.08C5.13999 8.45333 4.17332 6.62666 3.59999 5.6C3.54665 6.05333 3.42665 6.92 3.23999 8.2C2.87999 10.7867 2.69999 12.96 2.69999 14.72C2.69999 15.1333 2.72665 15.6867 2.77999 16.38C1.84665 16.38 1.21332 16.2733 0.879988 16.06C0.559988 15.8333 0.399988 15.52 0.399988 15.12C0.399988 15 0.619988 13.2133 1.05999 9.76C1.49999 6.29333 1.72665 3.86666 1.73999 2.48L1.55999 2.22C1.22665 1.72667 0.786655 1.31333 0.239988 0.979998C0.106655 0.899998 0.0266545 0.846665 -1.21593e-05 0.819998C0.639988 0.433331 1.25332 0.239998 1.83999 0.239998C3.01332 0.239998 3.87332 0.626665 4.41999 1.4C4.96665 2.16 5.98665 4.04666 7.47999 7.06C7.63999 7.39333 7.87999 7.9 8.19999 8.58C8.53332 9.24667 8.79999 9.78667 8.99999 10.2C9.46666 11.2 9.96665 12.14 10.5 13.02C10.54 12.5 10.72 10.9067 11.04 8.24C11.3733 5.56 11.54 3.44 11.54 1.88C11.54 1.46666 11.5133 0.926664 11.46 0.259998C12.3933 0.259998 13.02 0.366664 13.34 0.579998C13.66 0.793331 13.82 1.09333 13.82 1.48C13.82 1.62666 13.6 3.48666 13.16 7.06C12.72 10.6333 12.5 13.1067 12.5 14.48C12.5 14.9733 12.5133 15.3333 12.54 15.56C12.6467 15.6533 12.82 15.7667 13.06 15.9C12.2333 16.4333 11.4667 16.7 10.76 16.7C10.0533 16.7 9.43999 16.3067 8.91999 15.52ZM21.0458 11.36C20.4058 11.36 19.7791 11.2867 19.1658 11.14C19.1524 11.2733 19.1458 11.48 19.1458 11.76C19.1458 12.8667 19.3524 13.7 19.7658 14.26C20.1791 14.82 20.6724 15.1 21.2458 15.1C21.8191 15.1 22.3658 14.9267 22.8858 14.58C23.4058 14.2333 23.8591 13.7533 24.2458 13.14C24.7258 13.2467 24.9658 13.4933 24.9658 13.88C23.7924 15.68 22.2791 16.58 20.4258 16.58C19.3058 16.58 18.3258 16.1533 17.4858 15.3C16.6458 14.4333 16.2258 13.2333 16.2258 11.7C16.2258 10.5533 16.4458 9.46666 16.8858 8.44C17.3258 7.4 18.0258 6.52667 18.9858 5.82C19.9458 5.1 21.0058 4.74 22.1658 4.74C23.3391 4.74 24.1991 5.00667 24.7458 5.54C25.2924 6.07333 25.5658 6.77333 25.5658 7.64C25.5658 8.89333 25.1258 9.82666 24.2458 10.44C23.3791 11.0533 22.3124 11.36 21.0458 11.36ZM21.8858 5.98C21.2058 5.98 20.6324 6.4 20.1658 7.24C19.6991 8.08 19.3924 9.1 19.2458 10.3H19.5458C20.7058 10.3 21.5591 10 22.1058 9.4C22.6658 8.8 22.9458 8.08 22.9458 7.24C22.9458 6.89333 22.8524 6.6 22.6658 6.36C22.4924 6.10666 22.2324 5.98 21.8858 5.98ZM35.4372 16.88C34.5038 16.88 33.6972 16.48 33.0172 15.68C32.3505 14.8667 31.7238 13.7333 31.1372 12.28C29.9638 13.72 29.1105 15.3333 28.5772 17.12C27.5772 16.2933 27.0772 15.56 27.0772 14.92C27.0772 14.4533 27.3638 13.88 27.9372 13.2C28.5238 12.5067 29.3772 11.64 30.4972 10.6C29.6438 8.29333 29.0572 6.86667 28.7372 6.32C28.4305 5.76 28.1772 5.34667 27.9772 5.08C28.6438 4.73333 29.2505 4.56 29.7972 4.56C30.2372 4.56 30.5972 4.74666 30.8772 5.12C31.2105 5.53333 31.4638 5.98 31.6372 6.46C31.8105 6.92666 31.9372 7.3 32.0172 7.58C32.1105 7.84666 32.2438 8.24666 32.4172 8.78C34.3238 6.91333 35.3772 5.44666 35.5772 4.38C36.3638 5.04667 36.7572 5.62667 36.7572 6.12C36.7572 6.46667 36.6372 6.82 36.3972 7.18C36.1572 7.54 35.9038 7.84666 35.6372 8.1C35.3705 8.34 34.9305 8.71333 34.3172 9.22C33.7172 9.71333 33.2572 10.1067 32.9372 10.4C33.4038 11.6933 34.0305 12.9533 34.8172 14.18C35.6038 15.4067 36.2372 16.2467 36.7172 16.7C36.2372 16.82 35.8105 16.88 35.4372 16.88ZM47.0509 9.36L45.1309 9.34C44.4509 9.34 43.6376 9.36 42.6909 9.4C42.3843 11.6933 42.2309 13.4067 42.2309 14.54C42.2309 15.6733 42.3243 16.46 42.5109 16.9C41.3776 16.6067 40.6043 16.22 40.1909 15.74C39.7776 15.2467 39.5709 14.5667 39.5709 13.7C39.5709 13.1933 39.7109 11.9067 39.9909 9.84C40.0043 9.78667 40.0109 9.75333 40.0109 9.74C39.6109 9.84667 39.2909 9.95333 39.0509 10.06C39.0243 9.76667 39.0109 9.54667 39.0109 9.4C39.0109 8.46666 39.4376 7.89333 40.2909 7.68C40.5709 5.30666 40.7109 3.37333 40.7109 1.88C40.7109 1.48 40.6843 0.933331 40.6309 0.239998C41.9643 0.293331 42.8043 0.533331 43.1509 0.959998C43.3243 1.2 43.4309 1.43333 43.4709 1.66C43.5243 1.87333 43.5509 2.22666 43.5509 2.72C43.5509 3.2 43.4576 4.06666 43.2709 5.32C43.0843 6.56 42.9776 7.3 42.9509 7.54C45.1643 7.54 47.0709 7.52667 48.6709 7.5C48.9509 5.20667 49.0909 3.33333 49.0909 1.88C49.0909 1.48 49.0643 0.933331 49.0109 0.239998C50.3443 0.293331 51.1776 0.533331 51.5109 0.959998C51.6976 1.2 51.8109 1.43333 51.8509 1.66C51.9043 1.87333 51.9309 2.22666 51.9309 2.72C51.9309 3.2 51.7043 4.97333 51.2509 8.04C50.8109 11.0933 50.5909 13.2267 50.5909 14.44C50.5909 15.64 50.6843 16.46 50.8709 16.9C49.7376 16.6067 48.9643 16.22 48.5509 15.74C48.1509 15.26 47.9509 14.6467 47.9509 13.9C47.9509 13.1533 48.0843 11.8 48.3509 9.84L48.4709 8.98C48.1776 9.23333 47.7043 9.36 47.0509 9.36ZM58.4712 6.34C58.4712 6.54 58.3046 7.59333 57.9712 9.5C57.6512 11.3933 57.4846 12.96 57.4712 14.2C57.4712 15.4267 57.5512 16.22 57.7112 16.58C56.6712 16.3133 55.9712 15.9133 55.6112 15.38C55.2512 14.8333 55.0712 14.04 55.0712 13C55.0712 12.44 55.1779 11.4267 55.3912 9.96C55.6046 8.49333 55.7112 7.35333 55.7112 6.54C55.7112 5.72666 55.6712 5.1 55.5912 4.66C55.8846 4.63333 56.1579 4.62 56.4112 4.62C57.1846 4.62 57.7179 4.75333 58.0112 5.02C58.3179 5.27333 58.4712 5.71333 58.4712 6.34ZM58.7712 2.86C58.3979 2.91333 58.0712 2.94 57.7912 2.94C56.4179 2.94 55.7312 2.46 55.7312 1.5C55.7312 1.15333 55.8312 0.679998 56.0312 0.0799975C56.4046 0.0266649 56.7312 -1.43051e-06 57.0112 -1.43051e-06C58.3846 -1.43051e-06 59.0712 0.479998 59.0712 1.44C59.0712 1.78666 58.9712 2.26 58.7712 2.86ZM64.097 9.78C64.577 8.04667 65.1504 6.77333 65.817 5.96C66.497 5.13333 67.1237 4.72 67.697 4.72C68.2837 4.72 68.7237 4.94 69.017 5.38C69.3104 5.80667 69.457 6.36667 69.457 7.06C69.457 7.74 69.2504 8.36667 68.837 8.94C68.437 9.51333 67.8837 9.8 67.177 9.8C66.9904 9.8 66.7704 9.74667 66.517 9.64C66.9304 9.12 67.137 8.49333 67.137 7.76C67.137 7.33333 66.9637 7.12 66.617 7.12C66.3637 7.12 66.0904 7.3 65.797 7.66C65.5037 8.00666 65.2237 8.49333 64.957 9.12C64.6904 9.73333 64.4637 10.5267 64.277 11.5C64.1037 12.46 64.017 13.4867 64.017 14.58C64.017 14.7133 64.0504 15.28 64.117 16.28C63.6904 16.3067 63.417 16.32 63.297 16.32C62.537 16.32 61.9904 16.1867 61.657 15.92C61.3237 15.6533 61.157 15.2133 61.157 14.6C61.157 14.3333 61.297 13.3067 61.577 11.52C61.857 9.73333 61.997 8.31333 61.997 7.26C61.997 6.19333 61.8837 5.21333 61.657 4.32C62.6304 4.62666 63.3104 5.06666 63.697 5.64C64.0837 6.2 64.277 6.86 64.277 7.62C64.277 8.36667 64.217 9.08667 64.097 9.78ZM74.8348 11.36C74.1948 11.36 73.5682 11.2867 72.9548 11.14C72.9415 11.2733 72.9348 11.48 72.9348 11.76C72.9348 12.8667 73.1415 13.7 73.5548 14.26C73.9682 14.82 74.4615 15.1 75.0348 15.1C75.6082 15.1 76.1548 14.9267 76.6748 14.58C77.1948 14.2333 77.6482 13.7533 78.0348 13.14C78.5148 13.2467 78.7548 13.4933 78.7548 13.88C77.5815 15.68 76.0682 16.58 74.2148 16.58C73.0948 16.58 72.1148 16.1533 71.2748 15.3C70.4348 14.4333 70.0148 13.2333 70.0148 11.7C70.0148 10.5533 70.2348 9.46666 70.6748 8.44C71.1148 7.4 71.8148 6.52667 72.7748 5.82C73.7348 5.1 74.7948 4.74 75.9548 4.74C77.1282 4.74 77.9882 5.00667 78.5348 5.54C79.0815 6.07333 79.3548 6.77333 79.3548 7.64C79.3548 8.89333 78.9148 9.82666 78.0348 10.44C77.1682 11.0533 76.1015 11.36 74.8348 11.36ZM75.6748 5.98C74.9948 5.98 74.4215 6.4 73.9548 7.24C73.4882 8.08 73.1815 9.1 73.0348 10.3H73.3348C74.4948 10.3 75.3482 10 75.8948 9.4C76.4548 8.8 76.7348 8.08 76.7348 7.24C76.7348 6.89333 76.6415 6.6 76.4548 6.36C76.2815 6.10666 76.0215 5.98 75.6748 5.98Z"
                fill="black"
              />
            </svg>
          </Box>

          <IconButton size="small">
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#000000"
                id="Bell-Thin--Streamline-Phosphor-Thin"
                height="30"
                width="30"
              >
                <desc>Bell Thin Streamline Icon: https://streamlinehq.com</desc>
                <path
                  d="M15.0872 11.9237c-0.4525125 -0.78425 -1.12539375 -2.96994375 -1.12539375 -5.803425 0 -4.588225 -4.9669 -7.4558625 -8.9404125 -5.16175 -1.84411875 1.0647 -2.9801375 3.03235 -2.9801375 5.16175 0 2.83348125 -0.67366875 5.019175 -1.12618125 5.79950625 -0.36524375 0.62564375 0.08375625 1.4120625 0.80820625 1.41555 0.001425 0.00000625 0.00285 0.0000125 0.004275 0.0000125h3.468725c0.24528125 2.15948125 2.73629375 3.24363125 4.48381875 1.9514625 0.63011875 -0.465925 1.03823125 -1.1728 1.12668125 -1.9514625h3.46871875c0.72298125 -0.00255 1.17319375 -0.785525 0.81169375 -1.41164375Zm-7.08566875 3.2938375c-1.0914875 -0.000125 -2.017225 -0.80190625 -2.17315 -1.88219375h4.34629375c-0.155925 1.0802875 -1.0816625 1.88206875 -2.17314375 1.88219375Zm6.5445375 -2.66644375c-0.0546125 0.09755625 -0.1579875 0.15765625 -0.26978125 0.15685H1.72755625c-0.11179375 0.00080625 -0.21516875 -0.05929375 -0.26978125 -0.15685 -0.0560375 -0.09705625 -0.0560375 -0.2166375 0 -0.31369375 0.58348125 -1.0061875 1.210875 -3.34716875 1.210875 -6.117125 0 -4.10525 4.44406875 -6.67103125 7.99931875 -4.61840625 1.64999375 0.952625 2.6664375 2.71315 2.6664375 4.61840625 0 2.769175 0.6274 5.1109375 1.210875 6.117125 0.05628125 0.09691875 0.05658125 0.2165 0.0007875 0.3137Z"
                  stroke-width="0.0625"
                ></path>
              </svg>
            </Box>
          </IconButton>
        </Box>

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            overflow:"auto"
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
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ddd",
                  height: "6rem",
                  width: "6rem",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-2.5rem",
                  ml: "0.5rem",
                  border: "solid #fff",
                }}
              >
                <Avatar
                  src="https://imgs.search.brave.com/sgSqeqpujrTJDQYBggmQDyLTjvjcKb7a4MsC7A2-fuU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vdXNlci1wcm9m/aWxlLXBuZy1wcm9m/ZXNzaW9uYWwtYnVz/aW5lc3NtYW4tc3Rp/Y2tlci10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kXzUzODc2LTEw/NDg5MjkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw"
                  sx={{ height: "100%", width: "100%" }}
                />
              </Box>
            </Box>
          </Box>

          {/* lower */}

          <Box sx={{ width: "100%", boxSizing: "border-box", px: 2 }}>
            {/* Info */}
            <Box
              sx={{
                width: "100%",
                height: "10rem",
                boxSizing: "border-box",
                bgcolor: "#dddddd00",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "system-ui",
                  fontWeight: 500,
                  fontSize: "1.5rem",
                  color: "#040407e9",
                }}
              >
                Khalid Arrazani
              </Typography>

              <Typography
                sx={{
                  fontFamily: "system-ui",
                  fontWeight: 450,
                  fontSize: "1rem",
                  color: "#040510c7",
                }}
              >
                Full Stack Web Developer | React • MUI • Node.js • MongoDB •
                GSAP
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#0405109a",
                  mt: 0.5,
                }}
              >
                Oulad Berhil , souss-Massa , Morocco
              </Typography>
            </Box>


            <Paper
              elevation={0}
              sx={{
                borderRadius: "1rem",
                p: "1rem",

                width: "100%",

                boxSizing: "border-box",
                border: "1px dashed #ddd",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb:1
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      bgcolor: "#eef4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                    >
                      <g id="motion-photos-on">
                        <path
                          id="Union"
                          fill="#000000c8"
                          d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography variant="h6" sx={{fontFamily:"system-ui",color:"#0b0317d8"}} >Experience</Typography>
                </Box>

                <Button
                  // onClick={()=>{setExperienceOpen(true)}}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Add-1--Streamline-Core"
                    height="24"
                    width="24"
                  >
                    <desc>Add 1 Streamline Icon: https://streamlinehq.com</desc>
                    <g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math">
                      <path
                        id="Vector"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 0.5v13"
                        stroke-width="0.8"
                      ></path>
                      <path
                        id="Vector_2"
                        stroke="#000000f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M0.5 6.95996h13"
                        stroke-width="0.8"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </Box>

              <Divider />

              <Box
                sx={{
                  pt: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                

                <Typography
                  variant="h5"
                  sx={{ color: "#000000af",fontFamily:"monospace",mb:0.6 }}
                >
                  No experience added yet
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    maxWidth: 500,fontFamily:"monospace",
                    
                    color: "#00000077",
                    fontSize:"0.8rem"
                  }}
                >
                  Add your work experience to highlight your professional
                  journey.
                </Typography>

                <Button
                  startIcon={<AddIcon />}
                  // onClick={()=>{setExperienceOpen(true)}}

                  sx={{
                    textTransform: "none",
                    fontWeight: 400,
                    fontFamily:"system-ui",border:"1px solid #ddd",mt:2,borderRadius:"15px"
                  }}
                >
                  Add Experience
                </Button>
              </Box>
            </Paper>


            <Paper
              elevation={0}
              sx={{
                borderRadius: "1rem",
                p: "1rem",

                width: "100%",

                boxSizing: "border-box",
                border: "1px dashed #ddd",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb:1
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      bgcolor: "#eef4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                    >
                      <g id="motion-photos-on">
                        <path
                          id="Union"
                          fill="#000000c8"
                          d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography variant="h6" sx={{fontFamily:"system-ui",color:"#0b0317d8"}} >Experience</Typography>
                </Box>

                <Button
                  // onClick={()=>{setExperienceOpen(true)}}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Add-1--Streamline-Core"
                    height="24"
                    width="24"
                  >
                    <desc>Add 1 Streamline Icon: https://streamlinehq.com</desc>
                    <g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math">
                      <path
                        id="Vector"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 0.5v13"
                        stroke-width="0.8"
                      ></path>
                      <path
                        id="Vector_2"
                        stroke="#000000f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M0.5 6.95996h13"
                        stroke-width="0.8"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </Box>

              <Divider />

              <Box
                sx={{
                  pt: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                

                <Typography
                  variant="h5"
                  sx={{ color: "#000000af",fontFamily:"monospace",mb:0.6 }}
                >
                  No experience added yet
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    maxWidth: 500,fontFamily:"monospace",
                    
                    color: "#00000077",
                    fontSize:"0.8rem"
                  }}
                >
                  Add your work experience to highlight your professional
                  journey.
                </Typography>

                <Button
                  startIcon={<AddIcon />}
                  // onClick={()=>{setExperienceOpen(true)}}

                  sx={{
                    textTransform: "none",
                    fontWeight: 400,
                    fontFamily:"system-ui",border:"1px solid #ddd",mt:2,borderRadius:"15px"
                  }}
                >
                  Add Experience
                </Button>
              </Box>
              
            </Paper>


            <Paper
              elevation={0}
              sx={{
                borderRadius: "1rem",
                p: "1rem",

                width: "100%",

                boxSizing: "border-box",
                border: "1px dashed #ddd",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb:1
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      bgcolor: "#eef4ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                    >
                      <g id="motion-photos-on">
                        <path
                          id="Union"
                          fill="#000000c8"
                          d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography variant="h6" sx={{fontFamily:"system-ui",color:"#0b0317d8"}} >Experience</Typography>
                </Box>

                <Button
                  // onClick={()=>{setExperienceOpen(true)}}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Add-1--Streamline-Core"
                    height="24"
                    width="24"
                  >
                    <desc>Add 1 Streamline Icon: https://streamlinehq.com</desc>
                    <g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math">
                      <path
                        id="Vector"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 0.5v13"
                        stroke-width="0.8"
                      ></path>
                      <path
                        id="Vector_2"
                        stroke="#000000f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M0.5 6.95996h13"
                        stroke-width="0.8"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </Box>

              <Divider />

              <Box
                sx={{
                  pt: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                

                <Typography
                  variant="h5"
                  sx={{ color: "#000000af",fontFamily:"monospace",mb:0.6 }}
                >
                  No experience added yet
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    maxWidth: 500,fontFamily:"monospace",
                    
                    color: "#00000077",
                    fontSize:"0.8rem"
                  }}
                >
                  Add your work experience to highlight your professional
                  journey.
                </Typography>

                <Button
                  startIcon={<AddIcon />}
                  // onClick={()=>{setExperienceOpen(true)}}

                  sx={{
                    textTransform: "none",
                    fontWeight: 400,
                    fontFamily:"system-ui",border:"1px solid #ddd",mt:2,borderRadius:"15px"
                  }}
                >
                  Add Experience
                </Button>
              </Box>
            </Paper>



          </Box>
        </Box>

        {/* Bottom Navbar */}
        <Box
          sx={{
            height: "4.9rem",
            width: "95%",
            bgcolor: "#faeefd",
            borderBottom: "1px #ddd solid",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "30px",
            mb: 0.9,
            placeSelf: "center",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              bgcolor: "#faeefd",

              display: "flex",

              alignItems: "center",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              id="Home-1--Streamline-Plump"
              height="28"
              width="28"
            >
              <g id="home-1--home-house-roof-shelter">
                <path
                  id="Vector 705"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M26.8148 4.15979c7.2347 3.21132 12.7189 7.42931 15.5541 9.86701 1.4328 1.232 2.2317 3.0051 2.3306 4.8921C44.8354 21.5103 45 25.5652 45 30c0 3.4116 -0.0974 6.7062 -0.2042 9.293 -0.1239 3.0011 -2.5102 5.3682 -5.5121 5.4707 -3.4603 0.1181 -8.5948 0.2363 -15.2836 0.2363 -6.6889 0 -11.8234 -0.1182 -15.28377 -0.2363 -3.00187 -0.1025 -5.38809 -2.4695 -5.51204 -5.4706C3.09745 36.7063 3 33.4116 3 30c0 -4.4348 0.16468 -8.4898 0.30058 -11.0812 0.09897 -1.887 0.89784 -3.66 2.33063 -4.8919 2.83511 -2.4377 8.31939 -6.65576 15.55409 -9.86711 1.7913 -0.79509 3.8383 -0.79509 5.6295 0Z"
                  stroke-width="2"
                ></path>
                <path
                  id="Vector 1068"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16 38 16 0"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
            <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
              Home
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#faeefd",

              display: "flex",

              alignItems: "center",
              flexDirection: "column",
              gap: 0.5,
              scale: 1.2,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              id="Building-Office--Streamline-Plump"
              height="28"
              width="28"
            >
              <desc>
                Building Office Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="building-office--travel-places-building-office">
                <path
                  id="Rectangle 57"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M28.61 3.492a5.37 5.37 0 0 1 4.899 4.995C33.748 11.807 34 16.973 34 24c0 8.605 -0.189 14.836 -0.324 18.182A2.939 2.939 0 0 1 30.722 45L18.5 45 6.288 45a2.948 2.948 0 0 1 -2.96 -2.83C3.193 38.746 3 32.383 3 24c0 -6.858 0.258 -12.082 0.5 -15.467a5.417 5.417 0 0 1 4.933 -5.045C11.098 3.242 14.689 3 18.5 3c3.831 0 7.44 0.244 10.11 0.492Z"
                  stroke-width="2"
                ></path>
                <path
                  id="Subtract"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m30.722 45 11.07 0a2.957 2.957 0 0 0 2.968 -2.836c0.106 -2.688 0.24 -7 0.24 -11.664 0 -3.563 -0.156 -6.775 -0.325 -9.202 -0.188 -2.72 -2.296 -4.858 -5.017 -5.047a103.875 103.875 0 0 0 -5.775 -0.241"
                  stroke-width="2"
                ></path>
                <path
                  id="Intersect"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m23.416 45 0.006 -0.105c0.043 -1.1 0.078 -2.677 0.078 -4.895 0 -2.218 -0.035 -3.795 -0.078 -4.895 -0.059 -1.488 -0.89 -2.746 -2.365 -2.95A18.78 18.78 0 0 0 18.5 32a18.78 18.78 0 0 0 -2.557 0.155c-1.475 0.204 -2.306 1.462 -2.365 2.95 -0.043 1.1 -0.078 2.677 -0.078 4.895a126.983 126.983 0 0 0 0.084 5"
                  stroke-width="2"
                ></path>
                <path
                  id="Vector 860"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 12v2"
                  stroke-width="2"
                ></path>
                <path
                  id="Vector 862"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 23v2"
                  stroke-width="2"
                ></path>
                <path
                  id="Vector 861"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24 12v2"
                  stroke-width="2"
                ></path>
                <path
                  id="Vector 863"
                  stroke="#b611b9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M24 23v2"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.8rem",
                color: "#b611b9",
              }}
            >
              Companies
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#faeefd",

              display: "flex",

              alignItems: "center",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              id="Bookmark--Streamline-Plump"
              height="28"
              width="28"
            >
              <desc>Bookmark Streamline Icon: https://streamlinehq.com</desc>
              <g id="bookmark--bookmarks-tags-favorite">
                <path
                  id="Rectangle 56"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.499 8.812c0.132 -1.787 1.193 -3.3 2.936 -3.711C13.688 4.569 17.598 4 24 4s10.312 0.57 12.565 1.1c1.743 0.412 2.804 1.925 2.936 3.712 0.22 2.971 0.499 8.455 0.499 17.188 0 6.946 -0.102 11.486 -0.231 14.451 -0.137 3.147 -2.573 4.21 -5.206 2.48l-7.271 -4.77a6 6 0 0 0 -6.584 0l-7.27 4.77c-2.634 1.73 -5.07 0.667 -5.207 -2.48C8.101 37.486 8 32.946 8 26c0 -8.733 0.278 -14.217 0.499 -17.188Z"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
            <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
              Save
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#faeefd",

              display: "flex",

              alignItems: "center",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Bag-Suitcase-4--Streamline-Flex"
              height="28"
              width="28"
            >
              <desc>
                Bag Suitcase 4 Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="bag-suitcase-4--product-business-briefcase">
                <path
                  id="Intersect"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.00023 3.63989c-1.47511 0 -3.01706 0 -4.30967 0.23102 -0.61959 0.11073 -1.10769 0.58388 -1.24071 1.19907 -0.20962 0.96937 -0.20962 1.87358 -0.20962 3.24991 0 1.37634 0 2.28051 0.20962 3.24991 0.13302 0.6152 0.62112 1.0883 1.24071 1.1991 1.29261 0.231 2.83456 0.231 4.30967 0.231 1.47512 0 3.01707 0 4.30967 -0.231 0.6196 -0.1108 1.1077 -0.5839 1.2407 -1.1991 0.2096 -0.9694 0.2096 -1.87357 0.2096 -3.24991 0 -1.37633 0 -2.28054 -0.2096 -3.24991 -0.133 -0.61519 -0.6211 -1.08834 -1.2407 -1.19907 -1.2926 -0.23102 -2.83455 -0.23102 -4.30967 -0.23102Z"
                  stroke-width="0.6"
                ></path>
                <path
                  id="Vector 194"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.59961 3.64V3c0 -1.10457 0.89543 -2 2 -2h0.8c1.10457 0 2 0.89543 2 2v0.64"
                  stroke-width="0.6"
                ></path>
                <path
                  id="Vector 2184"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1.24707 7 6.3703 8.71027c0.41105 0.13722 0.85555 0.13722 1.2666 0L12.7601 7"
                  stroke-width="0.6"
                ></path>
              </g>
            </svg>
            <Typography sx={{ fontFamily: "monospace", fontSize: "0.8rem" }}>
              Apply
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

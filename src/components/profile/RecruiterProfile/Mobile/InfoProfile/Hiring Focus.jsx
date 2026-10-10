import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Chip,
  Paper,
  Button,
  Divider,
} from "@mui/material";

export default function Hiring_Focus({ state }) {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "1rem",
          p: "1rem",

          width: "100%",

          boxSizing: "border-box",
          border: "1px dashed #ddd",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
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
                id="Iris-Scan-1--Streamline-Ultimate"
                height="30"
                width="30"
              >
                <desc>
                  Iris Scan 1 Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  fill="#e3e3e3"
                  d="M21.0355 12s-3.9288 5.5 -9.0356 5.5c-5.10671 0 -9.03554 -5.5 -9.03554 -5.5s3.92883 -5.5 9.03554 -5.5c5.1068 0 9.0356 5.5 9.0356 5.5Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ffffff"
                  d="m7.72644 16.2735 8.54606 -8.547C14.978 6.95579 13.5061 6.53326 11.9999 6.5 6.89319 6.5 2.96436 12 2.96436 12c1.2969 1.7183 2.91397 3.1695 4.76208 4.2735Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.0355 12s-3.9288 5.5 -9.0356 5.5c-5.10671 0 -9.03554 -5.5 -9.03554 -5.5s3.92883 -5.5 9.03554 -5.5c5.1068 0 9.0356 5.5 9.0356 5.5Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1.4585 4.20831V2.37498c0 -0.24312 0.09657 -0.47627 0.26848 -0.64818 0.17191 -0.17191 0.40506 -0.26849 0.64818 -0.26849H4.2085"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22.5415 4.20831V2.37498c0 -0.24312 -0.0966 -0.47627 -0.2685 -0.64818 -0.1719 -0.17191 -0.4051 -0.26849 -0.6482 -0.26849h-1.8333"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M1.4585 19.7917v1.8333c0 0.2431 0.09657 0.4763 0.26848 0.6482s0.40506 0.2685 0.64818 0.2685H4.2085"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22.5415 19.7917v1.8333c0 0.2431 -0.0966 0.4763 -0.2685 0.6482s-0.4051 0.2685 -0.6482 0.2685h-1.8333"
                  stroke-width="1"
                ></path>
                <path
                  fill="#66e1ff"
                  d="M11.9998 15.2084c1.772 0 3.2084 -1.4365 3.2084 -3.2084s-1.4364 -3.20831 -3.2084 -3.20831c-1.7719 0 -3.2083 1.43641 -3.2083 3.20831s1.4364 3.2084 3.2083 3.2084Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#c2f3ff"
                  d="M9.73124 14.2688C9.12953 13.6671 8.7915 12.8509 8.7915 12c0 -0.8509 0.33803 -1.667 0.93974 -2.26876C10.333 9.12953 11.1491 8.7915 12 8.7915s1.6671 0.33803 2.2688 0.93974L9.73124 14.2688Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.9998 15.2084c1.772 0 3.2084 -1.4365 3.2084 -3.2084s-1.4364 -3.20831 -3.2084 -3.20831c-1.7719 0 -3.2083 1.43641 -3.2083 3.20831s1.4364 3.2084 3.2083 3.2084Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  d="M12.0002 12.2291c-0.1266 0 -0.2292 -0.1025 -0.2292 -0.2291s0.1026 -0.2292 0.2292 -0.2292"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  d="M12 12.2291c0.1266 0 0.2292 -0.1025 0.2292 -0.2291s-0.1026 -0.2292 -0.2292 -0.2292"
                  stroke-width="1"
                ></path>
              </svg>
            </Box>

            <Typography
              variant="h6"
              sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
            >
              Hiring Focus
            </Typography>
          </Box>

          <Button
            //   onClick={onClick}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000000"
              id="Pencil-Simple-Light--Streamline-Phosphor"
              height="24"
              width="24"
            >
              <desc>
                Pencil Simple Light Streamline Icon: https://streamlinehq.com
              </desc>
              <path
                d="m15.5115375 4.0630625 -3.575 -3.575c-0.43736875 -0.43741875 -1.1465375 -0.43741875 -1.58390625 0L0.48838125 10.35310625c-0.21046875 0.20974375 -0.32853125 0.49481875 -0.32798125 0.79195625v3.575c0 0.618525 0.5014125 1.1199375 1.1199375 1.1199375h3.575c0.2971375 0.00055 0.5822125 -0.1175125 0.79195625 -0.32798125L15.5115375 5.64696875c0.43741875 -0.43736875 0.43741875 -1.1465375 0 -1.58390625ZM4.96813125 14.83285625c-0.02986875 0.03004375 -0.07043125 0.04701875 -0.11279375 0.04719375h-3.575c-0.0883625 0.00000625 -0.1599875 -0.071625 -0.1599875 -0.1599875v-3.575c0.000175 -0.0423625 0.01715 -0.082925 0.04719375 -0.11279375L8.31994375 3.87906875l3.8005875 3.8013875ZM14.832375 4.9686125l-2.03268125 2.03268125 -3.8005875 -3.80058125 2.03268125 -2.0334875c0.0625 -0.0625625 0.16389375 -0.0625625 0.2263875 0l3.5742 3.575c0.0625625 0.06249375 0.0625625 0.1638875 0 0.2263875Z"
                stroke-width="0.0625"
              ></path>
            </svg>
          </Button>
        </Box>

        <Box sx={{ width: "100%", height: " 3rem", bgcolor: "#ddd" }}></Box>
      </Paper>
    </>
  );
}

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

const Icons = {
  LinkDine: (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
          fill="#0A66C2"
        />
      </g>
    </svg>
  ),
  Facebook: (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 408.788 408.788"
      xmlSpace="preserve"
    >
      <path
        style={{
          fill: "#475993",
        }}
        d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"
      />
    </svg>
  ),

  Github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      class="bi bi-github"
      viewBox="0 0 16 16"
      id="Github--Streamline-Bootstrap"
      height="50"
      width="50"
    >
      <desc>Github Streamline Icon: https://streamlinehq.com</desc>
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55 -0.17 0.55 -0.38 0 -0.19 -0.01 -0.82 -0.01 -1.49 -2.01 0.37 -2.53 -0.49 -2.69 -0.94 -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 0.63 -0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07 -0.52 0.28 -0.87 0.51 -1.07 -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 0 -0.87 0.31 -1.59 0.82 -2.15 -0.08 -0.2 -0.36 -1.02 0.08 -2.12 0 0 0.67 -0.21 2.2 0.82 0.64 -0.18 1.32 -0.27 2 -0.27s1.36 0.09 2 0.27c1.53 -1.04 2.2 -0.82 2.2 -0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07 -1.87 3.75 -3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07 -0.01 1.93 -0.01 2.2 0 0.21 0.15 0.46 0.55 0.38A8.01 8.01 0 0 0 16 8c0 -4.42 -3.58 -8 -8 -8"
        stroke-width="1"
      ></path>
    </svg>
  ),
  instagram: (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 551.034 551.034"
      style={{
        enableBackground: "new 0 0 551.034 551.034",
      }}
      xmlSpace="preserve"
    >
      <g id="XMLID_13_">
        <linearGradient
          id="XMLID_2_"
          gradientUnits="userSpaceOnUse"
          x1={275.517}
          y1={4.5714}
          x2={275.517}
          y2={549.7202}
          gradientTransform="matrix(1 0 0 -1 0 554)"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#E09B3D",
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#C74C4D",
            }}
          />
          <stop
            offset={0.6}
            style={{
              stopColor: "#C21975",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#7024C4",
            }}
          />
        </linearGradient>
        <path
          id="XMLID_17_"
          style={{
            fill: "url(#XMLID_2_)",
          }}
          d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
        />
        <linearGradient
          id="XMLID_3_"
          gradientUnits="userSpaceOnUse"
          x1={275.517}
          y1={4.5714}
          x2={275.517}
          y2={549.7202}
          gradientTransform="matrix(1 0 0 -1 0 554)"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#E09B3D",
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#C74C4D",
            }}
          />
          <stop
            offset={0.6}
            style={{
              stopColor: "#C21975",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#7024C4",
            }}
          />
        </linearGradient>
        <path
          id="XMLID_81_"
          style={{
            fill: "url(#XMLID_3_)",
          }}
          d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"
        />
        <linearGradient
          id="XMLID_4_"
          gradientUnits="userSpaceOnUse"
          x1={418.306}
          y1={4.5714}
          x2={418.306}
          y2={549.7202}
          gradientTransform="matrix(1 0 0 -1 0 554)"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#E09B3D",
            }}
          />
          <stop
            offset={0.3}
            style={{
              stopColor: "#C74C4D",
            }}
          />
          <stop
            offset={0.6}
            style={{
              stopColor: "#C21975",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#7024C4",
            }}
          />
        </linearGradient>
        <circle
          id="XMLID_83_"
          style={{
            fill: "url(#XMLID_4_)",
          }}
          cx={418.306}
          cy={134.072}
          r={34.149}
        />
      </g>
    </svg>
  ),
  X: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      id="X-Twitter-Logo--Streamline-Logos"
      height="50"
      width="50"
    >
      <desc>X Twitter Logo Streamline Icon: https://streamlinehq.com</desc>
      <path
        fill="#000000"
        fill-rule="evenodd"
        d="m13.458 9.12244 7.5158 -7.9657h2.4916l-0.0107 0.01176 -8.8892 9.424 8.1385 10.8018c0.2068 0.2744 0.2405 0.6422 0.0872 0.9498 -0.1435 0.2878 -0.4278 0.4764 -0.7453 0.4994h-5.0964c-0.2598 -0.0188 -0.5001 -0.1488 -0.6582 -0.3585l-5.7269 -7.6011 -7.47199 7.9596H0.534546l8.922324 -9.4297L1.31843 2.61205c-0.20678 -0.27444 -0.24055 -0.64223 -0.08721 -0.94974 0.15333 -0.30752 0.4674 -0.50186 0.81102 -0.50186h4.96503c0.28455 0 0.55258 0.13365 0.72381 0.36092L13.458 9.12244Zm-0.7628 1.99966c-0.0257 -0.0299 -0.0491 -0.0611 -0.0703 -0.0934L6.55538 2.97297H3.85973L17.467 21.0334h2.6957l-7.4675 -9.9113Z"
        clip-rule="evenodd"
        stroke-width="1"
      ></path>
    </svg>
  ),
  Link: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      id="Captive-Portal--Streamline-Rounded-Material"
      height="50"
      width="50"
    >
      <desc>Captive Portal Streamline Icon: https://streamlinehq.com</desc>
      <path
        fill="#20035ecb"
        d="M17.75 18.825v1.825c0 0.2125 -0.07235 0.3906 -0.217 0.53425 -0.1445 0.14385 -0.32365 0.21575 -0.5375 0.21575 -0.21365 0 -0.39135 -0.0719 -0.533 -0.21575 -0.14165 -0.14365 -0.2125 -0.32175 -0.2125 -0.53425V17c0 -0.20835 0.0729 -0.3854 0.21875 -0.53125 0.14585 -0.14585 0.3229 -0.21875 0.53125 -0.21875h3.65c0.2125 0 0.39065 0.07235 0.5345 0.217 0.14365 0.1445 0.2155 0.32365 0.2155 0.5375 0 0.21365 -0.07185 0.39135 -0.2155 0.533 -0.14385 0.14165 -0.322 0.2125 -0.5345 0.2125h-1.85l2.675 2.675c0.15 0.15 0.225 0.32635 0.225 0.529 0 0.20265 -0.07175 0.37765 -0.21525 0.525 -0.1565 0.14735 -0.33865 0.221 -0.5465 0.221 -0.20765 0 -0.3871 -0.075 -0.53825 -0.225l-2.65 -2.65ZM12 22c-1.38335 0 -2.68335 -0.2625 -3.9 -0.7875 -1.21665 -0.525 -2.275 -1.2375 -3.175 -2.1375 -0.9 -0.9 -1.6125 -1.953 -2.1375 -3.159C2.2625 14.71 2 13.42135 2 12.05c0 -1.3915 0.2625 -2.69925 0.7875 -3.92325 0.525 -1.22385 1.2375 -2.2884 2.1375 -3.19375 0.9 -0.905335 1.95835 -1.6205 3.175 -2.1455C9.31665 2.2625 10.61665 2 12 2s2.68335 0.2625 3.9 0.7875c1.21665 0.525 2.275 1.240165 3.175 2.1455 0.9 0.90535 1.6125 1.9699 2.1375 3.19375C21.7375 9.35075 22 10.6585 22 12.05c0 0.23335 -0.00835 0.47085 -0.025 0.7125 -0.01665 0.24165 -0.04165 0.47915 -0.075 0.7125s-0.13335 0.42085 -0.3 0.5625 -0.36465 0.2125 -0.594 0.2125c-0.204 0 -0.3685 -0.07915 -0.4935 -0.2375s-0.17085 -0.3375 -0.1375 -0.5375c0.03335 -0.23335 0.0625 -0.47085 0.0875 -0.7125 0.025 -0.24165 0.0375 -0.47915 0.0375 -0.7125 0 -0.37915 -0.0246 -0.75835 -0.07375 -1.1375 -0.049 -0.37915 -0.1226 -0.75835 -0.22075 -1.1375H16.2c0.03335 0.38335 0.06665 0.7639 0.1 1.14175 0.03335 0.37765 0.05 0.7554 0.05 1.13325 0 0.23335 -0.00835 0.47085 -0.025 0.7125 -0.01665 0.24165 -0.03335 0.47915 -0.05 0.7125 -0.01665 0.21665 -0.10215 0.4 -0.2565 0.55 -0.1545 0.15 -0.3411 0.225 -0.55975 0.225 -0.20585 0 -0.3754 -0.075 -0.50875 -0.225 -0.13335 -0.15 -0.19165 -0.325 -0.175 -0.525 0.03335 -0.23335 0.05415 -0.475 0.0625 -0.725 0.00835 -0.25 0.0125 -0.49165 0.0125 -0.725 0 -0.37915 -0.0125 -0.75835 -0.0375 -1.1375 -0.025 -0.37915 -0.0625 -0.75835 -0.1125 -1.1375H9.3355c-0.057 0.38335 -0.098 0.7625 -0.123 1.1375 -0.025 0.375 -0.0375 0.75 -0.0375 1.125s0.0125 0.74585 0.0375 1.1125c0.025 0.36665 0.0625 0.73335 0.1125 1.1H13.5c0.2125 0 0.39065 0.07235 0.5345 0.217 0.14365 0.1445 0.2155 0.32365 0.2155 0.5375 0 0.21365 -0.07185 0.39135 -0.2155 0.533 -0.14385 0.14165 -0.322 0.2125 -0.5345 0.2125h-3.9c0.23335 0.88335 0.51665 1.75 0.85 2.6 0.33335 0.85 0.85 1.56665 1.55 2.15 0.2555 0 0.5111 -0.0125 0.76675 -0.0375 0.2555 -0.025 0.50825 -0.05415 0.75825 -0.0875 0.18335 -0.03335 0.35 0.01665 0.5 0.15 0.15 0.13335 0.225 0.29165 0.225 0.475 0 0.23565 -0.06665 0.4321 -0.2 0.58925 -0.13335 0.15715 -0.30835 0.2524 -0.525 0.28575 -0.25 0.03335 -0.50415 0.0625 -0.7625 0.0875 -0.25835 0.025 -0.5125 0.0375 -0.7625 0.0375ZM3.7945 14.25H7.8c-0.04165 -0.36665 -0.0729 -0.73335 -0.09375 -1.1 -0.02085 -0.36665 -0.03125 -0.73335 -0.03125 -1.1 0 -0.37915 0.00835 -0.75835 0.025 -1.1375s0.04165 -0.75835 0.075 -1.1375H3.79275c-0.0975 0.38 -0.170665 0.76 -0.2195 1.14C3.524415 11.295 3.5 11.675 3.5 12.055c0 0.38 0.024585 0.7506 0.07375 1.11175 0.049 0.361 0.122585 0.7221 0.22075 1.08325ZM9.85 20.225c-0.43335 -0.68335 -0.79585 -1.4 -1.0875 -2.15 -0.29165 -0.75 -0.52085 -1.525 -0.6875 -2.325H4.3c0.55 1.11665 1.30835 2.06665 2.275 2.85s2.05835 1.325 3.275 1.625ZM4.3 8.275h3.73975c0.19015 -0.8 0.4311 -1.57915 0.72275 -2.3375 0.29165 -0.75835 0.6625 -1.4875 1.1125 -2.1875 -1.18335 0.4 -2.2625 0.979165 -3.2375 1.7375 -0.975 0.75835 -1.754165 1.6875 -2.3375 2.7875Zm5.3 0h4.825c-0.21665 -0.9 -0.51665 -1.76665 -0.9 -2.6C13.14165 4.841665 12.63335 4.1 12 3.45c-0.63335 0.666665 -1.14165 1.4125 -1.525 2.2375 -0.38335 0.825 -0.675 1.6875 -0.875 2.5875Zm6.3835 0H19.7c-0.58335 -1.1 -1.35835 -2.03335 -2.325 -2.8 -0.96665 -0.766665 -2.04165 -1.333335 -3.225 -1.7 0.45 0.683335 0.82085 1.40415 1.1125 2.1625 0.29165 0.75835 0.532 1.5375 0.721 2.3375Z"
        stroke-width="0.1"
      ></path>
    </svg>
  ),
};

import AddIcon from "@mui/icons-material/Add";

export default function Social_Links({ state , setSection ,setOpenModal}) {
  const onClick = ()=>{
    setSection("Social Links");
    setOpenModal(true)
  }
  return (
    <>
      {state.user?.profile?.socialLinks.length >= 1 ? (
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
              pb: 1.5,
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
                  viewBox="0 0 14 14"
                  id="Link-Chain--Streamline-Flex"
                  height="24"
                  width="24"
                >
                  <g id="link-chain--create-hyperlink-link-make-unlink-connection-chain">
                    <path
                      id="Vector"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.858 5.143 5.143 8.857"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector 2470"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.235 11.343c-2.353 2.073 -4.535 3.094 -6.603 1.025 -2.051 -2.05 -1.065 -4.212 0.972 -6.542"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector 2471"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.766 2.657C8.118 0.584 10.3 -0.437 12.369 1.632c2.05 2.05 1.064 4.212 -0.973 6.542"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Social Links
              </Typography>
            </Box>

            <Button
             onClick={onClick}
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

          <Divider />

          <Box
            sx={{
              pt: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
              boxSizing: "border-box",
            }}
          >
            {state.user?.profile?.socialLinks?.map((link) => {
              const icone =
                link.platform == "Instagram"
                  ? Icons.instagram
                  : link.platform == "GitHub"
                    ? Icons.Github
                    : link.platform == "Twitter"
                      ? Icons.X
                      : link.platform == "Facebook"
                        ? Icons.Facebook
                        : link.platform == "LinkedIn"
                          ? Icons.LinkDine
                          : Icons.Link;

              return (
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    bgcolor: "#edf6fe98",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                    px: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.4,
                    py: 1,
                    border: "solid 1px #cacaca86",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      height: "3rem",
                      width: "3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    {icone}
                  </Box>

                  <Box
                    sx={{
                      height: "auto",
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      boxSizing: "border-box",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: "#02000fba",
                      }}
                    >
                      {link.platform}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.79rem",
                        fontWeight: 600,
                        fontFamily: "monospace",
                        color: "#3b3b3cc9",
                        width: "100%",
                        boxSizing: "border-box",
                        textWrap: "wrap",
                        textAlign: "start",
                        overflow: "hidden",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {link.url.slice(0, 20)}
                      {link.url.length > 20 ? "..." : null}
                    </Typography>
                  </Box>

                  <IconButton
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      height: "3rem",
                      width: "3rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Square-Top-Down--Streamline-Solar"
                      height="30"
                      width="30"
                    >
                      <desc>
                        Square Top Down Streamline Icon:
                        https://streamlinehq.com
                      </desc>
                      <g id="Line Duotone/Arrows Action/Square Top Down">
                        <path
                          id="Vector"
                          stroke="#737373"
                          stroke-linecap="round"
                          d="M22 12c0 4.714 0 7.0711 -1.4645 8.5355C19.0711 22 16.714 22 12 22c-4.71405 0 -7.07107 0 -8.53553 -1.4645C2 19.0711 2 16.714 2 12c0 -4.71405 0 -7.07107 1.46447 -8.53553C4.92893 2 7.28595 2 12 2"
                          stroke-width="1.5"
                        ></path>
                        <path
                          id="Vector_2"
                          stroke="#000000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m13 11 9 -9m0 0h-5.3438M22 2v5.34375"
                          stroke-width="1.5"
                        ></path>
                      </g>
                    </svg>
                  </IconButton>
                </Box>
              );
            })}
          </Box>
        </Paper>
      ) : (
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
                  viewBox="0 0 14 14"
                  id="Link-Chain--Streamline-Flex"
                  height="24"
                  width="24"
                >
                  <g id="link-chain--create-hyperlink-link-make-unlink-connection-chain">
                    <path
                      id="Vector"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.858 5.143 5.143 8.857"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector 2470"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.235 11.343c-2.353 2.073 -4.535 3.094 -6.603 1.025 -2.051 -2.05 -1.065 -4.212 0.972 -6.542"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector 2471"
                      stroke="#000000c8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.766 2.657C8.118 0.584 10.3 -0.437 12.369 1.632c2.05 2.05 1.064 4.212 -0.973 6.542"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Social Links
              </Typography>
            </Box>

            <Button
              onClick={onClick}
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
              sx={{ color: "#000000af", fontFamily: "monospace", mb: 0.6 }}
            >
              No social links added yet
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 500,
                fontFamily: "monospace",

                color: "#00000077",
                fontSize: "0.8rem",
              }}
            >
              Add your LinkedIn, GitHub, portfolio, Twitter, or other
              professional links to help employers learn more about you.
            </Typography>

            <Button
              startIcon={<AddIcon />}
              onClick={onClick}

              sx={{
                textTransform: "none",
                fontWeight: 400,
                fontFamily: "system-ui",
                border: "1px solid #ddd",
                mt: 2,
                borderRadius: "15px",
              }}
            >
              Add Link
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}

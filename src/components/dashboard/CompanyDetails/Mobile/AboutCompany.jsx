import { useState } from "react";
import { Card, Typography, Box, Button, Collapse } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmptyAboutCompany from "./IfEmpty/EmptyAboutCompany";
export default function AboutCompany({ CompanyInfo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          borderRadius: "15px",
          p: 2.5,
          boxSizing: "border-box",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Info-Circle--Streamline-Solar-Broken"
            height="20"
            width="20"
          >
            <desc>Info Circle Streamline Icon: https://streamlinehq.com</desc>
            <path
              d="M12 17v-6"
              stroke="#398dfa"
              stroke-linecap="round"
              stroke-width="1.2"
            ></path>
            <path
              fill="#398dfa"
              d="M11 8a1 1 0 1 1 2 0 1 1 0 1 1 -2 0"
              stroke-width="1.2"
            ></path>
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.8214 0.48697 -3.52913 1.33782 -5"
              stroke="#398dfa"
              stroke-linecap="round"
              stroke-width="1.2"
            ></path>
          </svg>
          <Typography
            fontWeight={600}
            fontSize="1rem"
            sx={{
              fontWeight: 600,
              fontFamily: "monospace",
              color: "#090909d8",
              fontSize: "1rem",
            }}
          >
            About Company
          </Typography>
        </Box>

        {!CompanyInfo?.description ? (
          <EmptyAboutCompany />
        ) : (
          <>
            <Collapse in={expanded} collapsedSize={200}>
              <Typography
                sx={{
                  mt: 1.5,
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontFamily: "monospace",
                }}
              >
                {CompanyInfo?.description}
              </Typography>
            </Collapse>
            <Button
              size="small"
              onClick={() => setExpanded(!expanded)}
              sx={{
                mt: 1,
                textTransform: "none",
                fontWeight: 600,
                fontFamily: "monospace",
              }}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
          </>
        )}
      </Card>
    </>
  );
}

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
          <InfoOutlinedIcon color="primary" />
          <Typography
            fontWeight={600}
            fontSize="1rem"
            sx={{
              fontWeight: 600,
              fontFamily: "initial",
              color: "#090909d8",
              fontSize: "1.2rem",
            }}
          >
            About Company
          </Typography>
        </Box>

        {!CompanyInfo?.description ? (
          <EmptyAboutCompany />
        ) : (
          <>
            {" "}
            <Collapse in={expanded} collapsedSize={70}>
              <Typography
                sx={{
                  mt: 1.5,
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
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

import React from "react";
import profilePic from "../../images/logo.webp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CompanyLogo: React.FC = () => {
  return (
    <Box
      style={{
        display: "flex",
        position: "fixed",
        top: 45,
        left: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={profilePic}
          alt="Profile-Pic"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "70%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Typography
          variant="h5"
          style={{ display: "inline-block", fontWeight: "bold" }}
        >
          ELITE TECH
        </Typography>
      </div>
    </Box>
  );
};

export default CompanyLogo;

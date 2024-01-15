import React from "react";
// import styles from "../styling/Dashboard.module.css";
import ai1 from "../images/ai1.jpg";
import school from "../images/school.webp";
import { Typography, styled } from "@mui/material";
import logo2 from "../images/logo2.jpg";
import { Container, fontFamily } from "@mui/system";

const StyledImg = styled("img")({
  width: "1200px",
  height: "700px",
});

const StyledImgContainer = styled(Container)({
  display: "flex",
  position: "relative",
  top: "100px",
  left: "-40px",
  width: "1200px",

  // backgroundColor: "#78FFD6",
  // alignItems: "center",
  justifyContent: "space-around",
});

const SoftwareAd: React.FC = () => {
  return (
    <div>
      <StyledImgContainer>
        <Container>
          <Container style={{ display: "flex" }}>
            <StyledImg src={school} />
          </Container>
          <Container
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "200px",
              marginLeft: "25px",
              width: "1200px",
              // backgroundColor: "#78FFD6",
              color: "#023C40",
              fontStyle: "bold",
            }}
          >
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              Best Online Learning Courses{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              BEST DEALS ON SMARTPHONEs{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              GET 20% OFF FOR STUDENTS{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              GET 15% OFF ON SELECT PRODUCTS{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              CODE: STUDENTDIS$45{" "}
            </Typography>
            <Typography variant="h5" style={{ fontFamily: "cursive" }}>
              {" "}
              CODE: GADGETCOOL$23{" "}
            </Typography>
          </Container>
        </Container>
      </StyledImgContainer>
    </div>
  );
};

export default SoftwareAd;

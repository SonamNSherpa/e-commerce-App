import React from "react";
import { Container } from "@mui/system";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "50px", // Adjust the height as needed
  color: "red",
  backgroundColor: "#C3979F",
  width: "100%",
  textAlign: "center",
  padding: "10px",
  fontFamily: "cursive",
  fontSize: "25px",
});

const Header: React.FC = () => {
  return <StyledContainer>Free Delivery on orders above $50</StyledContainer>;
};

export default Header;

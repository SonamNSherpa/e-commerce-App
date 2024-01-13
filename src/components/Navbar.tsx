import React from "react";
import { Link, useLocation } from "react-router-dom";
import { fontSize, styled } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import CompanyLogo from "./shared/CompanyLogo";
import { Container } from "@mui/system";
import Header from "./shared/Header";

const StyledNavbar = styled("nav")({
  position: "absolute",
  top: 30,
  right: 20,
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "10px",
  height: "30px",
});

const StyledListItem = styled("li")({
  margin: "0 40px 10px",
  listStyle: "none",
  display: "inline-block",
});

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  display: "flex", // Add display flex
  alignItems: "center", // Align items center
  "&:hover": {
    textDecoration: "underline",
  },
});

const IconTextContainer = styled("div")({
  marginLeft: "5px", // Adjust as needed
});

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <CompanyLogo />
      <StyledNavbar>
        <ul>
          <StyledListItem>
            <StyledLink
              to="/"
              style={{ color: location.pathname === "/" ? "red" : "white" }}
            >
              <HomeIcon style={{ color: "#3587A4", fontSize: "35px" }} />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="/login"
              style={{
                color: location.pathname === "/login" ? "red" : "white",
              }}
            >
              <LoginIcon style={{ color: "#3587A4", fontSize: "35px" }} />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="/Search"
              style={{
                color: location.pathname === "/HomePage" ? "red" : "white",
              }}
            >
              <SearchIcon style={{ color: "#3587A4", fontSize: "35px" }} />
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="/Cart"
              style={{
                color: location.pathname === "/Cart" ? "red" : "white",
              }}
            >
              <ShoppingCart style={{ color: "#3587A4", fontSize: "35px" }} />{" "}
              Cart
            </StyledLink>
          </StyledListItem>
        </ul>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;

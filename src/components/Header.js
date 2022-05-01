import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/header.scss";
import Logo from "../images/headerLogo.png";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="flexContainer">
        <div className="flexbox">
          <div className="hamberger">
            <MenuIcon />
          </div>
          <img className="flipkartLogo" src={Logo} alt="logo"></img>
        </div>
        <div className="flexbox headerRight">
          <SearchIcon sx={{ cursor: "pointer" }} />
          <AddShoppingCartIcon
            sx={{ padding: "0px 15px", color: "#0099ff", cursor: "pointer" }}
          />
          <AccountCircleIcon sx={{ color: "#0099ff", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;

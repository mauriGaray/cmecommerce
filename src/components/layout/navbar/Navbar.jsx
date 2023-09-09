import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import uuid from "react-uuid";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { CartContext } from "../../../context/CartContext";
import SignInBtn from "../../common/signInBtn/SignInBtn";
import FavoriteBtn from "../../common/favoriteBtn/FavoriteBtn";
import { useUser } from "../../../context/UserContext";

const pages = ["Nosotros", "Contacto", <SignInBtn />, <FavoriteBtn />];

function NavBar() {
  const { data, removeUser } = useUser();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { getTotalItems } = useContext(CartContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  let quantity = getTotalItems();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const logOut = () => {
    removeUser();
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            CMCompany
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem key={uuid()} onClick={handleCloseNavMenu}>
                  <Typography component={"span"} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={uuid()}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          <IconButton sx={{ color: "white", marginLeft: "10px" }}>
            <Badge badgeContent={quantity} color="secondary">
              <Link to={"/checkoutpage"}>
                <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Responsive } from "./Responsive";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Navbar() {
  const classes = useStyles();

  const [setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Responsive displayIn={["Laptop"]}>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src="images/gobeyond_logo_white1.png" alt="logo" />
            </Link>
            <ul className="menu-container">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Categoria 1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Categoria 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Contato
                </Link>
              </li>
              <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <SearchIcon />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="Pesquisar" />
                  </Grid>
                </Grid>
              </div>
              <div className="my-account">
                <div className="person-icon">
                  <PersonIcon />
                </div>
                <li>
                  <Link
                    to="/"
                    className="my-account-link"
                    onClick={closeMobileMenu}
                  >
                    Minha conta
                  </Link>
                </li>
              </div>
              <div className="shop-icon">
                <ShoppingCartIcon />
              </div>
            </ul>
          </div>
        </nav>
      </Responsive>
      <Responsive className="navbar-mobile" displayIn={["Mobile", "Tablet"]}>
        <nav className="navbar-mobile">
          <MenuIcon />
          <img src="images/logo-corebiz-preto-cinza.png" alt="Logo Corebiz" />
          <ShoppingCartIcon />
        </nav>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Pesquisar" />
            </Grid>
          </Grid>
        </div>
      </Responsive>
    </>
  );
}

export default Navbar;

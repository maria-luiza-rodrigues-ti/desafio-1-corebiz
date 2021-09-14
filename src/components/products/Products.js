import React from "react";
import "./Products.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#00e676",
    },
  },
});

function Products() {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="shell">
        <h2>Mais Vendidos</h2>
        <br />
        <div className="yellow-bar-sold"></div>
      </div>
      <Carousel responsive={responsive}>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
        <figure className="card-container">
          <div className="off-container">
            <h2>OFF</h2>
          </div>
          <img src="images/image3.png" alt="" />
          <figcaption className="text-container">
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="customized-empty"
                defaultValue={2}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </Box>
            <h3>SAPATO FLOATER PRETO</h3>
            <h4>de $299,00</h4>
            <strong>por R$ 259,90</strong>
            <h4>ou em 9x de R$ 28,87 </h4>
            <a
              href="https://api.whatsapp.com/send?phone=5561982616081&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20do%20produto."
              target="_blank"
              rel="noreferrer"
            >
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.root}
                  endIcon={<WhatsAppIcon />}
                >
                  COMPRAR
                </Button>
              </ThemeProvider>
            </a>
          </figcaption>
        </figure>
      </Carousel>
    </>
  );
}

export default Products;

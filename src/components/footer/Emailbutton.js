import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
    palette: {
      secondary: {
        main: "#E9BF33",
      },
    },
  });

export default function Emailbutton() {
  const classes = useStyles();

  return (
    <div className="contact-button">
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<EmailIcon />}
        >
          ENTRE EM CONTATO
        </Button>
      </ThemeProvider>
    </div>
  );
}

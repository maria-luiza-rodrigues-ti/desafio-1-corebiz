import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
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

export default function Contactbutton() {
  const classes = useStyles();

  return (
    <div className="email-button">
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<HeadsetMicIcon />}
        >
          FALE COM O NOSSO CONSULTOR ONLINE
        </Button>
      </ThemeProvider>
    </div>
  );
}

//
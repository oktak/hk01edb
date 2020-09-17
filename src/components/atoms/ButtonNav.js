import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, deepPurple, orange, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const theme1 = createMuiTheme({
  palette: {
  },
});

const theme2 = createMuiTheme({
  palette: {
    secondary: deepPurple,
  },
});

const themes = {
  "theme1": theme1,
  "dark": theme2,
}

const DCButton = withStyles((theme) => ({
  root: {
    color: yellow[900],
    // backgroundColor: orange[500],
    // '&:hover': {
    //   backgroundColor: orange[700],
    // },
    borderColor: yellow[700],
  },
}))(Button);

const LCButton = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: deepPurple[500],
    // '&:hover': {
    //   backgroundColor: deepPurple[700],
    // },
  },
}))(Button);

export default function ButtonNav({ text, level="DC" }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themes["theme1"]}>
      {
        (level === "DC")
        ? <DCButton variant="outlined" color="secondary" style={{
          "margin": "0 0 0 8px",
        }}>
          {text || "Secondary"}
        </DCButton>
        : <LCButton variant="outlined" color="secondary" style={{
          "margin": "0 0 0 8px",
        }}>
          {text || "Secondary"}
        </LCButton>
      }
    </ThemeProvider>
  );
}

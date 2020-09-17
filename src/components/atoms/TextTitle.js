import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
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

export default function TextTitle({
  children
}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themes["theme1"]}>
      <h2 style={{
        "fontSize": "24px",
      }}>
        {children}
      </h2>
    </ThemeProvider>
  );
}

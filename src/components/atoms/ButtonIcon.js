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
  buttonIcon: {
    "minWidth": "0",
    "padding": "8px",
    "width": (props) => props.size || "48px",
    "height": (props) => props.size || "48px",
    "display": "inline-block",
    "borderRadius": "50%",
    "boxSizing": "content-box",
    "background": (props) =>
      props === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    "&:hover": {
      "background": 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
  }
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

export default function ButtonIcon(props) {
  const { children, size, onClick } = props;
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={themes["theme1"]}>
      {
        <Button
          className={classes.buttonIcon}
          size={size}
          onClick={onClick}
        >
          {children}
        </Button>
      }
    </ThemeProvider>
  );
}

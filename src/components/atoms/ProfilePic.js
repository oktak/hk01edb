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

export default function ProfilePic({
  imgPath,
  altText,
  title,
  contWidth,
  contHeight,
  width,
  height,
  children
}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themes["theme1"]}>
      <div className="row"
      style={{
        "minHeight": contHeight || "2rem",
        "width": contWidth || "100%",
        "height": contHeight || "2rem",
        "marginTop": "3px",
        "border": "3px solid blue",
        "borderRadius": "50%",
        "display": "inline-block",
        "textAlign": "center",
        "lineHeight": "2",
        "backgroundColor": "#F7F7F7",
        "overflow": "hidden",
      }}
      >
        <img src={imgPath} alt={altText || ""} title={title || "profile image"}
        style={{
          "minHeight": height || "2rem",
          "width": width || "100%",
          "height": height || "2rem",
        }} />
      </div>
    </ThemeProvider>
  );
}

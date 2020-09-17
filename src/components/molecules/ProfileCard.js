import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, deepPurple, orange, yellow } from '@material-ui/core/colors';

import ProfilePic from '../atoms/ProfilePic';
import TextTitle from '../atoms/TextTitle';

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

export default function ProfileCard({
  imgPath,
  altText,
  title,
  contWidth,
  contHeight,
  imgContWidth,
  imgContHeight,
  width,
  height,
  TtitleChildren,
  children
}) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themes["theme1"]}>
      <div className="row"
      style={{
        "width": contWidth || "100%",
        "height": contHeight || "4rem",
        "margin": "8px 16px 16px",
        "padding": "8px",
        "border": "2px solid #FEFEFE",
        "borderRadius": "8px",
        "display": "block",
        "textAlign": "center",
        "lineHeight": "2",
        "boxShadow": "0 8px 16px -8px #999",
        "backgroundColor": "#F7F7F7",
        "overflow": "hidden",
      }}
      >
        <div style={{
          "width": "100%",
          "textAlign": "center",
        }}>
          <ProfilePic
            imgPath={imgPath}
            altText={altText}
            title={title}
            contWidth={imgContWidth}
            contHeight={imgContHeight}
            width={width}
            height={height}
          />
        </div>

        <TextTitle>
          { TtitleChildren }
        </TextTitle>

        <div style={{
          "padding": "4px",
          "textAlign": "left",
        }}>
          {children}
        </div>

      </div>
    </ThemeProvider>
  );
}

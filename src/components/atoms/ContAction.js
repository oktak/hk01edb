import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "height": (props) => props.height || "4rem",
    "border": "3px solid #666",
    "borderRadius": "8px 64px 8px 8px",
    "display": "flex",
    "overflow": "auto",
    "textAlign": "center",
    "flexDirection": (props) => props.direction || "row",
    "justifyContent": (props) => props.justifyContent || "space-around",
    "alignItems": (props) => props.alignItems || "center",
    '& > *': {
      // "display": "",
    },
  },
}));


export default function ContAction(props) {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <div
      className={classes.root}
    >
      {children}
    </div>
  );
};

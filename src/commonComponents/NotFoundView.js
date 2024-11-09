import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  root: {
    padding: 3,
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#333333",
    fontFamily: "Lobster",
    fontSize: "1.8rem",
    margin: "2% 0 0 0",
  },
  error: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} title="404">
      <Typography className={classes.text}>ohh!! We landed on an</Typography>
      <Typography color="primary" className={classes.error}>
        ERROR
      </Typography>
      <RouterLink to="/">
        <Typography color="primary" style={{ textDecoration: "underline" }}>
          Continue Shoping
        </Typography>
      </RouterLink>
    </Box>
  );
};

export default NotFoundView;

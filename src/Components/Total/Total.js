import React from "react";
import accounting from "accounting";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  button: {},
}));

const Total = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5>Total Items: 3</h5>
      <h5>{accounting.formatMoney(50)}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Comprar
      </Button>
    </div>
  );
};

export default Total;

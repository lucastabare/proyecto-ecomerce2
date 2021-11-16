import React from "react";
import accounting from "accounting";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { totalProducts } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "2rem",
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total Items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(totalProducts(basket))}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Comprar
      </Button>
    </div>
  );
};

export default Total;

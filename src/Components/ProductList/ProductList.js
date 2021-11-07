import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Product from "../Product/Product.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
  },
}));

function ProductList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductList;

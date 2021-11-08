import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@mui/material/Typography";
//import { useStateValue } from "../StateProvider";
import CheckCard from "../CheckCard/CheckCard.js";
//import Total from "../Total/Total.js";
import products from "../../Product-data.js";
import Products from "../Product/Product.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckPage = () => {
  const classes = useStyles();
  //const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <React.Fragment>
        {products.map((item) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Products key={item.id} product={item} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            SU CARRITO DE COMPRAS
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3} container spacing={2}>
          <Typography align="center" gutterBottom variant="h4">
            {/* <Total /> */}Total
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckPage;

import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, IconButton } from "@mui/material";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
}));

function CheckCard({ product: { id, name, price, image } }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography className="action" variant="h5" color="textSecondary">
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="En stock"
      />
      <CardMedia
        component="img"
        height="150px"
        maxWidth="100%"
        title="ZAPATILLA NIKE SB CHECK SOLAR GRIS"
        image={image}
      />
      <CardActions className={classes.cardActions}>
        <IconButton>
          <DeleteIcon fontSize="large" color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default CheckCard;

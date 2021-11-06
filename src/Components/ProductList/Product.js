import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography className="action"
          variant = "h5"
          color="textSecondary">
           {accounting.formatMoney(50)}
          </Typography>
        }
        title="Shoes"
        subheader="En stock"
      />
      <CardMedia
        component="img"
        height="194"
        title="ZAPATILLA NIKE SB CHECK SOLAR GRIS"
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/165/610/products/nike-sb-check-solar-gris-claro1-96d9af9cab1b16159315885507483309-1024-1024.png"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Zapatillas para correr 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" /* onClick={agregarAlCarrito} */>
          <AddShoppingCart fontSize="large"/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"Zaparillas de deporte para correr</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

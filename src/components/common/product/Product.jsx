import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import accounting from "accounting";

import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({ product }) {
  const onAdd = () => {
    console.log("I would go to /product/:pid");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.name}
        subheader={product.stock > 0 ? "En stock" : "Sin stock"}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.productType}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {accounting.formatMoney(product.price)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={() => {
            onAdd();
          }}
          variant="contained"
          size="medium">
          Ver detalles
        </Button>
      </CardActions>
    </Card>
  );
}

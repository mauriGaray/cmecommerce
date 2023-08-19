import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./product.module.css";

export default function Product({ product }) {
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
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Link to={`/products/${product.id}`}>
          <Button variant="contained" size="medium">
            Ver detalles
          </Button>
        </Link>

        <IconButton className={styles.cardAction} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

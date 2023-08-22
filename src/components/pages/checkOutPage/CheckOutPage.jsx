import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./checkOutPage.module.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
const CheckOutPage = () => {
  const { cart, cleanCart, removeById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          {cart.length ? (
            cart.map((product) => (
              <Paper
                sx={{
                  p: 2,
                  maxWidth: 700,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  border: "grey solid 1px",
                  margin: "1em",
                }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={product.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {product.productType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.quantity} x{" "}
                          {accounting.formatMoney(product.price)}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          <DeleteIcon
                            fontSize="small"
                            onClick={() => removeById(product.id)}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        Total:
                        {accounting.formatMoney(
                          product.quantity * product.price
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))
          ) : (
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={12}
              xl={6}
              sx={{ margin: "auto" }}>
              <Card
                sx={{
                  minWidth: 275,
                  marginTop: "1em",
                  border: "solid grey 1px",
                }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 20 }}
                    color="text.secondary"
                    gutterBottom>
                    AÚN NO TIENES PRODUCTOS EN EL CARRITO
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="350"
                  image="public\File searching.svg"
                  alt="notFoundProduct"
                />
                <CardActions>
                  <Button size="small">
                    <Link style={{ textDecoration: "none" }} to={"/"}>
                      IR A COMPRAR
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
        {/* right side */}
        <Grid item xs={10} sm={10} md={6} lg={6} xl={6}>
          <Card sx={{ minWidth: 275, margin: "1em", border: "solid grey 1px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom>
                Resumen de compra
              </Typography>
              <Typography variant="h5" component="div">
                {accounting.formatMoney(getTotalPrice())}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Por {getTotalItems()} unidades
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">COMPRAR</Button>
              <Button size="small" onClick={cleanCart}>
                VACIAR CARRITO
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckOutPage;

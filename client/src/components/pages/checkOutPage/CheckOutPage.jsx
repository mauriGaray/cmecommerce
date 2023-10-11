import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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
import { v4 as uuidv4 } from "uuid";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const CheckOutPage = () => {
  const { cart, cleanCart, removeById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-7482bdab-5a81-4daa-8302-7dff0408f0a9");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5173/create_preference",
        {
          description: "libro",
          price: 10,
          quantity: 1,
          currency_id: "ARS",
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "5%" }}>
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
                }}>
                <Grid container spacing={2} key={uuidv4()}>
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
                  image="File searching.svg"
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
          <Card sx={{ minWidth: 275, border: "solid grey 1px" }}>
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
              <Button size="small" onClick={handleBuy}>
                COMPRAR
              </Button>
              {preferenceId && (
                <Wallet initialization={{ preferenceId: preferenceId }} />
              )}

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

import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import accounting from "accounting";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styles from "./review.module.css";
export default function Review() {
  const { cart, getTotalPrice, getTotalItems, getTotalQuantityById } =
    useContext(CartContext);
  initMercadoPago("APP_USR-2e6d12f0-501a-48f2-851f-775c5b9a667a");
  const [preferenceId, setPreferenceId] = useState(null);
  const [status, setStatus] = useState(false);
  let products = cart;
  let products2 = cart.map((product) => {
    return {
      title: product.name,
      price: parseInt(product.price),
      description: product.description,
      quantity: product.quantity,
    };
  });

  const handleStatus = () => {
    setStatus(true);
  };

  const createPreference = async () => {
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Carrito de CM Company",
        price: parseInt(getTotalPrice()),
        quantity: 1,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  console.log(products);
  return (
    <div className={styles.containerReview}>
      <Typography variant="h3" sx={{ margin: "2rem 15rem" }} gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 10 }}>
            <ListItemText
              primary={`${product.name} x ${product.quantity} unidades`}
              secondary={product.desc}
            />
            <Typography variant="body2">
              {accounting.formatMoney(product.price * product.quantity)}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 10 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(getTotalPrice())}
          </Typography>
        </ListItem>
        <div className={styles.containerReview2}>
          {!preferenceId ? (
            [
              <Button
                key={uuidv4()}
                onClick={() => {
                  handleStatus();
                  handleBuy();
                }}
                variant="contained"
                size="medium"
                sx={{ border: "solid #1976d2", margin: "1rem" }}>
                CONFIRMAR
              </Button>,
              <Button
                key={uuidv4()}
                variant="contained"
                size="medium"
                sx={{ border: "solid #1976d2" }}>
                MODIFICAR
              </Button>,
            ]
          ) : (
            <Wallet
              initialization={{
                preferenceId: preferenceId,
                redirectMode: "self",
              }}
            />
          )}
        </div>
      </List>
    </div>
  );
}

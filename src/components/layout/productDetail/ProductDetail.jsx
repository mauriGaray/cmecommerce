import * as React from "react";
import { useEffect, useState, useContext } from "react";
import useCount from "../../hooks/useCount.jsx";
import styles from "./productDetail.module.css";
import { useParams } from "react-router-dom";
import products from "../../../products-data";

import accounting from "accounting";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import { CartContext } from "../../../context/CartContext.jsx";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";

export default function ProductDetail() {
  const [productSelected, setProductSelected] = useState({});
  const { addToCart } = useContext(CartContext);
  const { pid } = useParams();

  useEffect(() => {
    let product = doc(collection(db, "products"), pid);
    getDoc(product)
      .then((res) => setProductSelected({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
  }, [pid]);
  let { count, decrement, increment } = useCount(0, productSelected.stock);
  const onAdd = () => {
    let data = {
      ...productSelected,
      quantity: count,
    };
    addToCart(data);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.parent}>
          <img
            className={styles.div1}
            src={productSelected.image}
            alt={productSelected.name}
          />

          <div className={styles.div2}>
            <Card
              sx={{
                maxWidth: "100vw",
                height: "100%",
              }}>
              <CardContent>
                <Typography variant="h7" component="div">
                  {productSelected.productType}
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{ marginBottom: "0.5em" }}>
                  {productSelected.name}
                </Typography>

                <Typography variant="h4" component="div">
                  {accounting.formatMoney(productSelected.price)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "0.5em" }}>
                  {productSelected.description}
                </Typography>
              </CardContent>
              <CardActions>
                {productSelected.stock > 0 ? (
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Button onClick={increment}>+</Button>
                      <Typography variant="div" color="text.secondary">
                        {count}
                      </Typography>
                      <Button onClick={decrement}>-</Button>
                    </Box>
                    <Button
                      onClick={onAdd}
                      variant="contained"
                      size="medium"
                      sx={{ border: "solid #1976d2", margin: "1em" }}>
                      <Link
                        to={"/checkoutpage"}
                        style={{ textDecoration: "none", color: "white" }}>
                        COMPRAR AHORA
                      </Link>
                    </Button>
                    <Button
                      onClick={onAdd}
                      size="medium"
                      sx={{ border: "solid #1976d2" }}>
                      AGREGAR AL CARRITO
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      border: "solid grey",
                      color: "grey",
                    }}>
                    SIN STOCK
                  </Button>
                )}
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

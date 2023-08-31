import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "../../common/product/Product";
import styles from "./products.module.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/**
 * Renders a grid of product cards.
 * Each product card represents a product with information such as title, price, image, and description.
 * The grid layout is responsive and adjusts the number of columns based on the screen size.
 */
export default function Products() {
  let itemCollection = collection(db, "products");
  let [productList, setProductList] = useState([]);
  getDocs(itemCollection)
    .then((res) => {
      let products = res.docs.map((elemento) => {
        return {
          id: elemento.id,
          ...elemento.data(),
        };
      });
      setProductList(products);
    })
    .catch((err) => console.log(err));
  return (
    <Box className={styles.bg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={styles.container}>
        {productList.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

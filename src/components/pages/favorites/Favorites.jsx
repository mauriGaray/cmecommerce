import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "../../common/product/Product";

import products from "../../../products-data.js";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Favorites = () => {
  return (
    <Box className={styles.bg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={styles.container}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;

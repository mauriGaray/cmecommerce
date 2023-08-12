import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "../../common/product/Product";
import styles from "./products.module.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={styles.container}>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Product />
        </Grid>
      </Grid>
    </Box>
  );
}

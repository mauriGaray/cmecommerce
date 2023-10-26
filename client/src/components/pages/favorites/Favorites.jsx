import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "../../common/product/Product";
import Typography from "@mui/material/Typography";
import "./favorites.modules.css";
import { useFavorites } from "../../../context/FavoritesContext";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/**
 * React component that displays a list of favorite products.
 * The rendered JSX elements representing the list of favorite products.
 */
function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      {favorites.length > 0 ? (
        <>
          <Typography variant="h4" className="title">
            Estos son tus favoritos:
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {favorites.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <h1 className="title">Aún no tienes favoritos</h1>
          <img className="image" src="\File searching.svg" alt="gif" />;
        </>
      )}
    </div>
  );
}

export default Favorites;

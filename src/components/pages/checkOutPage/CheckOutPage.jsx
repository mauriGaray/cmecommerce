import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import accounting from "accounting";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
const CheckOutPage = () => {
  const { cart } = useContext(CartContext);
  const theme = useTheme();
  return (
    <>
      {cart.map((product) => (
        <Card key={product.id} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {product.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div">
                {product.productType}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {product.quantity} x {accounting.formatMoney(product.price)}
                </Typography>
              </CardContent>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={product.image}
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </>
  );
};

export default CheckOutPage;

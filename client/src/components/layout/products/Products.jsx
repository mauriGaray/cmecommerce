import * as React from "react";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product from "../../common/product/Product";
import styles from "./products.module.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [value, setValue] = React.useState("Todo");
  const category = [
    "Electrodomésticos",
    "Muebles",
    "Herramientas",
    "Celulares",
    "Tecnología",
    "Moda",
    "Salud",
    "Juguetes y Juegos",
    "Cuidado Personal",
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/category/${newValue}`);
  };
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    let itemsCollection = collection(db, "products");
    let consulta;

    if (!categoryName || categoryName === "Todo") {
      consulta = itemsCollection;
    } else {
      consulta = query(
        itemsCollection,
        where("productType", "==", categoryName)
      );
    }
    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setItems(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <main>
      <Box sx={{ width: "100%" }}>
        <Tabs
          variant="scrollable"
          scrollButtons={false}
          value={value}
          onChange={handleChange}
          aria-label="category">
          <Tab key={uuid()} value={"Todo"} label={"Todo"} wrapped />
          {category.map((element) => {
            return <Tab key={uuid()} value={element} label={element} wrapped />;
          })}
        </Tabs>
      </Box>
      <Box className={styles.bg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} className={styles.container}>
          {items.map((product) => (
            <Grid
              key={uuid()}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ margin: "2rem" }}>
              <Product key={uuid()} product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}

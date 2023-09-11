import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";

export default function Drawer() {
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
  };

  return (
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
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import accounting from "accounting";

import { AddShoppingCart } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="h5" color="text.secondary">
            {accounting.formatMoney(35000)}
          </Typography>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://res.cloudinary.com/dqrwp1lvr/image/upload/v1691780669/cld-sample-5.jpg"
        alt="White shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Running shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCart fontSize="large" />
        </IconButton>

        {Array(4)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Our shoe combines comfort and style effortlessly. With its sleek
            design and timeless appeal, this shoe is perfect for any occasion.
            Whether you're heading to the office or going out for a night on the
            town, this shoe will complement your outfit perfectly. Its versatile
            design allows it to be dressed up or down, making it a must-have
            addition to your wardrobe.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

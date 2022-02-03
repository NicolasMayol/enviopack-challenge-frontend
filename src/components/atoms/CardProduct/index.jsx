import {
  Card,
  CardMedia,
  Button,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import image from "../../../assets/image-product.jpg";
import React from "react";

export const CardProduct = ({
  title,
  price,
}) => {
  return (
    <Card >
      <CardMedia component="img" image={image} alt="celular" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

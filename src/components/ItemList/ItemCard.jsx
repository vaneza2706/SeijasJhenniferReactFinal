import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 400, height: 400 }}>
      <CardMedia sx={{ height: 240 }} image={item.img} title="green iguana" />
      <CardContent sx={{ height: 50 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {item.title}
        </Typography>
        
        <Typography variant="subtitle1" textAlign={"center"}>
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            
            size="small"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
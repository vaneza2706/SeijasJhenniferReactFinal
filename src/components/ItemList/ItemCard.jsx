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
    
    <Card
    sx={{
      width: 350,
      height: 400,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
      },
      borderRadius: "20px" 
    }}
  >
      <CardMedia sx={{ height: 240 }} image={item.img} title="green iguana" />
      <CardContent sx={{ height: 50 }}>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {item.title}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            size="small"
            sx={{
              backgroundColor: "rgb(186, 172, 154)",
              borderRadius: "8px",
              color: "rgb(56, 57, 29)",
              textTransform: "none",
            }}
          >
            MAS DETALLES
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
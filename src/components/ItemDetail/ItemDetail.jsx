import React from "react";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";
export const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.containerImage}>
          <img src={product.img} alt="" />
        </div>

        <div className={styles.containerDetail}>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span> {product.title}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {product.description}
          </h2>
          <h2 style={{ fontFamily: "monospace" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> ${product.price}
          </h2>
          {
            product.stock > 0 ? (
              <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
              </div>
            ) : (
              <h2>No hay stock</h2>
            )
          }

          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Link to="/">
              <Button
               sx={{
                backgroundColor: "rgb(186, 172, 154)",
                color: "white",
                borderRadius: "10px",
              }}>Atras</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
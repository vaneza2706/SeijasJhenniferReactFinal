import { Button } from "@mui/material";

const CounterVista = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
      <Button  onClick={sumar}>
        Sumar
      </Button>
      <h2>{counter}</h2>
      <Button onClick={restar}>
        Restar
      </Button>
      <Button  onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </div>
  );
};

export default CounterVista;
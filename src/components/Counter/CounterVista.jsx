import { Button } from "@mui/material";

const CounterVista = ({ sumar, restar, counter, onAdd }) => {
  return (
    <div style={{ marginBottom: "10px", display: "flex", gap: "30px" }}>
      <Button
        onClick={sumar}
        sx={{
          backgroundColor: "rgb(186, 172, 154)",
              color: "white",
          borderRadius: "10px",
        }}
      >
        Sumar
      </Button>
      <h2>{counter}</h2>
      <Button
        onClick={restar}
        sx={{
          backgroundColor: "rgb(186, 172, 154)",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Restar
      </Button>
      <Button
        onClick={() => onAdd(counter)}
        sx={{
          backgroundColor: "rgb(186, 172, 154)",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};




 
export default CounterVista;
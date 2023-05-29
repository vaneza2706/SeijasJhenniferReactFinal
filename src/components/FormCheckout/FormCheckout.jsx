import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={11} sm={7}>
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12} justifyContent="center" display="flex">
            <Button
              type="submit"
              sx={{
                width: "10%",
                marginTop: 2,
                backgroundColor: "rgb(186, 172, 154)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;

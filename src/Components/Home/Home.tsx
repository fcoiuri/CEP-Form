import React, { useState, ChangeEvent } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import cep from "cep-promise";
// @ts-ignore
import brazilianStates from "brazilian-states";
import { useStyles } from "./Home.style";
import maskCEP from "../../_utils";

export const Home: React.FC = function () {
  const [info, setInfo] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [CEP, setCEP] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const classes = useStyles();

  const handleChangeCEP = (e: ChangeEvent<HTMLInputElement>) => {
    setCEP(maskCEP(e.target.value));
  };

  const showNotFound = () => {
    setNotFound(true);
    setInfo(false);
  };

  const showStreet = (street: string) => {
    return street
  }

  const showCEP = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    cep(CEP)
      .then((value: any) => {
        setCity(value.city);
        setNeighborhood(value.neighborhood);
        setState(brazilianStates.get(value.state).name);
        setStreet(value.street);
        setInfo(true);
        setNotFound(false);
      })
      .catch(showNotFound());
  };
  return (
    <React.Fragment>
      <div className={classes.title}>Achar endereço pelo CEP</div>
      <Grid container justifyContent="center">
        <Grid item className={classes.find}>
          <TextField
            value={CEP}
            onChange={handleChangeCEP}
            inputProps={{ className: classes.textField }}
            InputLabelProps={{ className: classes.textField }}
            id="cep"
            label="Digite o CEP"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          style={{ display: "flex" }}
          className={classes.botaoGrid}
        >
          <Button
            variant="contained"
            className={classes.botao}
            onClick={showCEP}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
      {info && (
        <div className={classes.wrapper}>
          <div className={classes.info}>
            <div>Cidade: {city}</div>
            <div>Estado: {state}</div>
            <div>Bairro: {neighborhood}</div>
            <div>{street}</div>
          </div>
        </div>
      )}
      {notFound && (
        <div className={classes.wrapper}>
          <div className={classes.info}>CEP não encontrado</div>
        </div>
      )}
    </React.Fragment>
  );
};

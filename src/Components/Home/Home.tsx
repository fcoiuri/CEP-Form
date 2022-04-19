import React, { useState, ChangeEvent  } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import cep from "cep-promise";

const primary = "#FFF";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 32,
      textAlign: "center",
      marginTop: "2%",
      fontFamily: "Akshar, sans-serif",
    },
    form: {
      "& > *": {
        margin: theme.spacing(1),
        width: "35ch",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: primary,
        },
        "&:hover fieldset": {
          borderColor: primary,
        },
        "&.Mui-focused fieldset": {
          borderColor: primary,
        },
      },
      textAlign: "center",
      marginTop: "1%",
    },
    textField: {
      color: `${primary} !important`,
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
  })
);

export const Home: React.FC = function () {
  const [CEP, setCEP] = useState("");
  const classes = useStyles();
  console.log(CEP)
  cep(CEP).then(console.log)

  const handleChangeCep = (e: ChangeEvent<HTMLInputElement>) => {
    setCEP(e.target.value);
  }
  return (
    <React.Fragment>
      <div className={classes.title}>Achar endereço pelo CEP</div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          value={CEP}
          onChange={handleChangeCep}
          inputProps={{ className: classes.textField }}
          InputLabelProps={{ className: classes.textField }}
          id="cep"
          type="number"
          label="Digite o CEP"
          variant="outlined"
        />
      </form>
    </React.Fragment>
  );
};

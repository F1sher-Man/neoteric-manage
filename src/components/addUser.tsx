import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
// import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputForm: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      height: "40rem"
    }
  })
);

export interface addUserProps {}

const AddUser: React.FC<addUserProps> = () => {
  const classes = useStyles();
  const [tech, setTech] = useState("");
  function handleFormSubmit() {
    console.log("dupa");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div">
          <form
            className={classes.inputForm}
            noValidate
            onSubmit={handleFormSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Imię"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="Nazwisko"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              required
              error={false}
            />
            <FormControl>
              <TextField
                id="outlined-select-currency"
                select
                label="Technologia"
                value={tech}
                onChange={() => (
                  event: React.ChangeEvent<{ value: unknown }>
                ) => {
                  let value: string = event.target.value as string;
                  console.log(value);
                  setTech(value);
                }}
                helperText="Wybierz technologię uczestnika"
                variant="outlined"
                required
              >
                <MenuItem value={"AI"}>AI</MenuItem>
                <MenuItem value={"angular"}>Angular</MenuItem>
                <MenuItem value={"react"}>React</MenuItem>
              </TextField>
            </FormControl>
            <TextField
              id="outlined-textarea"
              label="Notatka"
              placeholder="Tutaj możesz wpisać dodatkową notatkę o użytkowniku"
              rows="5"
              multiline
              variant="outlined"
            />
            <Button type="submit" variant="contained">
              Dodaj uczestnika
            </Button>
          </form>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default AddUser;

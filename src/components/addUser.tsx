import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { IUser } from "../data/users";
import UserMessages from "../const/userMessages.const";
import AddUserEnum from "../enum/addUser.enum";

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

type Fields = {
  id: string;
  value: string;
  error: boolean;
};
type InputField = {
  value: string;
  error: boolean;
};

export interface addUserProps {
  onUserAdd(newUser: IUser): void;
}

const AddUser: React.FC<addUserProps> = ({ onUserAdd }) => {
  const classes = useStyles();
  const [name, setName] = useState<InputField>({ value: "", error: false });
  const [lastname, setLastname] = useState<InputField>({
    value: "",
    error: false
  });
  const [email, setEmail] = useState<InputField>({ value: "", error: false });
  const [tech, setTech] = useState<InputField>({ value: "", error: false });
  const [note, setNote] = useState<string>("");

  function checkIfNotEmpty(elementValue: string): InputField {
    const newState: InputField = { value: elementValue, error: false };
    if (elementValue) newState.error = true;
    return newState;
  }

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newName: InputField = checkIfNotEmpty(event.target.value);
    setName(newName);
  };
  const handleLastnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newLastname: InputField = checkIfNotEmpty(event.target.value);
    setLastname(newLastname);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newEmail: InputField = checkIfNotEmpty(event.target.value);
    setEmail(newEmail);
  };
  const handleTechChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newTech: InputField = checkIfNotEmpty(event.target.value);
    setTech(newTech);
  };
  const handleNoteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = event.target.value as string;
    setNote(value);
  };

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    if ((name.value && lastname.value && email.value && tech.value) === "") {
      alert(UserMessages.ALL_FIELDS_REQUIRED);
      event.preventDefault();
    } else {
      const newUser: IUser = {
        id: 0,
        first_name: name.value,
        last_name: lastname.value,
        email: email.value,
        tech: tech.value,
        isActive: true,
        note: note
      };
      const newState: InputField = { value: "", error: false };
      setName(newState);
      setLastname(newState);
      setEmail(newState);
      setTech(newState);
      setNote("");
      event.preventDefault();
      onUserAdd(newUser);
    }
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
              id="name"
              label={AddUserEnum.FIRST_NAME}
              value={name.value}
              onChange={handleNameChange}
              variant="outlined"
              required
              error={name.error}
            />
            <TextField
              id="lastname"
              label={AddUserEnum.LAST_NAME}
              value={lastname.value}
              onChange={handleLastnameChange}
              variant="outlined"
              required
              error={lastname.error}
            />
            <TextField
              id="email"
              label={AddUserEnum.FIRST_NAME}
              value={email.value}
              onChange={handleEmailChange}
              variant="outlined"
              required
              error={email.error}
            />
            <FormControl>
              <TextField
                id="tech"
                select
                label={AddUserEnum.E_MAIL}
                value={tech.value}
                onChange={handleTechChange}
                helperText="Wybierz technologię uczestnika"
                variant="outlined"
                required
                error={tech.error}
              >
                <MenuItem value={"AI"}>AI</MenuItem>
                <MenuItem value={"angular"}>Angular</MenuItem>
                <MenuItem value={"react"}>React</MenuItem>
              </TextField>
            </FormControl>
            <TextField
              id="note"
              label={AddUserEnum.NOTE}
              placeholder={UserMessages.ADDITIONAL_USER_NOTE}
              value={note}
              onChange={handleNoteChange}
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

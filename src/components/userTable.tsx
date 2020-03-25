import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import { IUser } from "../data/users";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  formControl: {
    minWidth: 120
  }
});

interface userTableProps {
  usersData: Array<IUser>;
}

const UserTable: React.FC<userTableProps> = ({ usersData }) => {
  const classes = useStyles();
  const [onlyActiveUsers, setOnlyActiveUsers] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(usersData);
  const [nameSortDirection, setNameSortDirection] = useState("desc");
  const [technologyFilter, setTechnologyFilter] = useState("all");
  const rowsCount = displayUsers.length;

  function handleActiveUserFilter() {
    setOnlyActiveUsers(!onlyActiveUsers);
    let newUsers;
    if (!onlyActiveUsers) {
      newUsers = displayUsers.filter(user => {
        return user.isActive === true ? user : null;
      });
    } else {
      newUsers = usersData;
    }
    setDisplayUsers(newUsers);
  }

  function handleOrderStringColumn(column: string) {
    let tempUsers;
    if (nameSortDirection === "desc") {
      tempUsers = [...displayUsers].sort((a, b) => {
        const valueToCompare = a[column] as string;
        const valueToCompare2 = b[column] as string;
        return valueToCompare.localeCompare(valueToCompare2);
      });
      setNameSortDirection("asc");
    } else {
      tempUsers = [...displayUsers].sort((a, b) => {
        const valueToCompare = a[column] as string;
        const valueToCompare2 = b[column] as string;
        return valueToCompare.localeCompare(valueToCompare2);
      });
      setNameSortDirection("desc");
    }
    setDisplayUsers(tempUsers);
  }

  const handleTechnologyStackChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    let newUsers;
    let value: string = event.target.value as string;
    if (value !== "all") {
      newUsers = usersData.filter(user => {
        return user.tech === value ? user : null;
      });
    } else {
      newUsers = usersData;
    }
    setDisplayUsers(newUsers);
    setTechnologyFilter(value);
  };
  return (
    <div>
      <FormGroup row>
        <p style={{ paddingRight: "50px" }}>{rowsCount} wyników</p>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={onlyActiveUsers}
              onChange={handleActiveUserFilter}
            />
          }
          label="Tylko aktywni użytkownicy"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Technologia</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={technologyFilter}
            onChange={handleTechnologyStackChange}
          >
            <MenuItem value={"all"}>Wszystkie</MenuItem>
            <MenuItem value={"AI"}>AI</MenuItem>
            <MenuItem value={"angular"}>Angular</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell
                align="center"
                onClick={() => handleOrderStringColumn("first_name")}
                style={{ cursor: "pointer" }}
              >
                Imię
              </TableCell>
              <TableCell
                align="center"
                onClick={() => handleOrderStringColumn("last_name")}
                style={{ cursor: "pointer" }}
              >
                Nazwisko
              </TableCell>
              <TableCell
                align="center"
                onClick={() => handleOrderStringColumn("email")}
                style={{ cursor: "pointer" }}
              >
                E-mail
              </TableCell>
              <TableCell align="center">Technologia</TableCell>
              <TableCell align="center">Notatka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayUsers.map(user => {
              let rowColor: string =
                user.isActive === true
                  ? "rgba(0,255,0,0.3)"
                  : "rgba(255,0,0,0.3)";
              return (
                <TableRow key={user.id} style={{ backgroundColor: rowColor }}>
                  <TableCell align="center">{user.id}</TableCell>
                  <TableCell align="center">{user.first_name}</TableCell>
                  <TableCell align="center">{user.last_name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.tech}</TableCell>
                  <TableCell align="center">{user.note}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default UserTable;

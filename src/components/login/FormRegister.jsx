import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Error from "../Error";

const Container = styled.div`
  // position: absolute;
  width: 420px;
  text-align: center;
  display: block;
  margin: 20px 10px;
  padding: 40px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;
const FormRegister = ({ setOpen }) => {
  const [infoUser, setInfoUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasena: ""
  });
  const [users, setUsers] = useState([]);
  const [newUserList, setNewUserList] = useState([]);
  const [completado, setComplete] = useState(false);

  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(false);
    const { nombre, apellido, email, contrasena } = infoUser;
    if (
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      email.trim() !== "" &&
      contrasena.trim() !== ""
    ) {
      if (users !== null) {
        users.filter((user) => {
          if (user.email === email) {
            setError(true);
            return;
          }
        });
        setNewUserList([...users, infoUser]);
      } else setNewUserList([infoUser]);
      setComplete(true);
    }
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(1));
    if (list !== null) setUsers(...users, list);
    else setUsers(list);
  }, []);

  useEffect(() => {
    if (completado) {
      setComplete(false);
      if (!error) {
        localStorage.setItem(1, JSON.stringify(newUserList));
        setOpen(false);
      }
    }
  }, [completado]);

  const addInfoUser = (e) => {
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Container>
      <label className="form-title">Registrate</label>
      <form onSubmit={handleRegister}>
        {error ? <Error message="El correo ingresado, ya esta en uso" /> : null}
        <TextField
          type="text"
          fullWidth
          placeholder="Nombre"
          name="nombre"
          className="form-input"
          InputProps={{ className: "form__input" }}
          variant="filled"
          color="warning"
          onChange={addInfoUser}
          value={infoUser.nombre}
        />

        <TextField
          type="text"
          fullWidth
          placeholder="Apellido"
          name="apellido"
          className="form-input"
          InputProps={{ className: "form__input" }}
          variant="filled"
          color="warning"
          onChange={addInfoUser}
          value={infoUser.apellido}
        />
        <TextField
          type="email"
          fullWidth
          placeholder="Correo"
          name="email"
          className="form-input"
          InputProps={{ className: "form__input" }}
          variant="filled"
          color="warning"
          onChange={addInfoUser}
          value={infoUser.email}
        />
        <TextField
          type="password"
          fullWidth
          placeholder="Contraseña"
          name="contrasena"
          className="form-input"
          InputProps={{ className: "form__input" }}
          variant="filled"
          color="warning"
          onChange={addInfoUser}
          value={infoUser.contraseña}
        />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          className="btn-form"
          fullWidth
        >
          Registrar
        </Button>
      </form>
    </Container>
  );
};

export default FormRegister;
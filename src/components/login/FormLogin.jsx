import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, Stack } from "@mui/material";
import Error from "../Error";

import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import login_action from "../../Redux/action/login_action";

//Login con facebook
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  getAuth,
  signOut,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";

//Login con google
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

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

const FormLogin = ({ setOpen }) => {
  const [infoUser, setInfoUser] = useState({ email: "", contrasena: "" });
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSesion = (e) => {
    e.preventDefault();
    const { email, contrasena } = infoUser;

    const list = JSON.parse(localStorage.getItem(1));
    if (list === null) {
      setError(true);
      return;
    }
    setError(false);
    setUserList([list]);
    if (email.trim() !== "" && contrasena.trim() !== "") {
      userList.map((users) => {
        const user = users.filter((user) => user.email === email);
        if (email !== user[0].email || contrasena !== user[0].contrasena) {
          setError(true);
        } else {
          setError(false);
          setOpen(false);
          dispatch(login_action(true));
        }
      });
    }
  };
  const handleFormUnRegister = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("adios");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const addInfo = (e) => {
    setInfoUser({
      ...infoUser,
      [e.target.name]: e.target.value
    });
  };

  const handleAuthGoogle = () => {
    //Login con google
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(login_action(true));
        setOpen(false);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleAuthFacebook = () => {
    //login facebook
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        //La informacion del ususario
        const user = result.user;

        //Le damos a facebook acceso al token
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        //Linkear a la siguiente pagina
        dispatch(login_action(true));
        setOpen(false);
      })
      .catch((error) => {
        //Obtener errores aqui
        const errorCode = error.code;
        const errorMessage = error.message;

        //Otener el emil del usuario actual
        const email = error.email;
        //Las credenciales usadas
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };
  return (
    <Container>
      <label className="form-title">Inicio de Sesion</label>
      <form onSubmit={handleSesion}>
        {error ? (
          <Error message="Los datos ingresados son incorrectos" />
        ) : null}
        <TextField
          className="form-input"
          type="email"
          fullWidth
          placeholder="Correo"
          name="email"
          variant="filled"
          color="warning"
          onChange={addInfo}
          value={infoUser.email}
          InputProps={{ className: "form__input" }}
        />
        <TextField
          className="form-input"
          type="password"
          color="warning"
          fullWidth
          placeholder="Contraseña"
          name="contrasena"
          variant="filled"
          onChange={addInfo}
          value={infoUser.contrasena}
          InputProps={{ className: "form__input" }}
        />
        <Button
          className="btn-form"
          type="submit"
          variant="contained"
          color="warning"
          style={{ background: "#ff5722" }}
          fullWidth
        >
          {" "}
          Iniciar Sesion
        </Button>
      </form>
      <br />
      <IconButton
        aria-label="facebook"
        size="small"
        style={{ color: "white" }}
        onClick={handleAuthFacebook}
      >
        <FacebookIcon fontSize="medium" color="primary" />
        Iniciar Sesion facebook
      </IconButton>
      <IconButton
        aria-label="google"
        size="small"
        style={{ color: "white" }}
        onClick={handleAuthGoogle}
      >
        <GoogleIcon fontSize="medium" color="error" />
        Iniciar Sesion con gmail
      </IconButton>
    </Container>
  );
};

export default FormLogin;
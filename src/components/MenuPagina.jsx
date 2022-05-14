import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import genero_action from "../Redux/action/genero_action";
import buscarNombre_action from "../Redux/action/buscarNombre_action";
import "../navMenu.css";
import BuscarNombre from "./BuscarNombre";
// import { IconButton } from "material-ui";

const MenuPagina = () => {
  const dispatch = useDispatch();
  const [dataSearch, setDataSearch] = useState({
    nombrePeli: "",
    idGenero: "28"
  });

  const handleChange = (e) => {
    setDataSearch({ ...dataSearch, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(genero_action({ dataSearch }));
  }, [dataSearch]);

  return (
    <Fragment>
      <header className="header">
        <div className="nav">
          <a className="logo">MiPeli</a>
        </div>
        <div className="busqueda">
          <FormControl sx={{ m: 0, minWidth: 230 }}>
            <InputLabel className="categoria">Categoria</InputLabel>
            <Select
              name="idGenero"
              fullWidth
              label="Categoria"
              onChange={handleChange}
              value={dataSearch.idGenero}
            >
              <MenuItem value={28}>Accion</MenuItem>
              <MenuItem value={35}>Comedia</MenuItem>
              <MenuItem value={27}>Terror</MenuItem>
              <MenuItem value={878}>Ciencia ficcion</MenuItem>
              <MenuItem value={9648}>Misterio</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="buscar-pelis">
          <SearchIcon className="icono" />
          <input
            type="search"
            onChange={handleChange}
            placeholder="buscar..."
            name="nombrePeli"
            value={dataSearch.nombrePeli}
          />
        </div>
        <div className="favoritos">
          <Link to="/favoritos">
            <Button> Favoritos</Button>
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default MenuPagina;

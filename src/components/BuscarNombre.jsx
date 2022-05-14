import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import buscarNombre_action from "../Redux/action/buscarNombre_action";

import "../movie.css";

import { useDispatch, useSelector } from "react-redux";

const BuscarNombre = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const [nombre, setNombre] = useState({ nombrePeli: "" });

  const dispatch = useDispatch();

  const buscar = async (e) => {
    e.preventDefault();
    dispatch(buscarNombre_action({ nombre }));
  };
  const { datoNombre } = useSelector((state) => state.datoNombre);
  const obtenerPelis = (e) => {
    setNombre({
      ...nombre,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Fragment>
      <div className="barra-buscar">
        <div className="mispelis">
          <Link to="/misPeliculas">
            <Button size="mis peliculas">Mis Peliculas</Button>
          </Link>
        </div>
        <form onSubmit={(e) => buscar(e)} className="buscar-pelis">
          <SearchIcon />
          <input
            type="search"
            onChange={obtenerPelis}
            placeholder="buscar..."
            name="nombrePeli"
          />
        </form>
      </div>
      <div className="contenedor-peliculas">
        {datoNombre.map((peliculas) => (
          <ImageListItem key={peliculas.id}>
            <img
              src={IMG_URL + peliculas.poster_path}
              alt={peliculas.original_title}
            />
            <ImageListItemBar
              title={peliculas.original_title}
              subtitle={peliculas.release_date}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${peliculas.original_title}`}
                >
                  <FavoriteIcon className="megusta" />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </div>
    </Fragment>
  );
};

export default BuscarNombre;

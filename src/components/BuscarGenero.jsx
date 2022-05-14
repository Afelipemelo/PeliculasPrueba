import React, { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Button, IconButton, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../movie.css";

const BuscarGenero = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const { datoGenero } = useSelector((state) => state.datoGenero);
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavoritos = (id) => {
    console.log(id);
    const nuevo = datoGenero.filter((item) => item.id === id);
    setFavoritos([...favoritos, nuevo[0]]);
  };
  useEffect(() => {
    localStorage.setItem(3, JSON.stringify(favoritos));
  }, [favoritos]);
  return (
    <Fragment>
      <div className="contenedor-peliculas">
        {datoGenero.map((genero) => (
          <div key={genero.id} className="movie">
            <ImageListItem key={genero.id}>
              <img
                src={IMG_URL + genero.poster_path}
                alt={genero.original_title}
              />
              <ImageListItemBar
                title={genero.original_title}
                subtitle={genero.release_date}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${genero.original_title}`}
                    className="info"
                    onClick={() => agregarFavoritos(genero.id)}
                  >
                    <FavoriteIcon className="megusta" />
                  </IconButton>
                }
              />
            </ImageListItem>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default BuscarGenero;

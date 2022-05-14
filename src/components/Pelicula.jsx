import React, { useState } from "react";
import axios from "axios";
import Favoritos from "./Favoritos";

const img = "https://image.tmdb.org/t/p/w500";

const Pelicula = () => {
  const [mostrar, setMostrar] = useState([]);

  const [pelis, setPelis] = useState({});

  const [favoritos, setFavoritos] = useState([]);
  const guardar = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=e7edfc30aab897d6a30e54c3c5cc9c9d`;
    const resultado = await axios.get(url);
    setMostrar(resultado.data.results);
  };

  // const elminarmostrar = (id) => {
  //   const nuevasmostrars = mostrar.splice(id, [1]);
  //   setPelis(nuevasmostrars);
  // };

  const agregarmostrar = (id) => {
    const nuevasmostrars = mostrar.filter((item) => item.id === id);
    setFavoritos([...favoritos, nuevasmostrars[0]]);
    localStorage.setItem(1, JSON.stringify(favoritos));
  };

  return (
    <div className="pelis">
      {mostrar.map((saveMovie) => (
        <div key={saveMovie.id}>
          <h2 className="titulo">{saveMovie.original_title}</h2>
          <img className="img1" src={img + saveMovie.poster_path} />
          <p className="descripcion">{saveMovie.overview}</p>
          {/* <button onClick={() => elminarmostrar(mostrar.indexOf(saveMovie))}>
            Eliminar
          </button> */}
          <button onClick={() => agregarmostrar(saveMovie.id)}>
            Agregar a Favitos
          </button>
        </div>
      ))}
      <button onClick={guardar}>Consultar mis peliculas</button>
    </div>
  );
};

export default Pelicula;

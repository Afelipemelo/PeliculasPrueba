import React, { useEffect, useState, Fragment } from "react";
import "../movie.css";
const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [haveFav, setHavFav] = useState(false);

  const img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const data = localStorage.getItem(3);
    setFavoritos(JSON.parse(data));
    setHavFav(true);
  }, []);

  const elminarmostrar = (id) => {
    const nuevasmostrars = favoritos.filter((item) => item.id !== id);
    localStorage.setItem(3, JSON.stringify(nuevasmostrars));
    console.log(nuevasmostrars);
    setFavoritos(nuevasmostrars);
  };

  return !haveFav ? (
    <div className="general2">
      <p>No se han agregado favoritos</p>
    </div>
  ) : (
    <div className="contenedor-peliculas ">
      {favoritos.map((film) => (
        <Fragment key={favoritos.indexOf(film)}>
          <img className="img1" src={img + film.poster_path} />
          <div>
            <p>{film.overview}</p>
            <button onClick={() => elminarmostrar(film.id)}>Eliminar</button>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
export default Favoritos;

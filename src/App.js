import "./styles.css";
import { useState } from "react";
import axios from "axios";
import Pelicula from "./components/Pelicula";
import Favoritos from "./components/Favoritos";
import Index from "./components/Index";
import Rutas from "./Rutas";
// import firebase from "./Firebase";
function App() {
  return (
    <div>
      {/* <h1>peliculas</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Pelicula />} />

          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Router>

      <br /> */}
      <Rutas />
    </div>
  );
}

export default App;

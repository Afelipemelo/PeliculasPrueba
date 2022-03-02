import React,{Fragment,useState,useEffect,setState} from "react";
import Peliculas from "./components/Peliculas";


function App() {
const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=712185ee&s=marvel'
const [busqueda,setPeliculas] =  useState ([])
const [lista, setLista] = useState([])

const consultarApi = async () =>{
  const api = await fetch(`${API}`)
  const pelicula = await api.json()
  for(let i=0; i<pelicula.Search.length; i++){
    console.log(pelicula.Search[i].Title)
  }
// console.log({data: pelicula.totalResults})
  setPeliculas(pelicula.Search)
  setLista(pelicula.Search)
  console.log(lista)
}
  return (
    <Fragment>
      <h1>MI PELI</h1>
  
      <Peliculas 
        busqueda={busqueda}
      />
      <button onClick={consultarApi}>Pelicula</button>
    </Fragment>
  
  )
}

export default App;

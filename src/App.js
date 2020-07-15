import React, { useEffect, useState, useLayoutEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function App() {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(res => {
      console.log(res.data.results)
      setPokemon(res.data.results)
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <div className="jumbo">
        <h1>pokemon</h1>
      </div>
      <button className="btn" onClick={getPokemon}>no</button>
      <ul className="list-group">
        {pokemon.map( (x, y) =>
        <li key={y}className="list-group-item">
{x.name}
        </li>
        )}
        
      </ul>
    </div>
  )
}

export default App;

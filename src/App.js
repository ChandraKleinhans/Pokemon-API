import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(()=>{
    if(sendRequest){
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then(response => {
        setPokemon(response.data.results)
      })
      .catch()
    setSendRequest(false);
    }
  }, [sendRequest]);

  const onClick = (e) =>{
    setSendRequest(true)
  }


  return (
    <div className="App text-left">
        <div className="w-25 mx-auto">
            <button className="btn btn-secondary mb-3 d-block" onClick={onClick}> Fetch Pokemon</button>
            <ul>
                {pokemon.length > 0 && pokemon.map((pokemon, index)=>
                    <li key={index}>{pokemon.name}</li>
                )}
            </ul>
        </div>
    </div>
);
}



export default App;

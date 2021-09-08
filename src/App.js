import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import {apiKey, url} from './config';

function App() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(`${url}api_key=${apiKey}`)
      .then(results => {
        console.log(results.data.explanation);
        setNasaData(results.data);
        
      })
      .catch(err => {
        debugger
      })
  }, [])


  return (
    <div className="App">
      {// Display a loading message while the data is fetching
      (!nasaData) ? <h3>Loading...</h3> : <h2>{nasaData.title}</h2>}
      {// Display a loading message while the data is fetching
      (!nasaData) ? <h3>Loading...</h3> : <img src={nasaData.hdurl} alt={'stuff'}></img>}
      {// Display a loading message while the data is fetching
        (!nasaData) ? <h3>Loading...</h3> : <h3>{nasaData.explanation}</h3>}
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import {apiKey, url} from './config';
import NasaCard from "./components/NasaCard";

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
      <NasaCard nasaData={nasaData}/>
    </div>
  );
}

export default App;

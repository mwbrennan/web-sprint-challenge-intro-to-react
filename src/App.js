import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [person, setPerson] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/?')
    .then(res => {
      setPerson(res.data.results)
      // console.log(res.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, []);



  return (
    <div className="App">
      <h1 className="Header">Characters from Star Wars</h1>
      {
        person.map((data, i) => {
          console.log(data.name)
          return <Character key = {i} person = {data}/>
        })
      }
    </div>
  );
}

export default App;
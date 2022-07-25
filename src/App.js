import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import PokeList from './components/PokeList';
import {setPokemons} from './actions'

import Logo from './assets/imgs/logo.svg'
import { getPokemon } from './api';

function App() {
  const pokemons = useSelector( state => state.pokemons);
  console.log("🚀 ~ file: App.js ~ line 15 ~ App ~ pokemons", pokemons)
  const disptach = useDispatch();
  useEffect(() => {
    const fetchPokemons =  async () => {
      const resPokemons = await getPokemon();
      console.log("🚀 ~ file: App.js ~ line 20 ~ fetchPokemons ~ resPokemons", resPokemons)
      disptach(setPokemons(resPokemons));
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} className="Logo" />
      </Col>
      <Col span={8} offset={8} >
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { Col } from 'antd';
import { Searcher } from './components/Searcher';
import PokeList from './components/PokeList';

import Logo from './assets/imgs/logo.svg'
import { getPokemon } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons =  async () => {
      const resPokemons =await getPokemon();
      setPokemons(resPokemons)
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

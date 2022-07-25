import React from 'react'
import PokeCard from './PokeCard'
import "./Style/PokeList.css"

export default function PokeList({pokemons}) {
 
  return (
    <div className='PokeList'>
      {
        pokemons.map((pokemon) => {
          return <PokeCard name={pokemon.name} url={pokemon.url} key={pokemon.name} />
        })
      }
    </div>
  )
};

PokeList.defaultProps = {
  pokemons: Array(10).fill('')
};

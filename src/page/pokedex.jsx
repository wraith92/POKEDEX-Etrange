import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import data from '../data/pokedex.json';
import Listepokemon from '../component/Listepokemon';
import AddPokemon from '../component/AddPokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/img/International_Pokémon_logo.svg.png";

library.add(faSearch);

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading
    const delay = setTimeout(() => {
      setPokemons(data);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  const handleSearch = event => {
    setSearchName(event.target.value);
  };

  const handleDeletePokemon = id => {
    setPokemons(prevPokemons => prevPokemons.filter(pokemon => pokemon.id !== id));
  };

  const ajouterPokemon = newPokemon => {
    const id = pokemons.length + 1;
    const nouveauPokemon = {
      id,
      name: {
        english: newPokemon.name.english,
        japanese: newPokemon.name.japanese,
        chinese: newPokemon.name.chinese,
        french: newPokemon.name.french
      },
      type: newPokemon.type.split(',').map(item => item.trim()),
      base: {
        HP: parseInt(newPokemon.base.HP),
        Attack: parseInt(newPokemon.base.Attack),
        Defense: parseInt(newPokemon.base.Defense),
        'Sp. Attack': parseInt(newPokemon.base['Sp. Attack']),
        'Sp. Defense': parseInt(newPokemon.base['Sp. Defense']),
        Speed: parseInt(newPokemon.base.Speed)
      }
    };

    setPokemons(prevPokemons => [...prevPokemons, nouveauPokemon]);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.english.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-center mt-4">
          <img src={img} alt="" className="img-fluid" style={{ maxWidth: '300px' }} />
        </div>
        <div className="col-md-6 d-flex">
          <div className="input-group mb-3">
            <input
              type="text"
              value={searchName}
              onChange={handleSearch}
              className="form-control form-control-lg"
              placeholder="Search by Name"
              aria-label="Search by Name"
              aria-describedby="search-button"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9">
          {isLoading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Listepokemon data={filteredPokemons} handleDeletePokemon={handleDeletePokemon} />
          )}
        </div>
        <div className="col-md-3">
          <AddPokemon ajouterPokemon={ajouterPokemon} />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

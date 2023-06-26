import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddPokemon({ ajouterPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    id: 0,
    name: {
      english: '',
      japanese: '',
      chinese: '',
      french: ''
    },
    type: '',
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      'Sp. Attack': 0,
      'Sp. Defense': 0,
      Speed: 0
    }
  });

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'type') {
      setNewPokemon(prevState => ({
        ...prevState,
        type: value
      }));
    } else if (name.startsWith('base.')) {
      const baseName = name.split('.')[1];
      setNewPokemon(prevState => ({
        ...prevState,
        base: {
          ...prevState.base,
          [baseName]: parseInt(value)
        }
      }));
    } else {
      setNewPokemon(prevState => ({
        ...prevState,
        name: {
          ...prevState.name,
          [name]: value
        }
      }));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    ajouterPokemon(newPokemon);
    setNewPokemon({
      id: 0,
      name: {
        english: '',
        japanese: '',
        chinese: '',
        french: ''
      },
      type: '',
      base: {
        HP: 0,
        Attack: 0,
        Defense: 0,
        'Sp. Attack': 0,
        'Sp. Defense': 0,
        Speed: 0
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="border p-4 text-gray custom-form">
      <Form.Group controlId="englishName">
        <Form.Label>English Name:</Form.Label>
        <Form.Control
          type="text"
          name="english"
          value={newPokemon.name.english}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="japaneseName">
        <Form.Label>Japanese Name:</Form.Label>
        <Form.Control
          type="text"
          name="japanese"
          value={newPokemon.name.japanese}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="chineseName">
        <Form.Label>Chinese Name:</Form.Label>
        <Form.Control
          type="text"
          name="chinese"
          value={newPokemon.name.chinese}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="frenchName">
        <Form.Label>French Name:</Form.Label>
        <Form.Control
          type="text"
          name="french"
          value={newPokemon.name.french}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="type">
        <Form.Label>Type (comma-separated):</Form.Label>
        <Form.Control
          type="text"
          name="type"
          value={newPokemon.type}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="text-center mt-4">
        <Button variant="primary" type="submit" style={{ backgroundColor: 'green' }}>
          Ajouter un Pokémon
        </Button>
      </div>

    </Form>
  );

}

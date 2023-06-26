import React, { useState } from 'react';
import { Card, Button, Pagination } from 'react-bootstrap';
import { getTypeColor } from './getType';

export default function Listepokemon({ data ,handleDeletePokemon }) {
  const [language, setLanguage] = useState('english');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleLanguageChange = selectedLanguage => {
    setLanguage(selectedLanguage);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };



  const getButtonStyle = selectedLanguage => {
    if (language === selectedLanguage) {
      switch (selectedLanguage) {
        case 'french':
          return 'bg-blue-500 text-white';
        case 'japanese':
          return 'bg-red-500 text-white';
        case 'chinese':
          return 'bg-gray-500 text-white';
        default:
          return '';
      }
    } else {
      return '';
    }
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="flex justify-between">
            <button
              onClick={() => handleLanguageChange('english')}
              className={`py-2 px-4 rounded ${getButtonStyle('english')}`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('french')}
              className={`py-2 px-4 rounded ${getButtonStyle('french')}`}
            >
              French
            </button>
            <button
              onClick={() => handleLanguageChange('japanese')}
              className={`py-2 px-4 rounded ${getButtonStyle('japanese')}`}
            >
              Japanese
            </button>
            <button
              onClick={() => handleLanguageChange('chinese')}
              className={`py-2 px-4 rounded ${getButtonStyle('chinese')}`}
            >
              Chinese
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {currentData.map(pokemon => (
          <div key={pokemon.id} className="col-10 col-sm-6 col-md-4 mb-3">
            <Card className="h-500">
              <Card.Body>
                <Card.Title className="text-lg font-semibold mb-2">
                  {pokemon.name[language]}
                </Card.Title>
                <Card.Text>
                  Type:{' '}
                  {pokemon.type.map((type, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: getTypeColor(type.split(',')[0].trim()),
                        color: '#FFFFFF',
                        padding: '4px',
                        marginRight: '4px',
                        borderRadius: '4px'
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </Card.Text>
                <Card.Text>HP: {pokemon.base.HP}</Card.Text>
                <Card.Text>Attack: {pokemon.base.Attack}</Card.Text>
                <Card.Text>Defense: {pokemon.base.Defense}</Card.Text>
                <Card.Text>Sp. Attack: {pokemon.base['Sp. Attack']}</Card.Text>
                <Card.Text>Sp. Defense: {pokemon.base['Sp. Defense']}</Card.Text>
                <Card.Text>Speed: {pokemon.base.Speed}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeletePokemon(pokemon.id)}
                  className="mt-2"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {totalPages > 10 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            {Array.from({ length: 10 }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Ellipsis disabled />
            <Pagination.Item
              onClick={() => handlePageChange(totalPages)}
              active={totalPages === currentPage}
            >
              {totalPages}
            </Pagination.Item>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export const getTypeColor = type => {
    const colors = {
      Grass: '#78C850',
      Poison: '#A040A0',
      Fire: '#F08030',
      Water: '#6890F0',
      Bug: '#A8B820',
      Normal: '#A8A878',
      Electric: '#F8D030',
      Ground: '#E0C068',
      Fairy: '#EE99AC',
      Fighting: '#C03028',
      Psychic: '#F85888',
      Rock: '#B8A038',
      Ghost: '#705898',
      Ice: '#98D8D8',
      Dragon: '#7038F8',
      Steel: '#B8B8D0',
      Flying: '#A890F0'
    };
  
    return colors[type] || '#000000';
  };
  
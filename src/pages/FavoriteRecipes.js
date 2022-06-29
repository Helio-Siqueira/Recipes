import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';
// teste

function FavoriteRecipes() {
  const [display, setDsplay] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setDsplay(favorites);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          all
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      <div>
        {(display.length > 0) && display.map((recipe, index) => (
          <FavoriteCard
            recipe={ recipe }
            key={ index }
            index={ index }
          />
        ))}
      </div>
    </div>
  );
}

export default FavoriteRecipes;

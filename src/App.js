import React, { useState } from 'react';
import movieData from './database/data';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  // Initialiser avec les 3 premiers films
  const [movies, setMovies] = useState(movieData.slice(0, 3));

  // Liste des films restants (qui ne sont pas encore affichés)
  const [remainingMovies, setRemainingMovies] = useState(movieData.slice(3));

  // Liste des films filtrés à afficher
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Fonction de filtre pour la recherche
  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? parseFloat(movie.rating) >= rating : true)
    );
    setFilteredMovies(filtered);
  };
  const addMovie = (newMovie) => {
    setMovies(prev => [...prev, { ...newMovie, id: prev.length + 1 }]);
  };

  return (

    <div className="App">
       <Filter onFilter={handleFilter} />
       <AddMovie onAddMovie={addMovie} />
    <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
    </div>
  );
}

export default App;

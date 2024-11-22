import React, { useState } from 'react';

function AddMovie({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie(prevMovie => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    // Reset form after submission
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 5
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Movie title"
        value={newMovie.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Movie description"
        value={newMovie.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="posterURL"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={handleChange}
        min="1"
        max="10"
        className="w-full p-2 border rounded"
        required
      />
      <button 
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Movie
      </button>
    </form>
  );
}

export default AddMovie;
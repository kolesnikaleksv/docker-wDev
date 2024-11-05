import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <ul>
      {movies.map(({ title, director, year, genres, rating }) => {
        return (
          <li
            key={title}
          >{`Title: ${title}, Dirrector: ${director}, year: ${year}, genres: ${genres}, rating: ${rating}`}</li>
        );
      })}
    </ul>
  );
}

export default App;

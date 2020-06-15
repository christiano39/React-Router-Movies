import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import MovieCard from './MovieCard'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  //const { title, director, metascore, stars } = movie;
  const { url } = useRouteMatch() 
  return (
    <Link to={`${url}movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;

import React from 'react';
import { useHistory, NavLink, useRouteMatch } from 'react-router-dom'

const SavedList = props => {
  const history = useHistory()
  const { url } = useRouteMatch()

  const routeToHome = () => {
    history.push('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`${url}movies/${movie.id}`} key={movie.title} activeClassName='selected'>
          <span className="saved-movie" key={movie.title}>{movie.title}</span>
        </NavLink>
      ))}
      <div className="home-button" onClick={routeToHome}>Home</div>
    </div>
  )
};

export default SavedList;

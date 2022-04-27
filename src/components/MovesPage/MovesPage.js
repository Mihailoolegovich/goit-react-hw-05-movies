import React, { useState, useEffect } from 'react';
import './MovesPage.css';
import { SearchMovies } from 'ApiService/ApiService';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import slugify from 'slugify';

export default function Films() {
  const [film, setFilm] = useState([]);
  const [filmName, setFilmName] = useState('');
  const [inputName, setInputName] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const localName = window.localStorage.getItem('films_in_search');

    if (localName) {
      setFilmName(localName);
    }
  }, []);

  useEffect(() => {
    if (!filmName) {
      return;
    }
    SearchMovies(filmName).then(e => {
      setFilm(e.results);
      handleSaerch();
    });
  }, [filmName]);

  function handleSaerch() {
    const name = slugify(`${filmName}`, { lower: true });

    navigate(`?query=${name}`);
  }

  function handleChange(e) {
    setInputName(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilmName(inputName);
    window.localStorage.setItem('films_in_search', inputName);
  }

  return (
    <>
      <h2> Films</h2>
      <form onSubmit={handleSubmit}>
        <label className="form__label">
          <input
            onChange={handleChange}
            type="text"
            value={inputName}
            required
          />
        </label>
        <button type="submit" name="button">
          Add contact
        </button>
      </form>

      {film && (
        <ul>
          {film.map(({ id, title, name }) => (
            <li key={id}>
              <Link
                to={`${id}`}
                state={{
                  from: location,
                  label: 'Go back Films',
                }}
                className="move_link"
              >
                <h3>{title ? title : name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

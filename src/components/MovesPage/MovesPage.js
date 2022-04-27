import React, { useState, useEffect } from 'react';
import './MovesPage.css';
import { SearchMovies } from 'ApiService/ApiService';
import {
  Link,
  useLocation,
  // useNavigate,
  useSearchParams,
} from 'react-router-dom';
import slugify from 'slugify';

export default function MovesPage() {
  const [film, setFilm] = useState([]);
  const [filmName, setFilmName] = useState('');
  const [inputName, setInputName] = useState('');

  const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // const localName = window.localStorage.getItem('films_in_search');
    // if (localName) {
    //   setFilmName(localName);
    // }

    if (searchParams.get('query')) {
      setFilmName(searchParams.get('query'));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!filmName) {
      return;
    }
    const slugName = slugify(filmName, { lower: true });
    SearchMovies(filmName).then(e => {
      setFilm(e.results);
      setSearchParams({ query: slugName });
      // navigate(`?query=${slugify(filmName, { lower: true })}`);

      // handleSaerch();
    });
  }, [filmName, setSearchParams]);

  // function handleSaerch() {
  //   const name = slugify(`${filmName}`, { lower: true });
  //   navigate(`?query=${name}`);
  // }

  function handleChange(e) {
    setInputName(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilmName(inputName);
    // window.localStorage.setItem('films_in_search', inputName);
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

import { GetMovieDetails } from 'ApiService/ApiService';
import './MovieDetailsPage.css';
import ImagTemplate from 'components/ImagTemplate';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

const Cast = lazy(() => import('components/Cast/Cast.js'));
const Reviews = lazy(() => import('components/Reviews/Reviews.js'));

export default function OneFilms() {
  const [film, setFilm] = useState();
  const [error, setError] = useState();
  const [locBack, setLocBack] = useState([]);

  const { id } = useParams();
  const location = useLocation();
  console.log('location in OneFils', location);

  useEffect(() => {
    if (!location.state) {
      return;
    }
    setLocBack(location.state);
  }, [location.state]);

  useEffect(() => {
    GetMovieDetails(id)
      .then(e => setFilm(e))
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  return (
    <>
      <Link to={locBack.from?.pathname ?? '/'}>
        <button type="button" style={{ marginBottom: '15px' }}>
          {locBack.label ?? 'Go back'}
        </button>
      </Link>

      {error && (
        <h2>
          {error}
          <br />
          Not find film
        </h2>
      )}

      {film && (
        <>
          <div className="container_move" key={id}>
            <ImagTemplate
              tags={film.original_name}
              path={film.poster_path}
              className={'poster_move'}
            />
            <div className="about_move">
              <h2>{film.title ? film.title : film.name}</h2>
              <p>{`User Score: ${film.vote_average * 10} %`}</p>

              <h3>Overview</h3>
              <p>{film.overview}</p>

              <h3>Genres</h3>
              <p>{film.genres.map(el => el.name).join('  ')}</p>
            </div>
          </div>

          <hr />
          <p>Additional information</p>

          <NavLink to="cast">Cast</NavLink>
          <br />
          <NavLink to="reviews">Reviews</NavLink>
          <hr />

          <Suspense fallback={<h1>Loader...</h1>}>
            <Routes>
              <Route path="cast" element={<Cast filmId={id} />}></Route>/
              <Route path="reviews" element={<Reviews filmId={id} />}></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';

const HomePage = lazy(() => import('./HomePage'));
const Films = lazy(() => import('./MovesPage'));
const OneFilms = lazy(() => import('./MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={<h1>Loader...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="films" element={<Films />}></Route>
            <Route path="films/:id" element={<OneFilms />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

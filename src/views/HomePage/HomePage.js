import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as apiService from '../../services/apiService';
import Loader from '../../components/Loader/Loader';
import Status from '../../services/status';
import ErrorView from '../../components/ErrorView/ErrorView';
import noImageFound from '../../img/noimagefound.jpg';
import s from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    apiService
      .getTrending()
      .then(({ results }) => {
        setMovies(results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Try again.');
        setStatus(Status.REJECTED);
      });
  }, []);

  return (
    <main className={s.main}>
      <h1 className={s.title}>Trending today</h1>

      {status === Status.PENDING && <Loader />}

      {status === Status.REJECTED && <ErrorView message={error.message} />}

      {status === Status.RESOLVED && (
        <ul className={s.moviesList}>
          {movies.map(movie => (
            <li key={movie.id} className={s.moviesItem}>
              <Link to={`movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : noImageFound
                  }
                  alt={movie.title}
                  className={s.poster}
                />
              </Link>
              <p className={s.movieTitle}>{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
export default HomePage;

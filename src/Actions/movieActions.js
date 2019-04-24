import {
  FETCH_MOVIES_SUCCESSED,
  FETCH_MOVIES_FAILED,
  SEARCH_MOVIE,
  FETCH_MOVIE_DETAILS,
  FETCH_MOVIES,
  MOVIES_ARE_LOADING
} from "./types";

import {
  GENRES_ARE_LOADING,
  FETCH_GENRES_FAILED,
  FETCH_GENRES_SUCCESSED
} from "./types";

export const fetchingMovies = (page = 1) => {
  return {
    type: FETCH_MOVIES,
    payload: page
  }
};


export const fetchMoviesFailed = () => {
  return {
    type: FETCH_MOVIES_FAILED
  };
};

export const fetchMoviesSuccessed = movies => {
  return {
    type: FETCH_MOVIES_SUCCESSED,
    payload: movies
  };
};


export const searchMovies = (query = 'A' , page = 1) => {
  return {
    type: SEARCH_MOVIE,
    payload: {query, page}
  }
  // if(!query) {query = 'A'}
  // return async (dispatch) => {
  //   dispatch(moviesAreLoading(true))
  //   try {
  //     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e0dcaa7e93980fb84e1d2430d01b887&language=en-US&query=${query}&page=${page}&include_adult=false`)

  //     const movies = await response.json();
  //     if (movies.total_pages > 1000) {
  //       movies.total_pages = 1000;
  //     }
      
  //     dispatch(fetchMoviesSuccessed(movies));
  //     dispatch(moviesAreLoading(false));
  //   } catch (e) {
  //     dispatch(fetchMoviesFailed())
  //   }
  // }
};

export const moviesAreLoading = () => {
  return {
    type: MOVIES_ARE_LOADING
  };
};

export const fetchingGenres = () => {
    return{
      type: 'FETCHING_GENRES'
    }
};

export const fetchGenresSuccessed = (genres) => {
  console.log(genres);
  return {
    type: FETCH_GENRES_SUCCESSED,
    payload: genres
  };
};

export const fetchGenresFailed = () => {
  return {
    type: FETCH_GENRES_FAILED
  };
};

export const genresAreLoading = bool => {
  return {
    type: GENRES_ARE_LOADING,
    payload: bool
  };
};

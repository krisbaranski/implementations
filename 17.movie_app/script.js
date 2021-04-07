'use strict';

const main = document.getElementById('main');
const API_URL =
  'https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=25abe828f8680becf698c08e24be0b51&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https:/api.themoviedb.org/3/search/movie?api_key=25abe828f8680becf698c08e24be0b51&query="';
const SCIFI_API =
  'https:/api.themoviedb.org/3/discover/movie?with_genres=878&sort_by=vote_average.desc&api_key=25abe828f8680becf698c08e24be0b51&page=1';
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(SCIFI_API);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt=""
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
       ${overview}
    </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});

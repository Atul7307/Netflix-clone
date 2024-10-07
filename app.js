// api key  from TMDB 
const api = "api_key=74613dbaec82c00b10d6fe5a4e20fa6d";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner__title");
  var banner__desc = document.getElementById("banner__description");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.name;
})

// movies rows
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("netflixrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "NETFLIX ORIGINALS";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s = movie.name.replace(/\s+/g, "");
    poster.id = s;
    poster.src = img_url + movie.poster_path;

    const moviePoster = document.createElement("div")
    moviePoster.classList = "movie-poster"
    row_posters.appendChild(moviePoster)
    const content = document.createElement("div")
    content.classList = "content"
    const movieName = document.createElement("h3")
    movieName.classList = "movie-name"
    const popularity = document.createElement('p')
    popularity.classList = "popularity"
    movieName.innerText = movie.original_name 
    popularity.innerText = movie.popularity
    
    content.appendChild(movieName)
    content.appendChild(popularity)
    console.log(content);
    
    

    moviePoster.appendChild(poster);
    moviePoster.appendChild(content);

  });
});



//trending 
fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Trending Now";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);

  
  posterContent(data , row_posters)
});

// top rated 
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  
  posterContent(data , row_posters)
});

// action
fetch(requests.fetchActionMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Action Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  
  posterContent(data , row_posters)
});
// comedy
fetch(requests.fetchComedyMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Comedy Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  posterContent(data , row_posters)
});
// Horror
fetch(requests.fetchHorrorMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Horror Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  posterContent(data , row_posters)
});
// Romance
fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Romance Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  posterContent(data , row_posters)
});
// documentry
fetch(requests.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Documentaries";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  posterContent(data , row_posters)
});


const posterContent = (data , row_posters) =>{

  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row__poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;

    const moviePoster = document.createElement("div")
    moviePoster.classList = "movie-poster"
    row_posters.appendChild(moviePoster)
    const content = document.createElement("div")
    content.classList = "content"
    const movieName = document.createElement("h3")
    movieName.classList = "movie-name"
    const popularity = document.createElement('p')
    popularity.classList = "popularity"
    movieName.innerText = movie.original_title 
    popularity.innerText = movie.popularity
    
    content.appendChild(movieName)
    content.appendChild(popularity)
    console.log(content);
    
    

    moviePoster.appendChild(poster);
    moviePoster.appendChild(content);

  });
}

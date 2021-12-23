// Chiamata al server con axios
const apiKey = "0330724af874d28c62a4c079ed817bce";
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const img_BASE_URL = "https://image.tmdb.org/t/p/w300";

//funzione asincrona autoinvocante anonima
(async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?api_key=${apiKey}`);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
})().then((res) => domInjection(res)); // "spacchetto" la promessa passandola ad una CALLBACK per il rendering nel DOM

const domInjection = (res) => {
  let movieItem = "";
  movieItem = `<div class='card'>`;
  movieItem += `<h2> ${res.title} </h2>`;
  res.poster_path //controllo se esiste, altrimenti renderizzo altra immagine
    ? (movieItem += `<img src='${img_BASE_URL + res.poster_path}' alt='${
        res.overview || "Not Avalaible"
      }'>`)
    : (movieItem += `<img src='../src/img/generic_movie.jpg' alt='latest movie' width=300 >`);
  movieItem += `<p> Overview: ${res.overview || "Not Avalaible"} </p>`;
  movieItem += `<p> Duration: ${res.runtime || "Not Avalaible"} min </p>`;
  movieItem += `<p> ID: ${res.id} </p>`;
  movieItem += "</div>";

  document.getElementById("inject-div").innerHTML = movieItem;
};

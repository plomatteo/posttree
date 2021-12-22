// Chiamata al server con axios

const apiKey = "0330724af874d28c62a4c079ed817bce";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const getLatestMovie = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest?api_key=${apiKey}`);
    const movieItems = response.data;
    console.log(movieItems.title);
    return movieItems;
  } catch (errors) {
    console.error(errors);
  }
};
getLatestMovie();

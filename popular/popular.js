//const key = '0330724af874d28c62a4c079ed817bce';
//const urlTopRated = 'https://api.themoviedb.org/3/movie/popular?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';

var url = 'https://api.themoviedb.org/3/movie/popular?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
var xhr = new XMLHttpRequest();
var token = '0330724af874d28c62a4c079ed817bce';
var url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${token}&language=en-US&page=1`;
xhr.open('GET', url);

// questa funzione verrà chiamata al cambio di stato della chiamata AJAX
xhr.onreadystatechange = function () {
    var DONE = 4; // stato 4 indica che la richiesta è stata effettuata.
    var OK = 200; // se la HTTP response ha stato 200 vuol dire che ha avuto successo.
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            console.log(xhr.responseText); // Questo è il corpo della risposta HTTP
            const obj = JSON.parse(xhr.responseText);
            console.log(obj);
            var cards= "";
            obj.results.forEach((element) => {
                cards +=`<div class="cards"><h4>${element.title}</h4><div><div id="icona">${element.vote_average}</div><img class="poster" src="https://image.tmdb.org/t/p/w400/${element.poster_path}"></img></div></div>`;
                document.getElementById("box").innerHTML =cards;
            });
        } else {
            console.log('Error: ' + xhr.status); // Lo stato della HTTP response.
        }
    }

};
// Invia la richiesta a server-side.php
xhr.send(null);
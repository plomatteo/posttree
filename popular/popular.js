
const token = "0330724af874d28c62a4c079ed817bce"
const urlPopular = `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}&language=en-US&page=1`


function getPopular(url) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();

        httpReq.open("GET", url, true);

        httpReq.send();

        httpReq.onreadystatechange = function () {
            var data;
            if (httpReq.readyState == 4) {
                if (httpReq.status == 200) {
                    data = JSON.parse(httpReq.responseText);
                    resolve(data);
                }
                else { reject(new Error(httpReq.statusText)) }
            }

        }
    })
}

getPopular(urlPopular).then(function (data) {
    console.log(data);
    var filmData = "";





    data.results.map((film) => {
        filmData += `<div class='card'>`
        filmData += `<img src="https://image.tmdb.org/t/p/w400/${film.poster_path}" alt="poster">`
        filmData += `<div class="hide-pop">Popularity: ${film.popularity}</div>`
        filmData += `</div>`
    })
    document.getElementById("Pop").innerHTML = filmData
}).catch(function(){ document.write('<h1 style="color:red; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">Errore di caricamento della pagina, riprova più tardi.<br>Grazie</h1>')})






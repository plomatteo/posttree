
const token = "0330724af874d28c62a4c079ed817bce"
var urlNowPlayng = `https://api.themoviedb.org/3/movie/now_playing?api_key=${token}&language=en-US&page=1`


function nowPlayng(url) {
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

nowPlayng(urlNowPlayng).then(function (data) {
    console.log(data);
    var filmData = "";





    data.results.map((film) => {
        filmData += `<div class='card'>`
        filmData += `<img src="https://image.tmdb.org/t/p/w400/${film.poster_path}" alt="poster">`
        filmData += `<div class="hide-vote">Average rating: ${film.vote_average}</div>`
        filmData += `</div>`
    })
    document.getElementById("NowPl").innerHTML = filmData
})


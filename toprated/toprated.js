const key = '0330724af874d28c62a4c079ed817bce';
const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';

function httpGetPost(url) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            let post;
            if (httpReq.readyState == 4) {
                if (httpReq.status == 200) {
                    post = JSON.parse(httpReq.responseText);
                    resolve(post);
                }
                else {
                    reject(new Error(httpReq.statusText))
                }
            }
        }
        httpReq.open("GET", url, true)
        httpReq.send();
    })
}

httpGetPost(urlTopRated).then(function (data) {
    var e = data.results;
    var topFive = e.slice(0,5);
    var topTen = e.slice(5,10);
    var topFifteen = e.slice(10,15);
    var topTwenty = e.slice(15,20);
    console.log(e);

    var baseUrl = 'https://image.tmdb.org/t/p/w300';

    document.getElementById('top-five').innerHTML = topFive.map(movie =>
        `<div class="card">
            <img src="${baseUrl + movie.poster_path}"></img>  
            <p class="hide-vote">Average rating:${movie.vote_average}</p>
        </div>`
    ).join('')

    document.getElementById('top-ten').innerHTML = topTen.map(movie =>
        `<div class="card">
            <img src="${baseUrl + movie.poster_path}"></img>  
            <div class="hide-vote">Average rating:${movie.vote_average}</div>
        </div>`
    ).join('')

    document.getElementById('top-fifteen').innerHTML = topFifteen.map(movie =>
        `<div class="card">
            <img src="${baseUrl + movie.poster_path}"></img>  
            <div class="hide-vote">Average rating:${movie.vote_average}</div>
        </div>`
    ).join('')

    document.getElementById('top-twenty').innerHTML = topTwenty.map(movie =>
        `<div class="card">
            <img src="${baseUrl + movie.poster_path}"></img>  
            <div class="hide-vote">Average rating:${movie.vote_average}</div>
        </div>`
    ).join('')
});



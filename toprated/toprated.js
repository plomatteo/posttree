const key = '0330724af874d28c62a4c079ed817bce';
const apiTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=`;
const urlRateMovie = `https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<api_key>>`;

function httpGetPost(url) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            var post;
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

function httpRateMovie(url, rating) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            var post;
            if (httpReq.readyState == 4) {
                if (httpReq.status == 201) {
                    post = JSON.parse(httpReq.responseText);
                    resolve(post);
                }
                else {
                    reject(new Error(httpReq.statusText))
                }
            }
        }
        httpReq.open("POST", url, true)
        httpReq.send();
    })
}

/* CHIAMATA GET TOP RATED PAG 1 */

httpGetPost(apiTopRated).then(function (data) {
    var baseUrl = 'https://image.tmdb.org/t/p/w300';
    document.getElementById('page-wrap').innerHTML = data.results.map((movie, i) => 
            `<div class="card">
                <img class="poster" src="${baseUrl + movie.poster_path}" alt="poster"></img>  
                <div class="overlay">
                    <div class="overlaytext">
                        <button>More info</button>
                    </div>
                </div>
            </div>`
        ).join('')
})

/* CHIAMATA GET TOP RATED PAG SUCCESSIVE */

var pageNum = 1;

function callNextPage() {

    pageNum = pageNum + 1;

    httpGetPost(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pageNum}`).then(function (data) {
        console.log(data.results);
    
        var baseUrl = 'https://image.tmdb.org/t/p/w300';
    
        document.getElementById('page-wrap').innerHTML = data.results.map((movie, i) => 
            `<div class="card">
                <img class="poster" src="${baseUrl + movie.poster_path}" alt="poster"></img>  
                <div class="overlay">
                    <div class="overlaytext">
                        <button>More info</button>
                    </div>
                </div>
            </div>`
        ).join('')
    })}

function callPreviousPage() {

    if(pageNum <= 1) {
        pageNum = 1;
    } else {
        pageNum = pageNum - 1;
    }
    

    httpGetPost(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pageNum}`).then(function (data) {
        console.log(data.results);
    
        var baseUrl = 'https://image.tmdb.org/t/p/w300';
    
        document.getElementById('page-wrap').innerHTML = data.results.map((movie, i) => 
            `<div class="card">
                <img class="poster" src="${baseUrl + movie.poster_path}" alt="poster"></img>  
                <div class="overlay">
                    <div class="overlaytext">
                        <button>More info</button>
                    </div>
                </div>
            </div>`
        ).join('')
    })
}


const key = '0330724af874d28c62a4c079ed817bce';
const popularity = 'https://api.themoviedb.org/3/movie/popular?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';

function getPopular(url) {
    return new Promise(function (resolve, reject) {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = function () {
            let get;
            if (httpReq.readyState == 4) {
                if (httpReq.status == 200) {
                    get = JSON.parse(httpReq.responseText);
                    resolve(get);
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

getPopular(popularity).then(function (data) {
    var e = data.results;
    console.log(e);


    function printList(list) {
        var str = "";

        list.forEach(p => {
            str += "<tr>"
            str += "<td><a>" + p.title + "</a></td>"
            str += "<td>" + p.popularity + "</td>"
            str += "</td>"
        });
        document.getElementById('popular').innerHTML = str;
    }

    printList(e);

    function printFirst(top) {
        var baseUrl = 'https://image.tmdb.org/t/p/w500';
        document.getElementById('card-poster').src = baseUrl + top.poster_path;
        document.getElementById('card-title').innerHTML = "più popolare: "+ top.title;
    }

    printFirst(e[0]);

});

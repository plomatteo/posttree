//const key = '0330724af874d28c62a4c079ed817bce';
//const urlTopRated = 'https://api.themoviedb.org/3/movie/popular?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';

var url = 'https://api.themoviedb.org/3/movie/popular?api_key=0330724af874d28c62a4c079ed817bce&language=en-US&page=1';
fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });
  
  function printList(list) {
    var str = "";

    list.forEach(v => {
        str += "<tr>"
        str += "<td><a>" + v.title + "</a></td>"
        str += "<td>" + v.popularity + "</td>"
        str += "</td>"
    });
    document.getElementById('popular').innerHTML = str;
}

printList(e);

function printFirst(top) {
    var baseUrl = 'https://image.tmdb.org/t/p/w500';
    document.getElementById('card-poster').src = baseUrl + top.poster_path;
    document.getElementById('card-title').innerHTML = top.title;
}

printFirst(e[0]);

});
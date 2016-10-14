window.onload = function() {

    // Vanilla JavaScript AJAX request
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        // console.log(http);
        if(http.readyState == 4 && http.status == 200) {
            // console.log(JSON.parse(http.response));
        }
    }
    http.open("GET", "data/tweets.json", true);
    http.send();
    // console.log("test"); // when async will log before the request is returned

    // jQuery AJAX request
    $.get("data/tweets.json", function(data) {
        console.log(data);
    });
    console.log("test");
}

window.onload = function() {

    /*
    function callback(val) {
        console.log(val);
    }
    var fruits = ["banana", "apple", "pear"];

    fruits.forEach(callback);
    console.log("done");


    function cb(data){
        console.log(data);
    }

    $.get("data/tweets.json", cb);
    console.log("test");

    */

    // callback hell example
    /*
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: function(data) {
            console.log(data);

            $.ajax({
                type: "GET",
                url: "data/friends.json",
                success: function(data) {
                    console.log(data);

                    $.ajax({
                        type: "GET",
                        url: "data/videos.json",
                        success: function(data) {
                            console.log(data);
                        },
                        error: function(jqXHR, textStatus, error) {
                            console.log(error);
                        }
                    });

                },
                error: function(jqXHR, textStatus, error) {
                    console.log(error);
                }
            });

        },
        error: function(jqXHR, textStatus, error) {
            console.log(error);
        }
    });
    */

    // fixing callback hell example

    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    });

    function cbTweets(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError
        });

    }

    function cbFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data) {
                console.log(data);
            },
            error: handleError
        });

    }


};

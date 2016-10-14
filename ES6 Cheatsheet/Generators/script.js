window.onload = function() {

    function* gen() {
        yield console.log("pear"); // JS runs right to left, so will only log pear
        yield console.log("banana");
        yield console.log("apple");
        console.log("all done");
    }

    var myGen = gen(); // first time calling the generator doesn't fire the code, it just sets up the generator. It returns an iterator.

    myGen.next(); // this does the next thing - it actually runs the code. It's the "play button". So with yield in place, this logs "pear"

    myGen.next(); // this goes to the next yield, so it logs "banana"

    myGen.next();
    myGen.next();

    function* fancyGen() {
        var x = yield "pear";
        var y = yield "banana";
        var z = yield "apple";
        return x + y + z;
    }

    var myFancyGen = fancyGen();
    console.log(myFancyGen.next());
    console.log(myFancyGen.next(10));
    console.log(myFancyGen.next(5));
    console.log(myFancyGen.next(3));


    // real work example

    genWrapper(function* generator() {
        var tweets = yield $.getJSON("data/tweets.json");
        console.log(tweets);

        var friends = yield $.getJSON("data/fb-friends.json");
        console.log(friends);

        var ytVids = yield $.getJSON("data/yt-vids.json");
        console.log(ytVids);
    });

    function genWrapper(generator) {

        // set up generator / iterator
        var smartGen = generator();

        function handle(yielded) {
            if (!yielded.done)  {
                yielded.value.then(function(data) {
                    return handle(smartGen.next(data));
                });
            }
        } // end handle

        // return handle function, passing in smartGen.next
        return handle(smartGen.next());
    } // end genWrapper

}

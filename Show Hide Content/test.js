var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function() {
    if(content.className == "open") {

        // shrink the box
        // remove class of 'open'
        content.className = "";

        // change text of button
        button.innerHTML = "Show More";

    } else {

        // expand the box
        // add class of 'open'
        content.className = "open";

        // change text of button
        button.innerHTML = "Show Less";
        
    }
};

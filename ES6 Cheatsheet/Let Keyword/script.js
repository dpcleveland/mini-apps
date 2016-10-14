window.onload = function() {

    var x = 10;

    if(x > 5) {
        let x = 5; // let doesn't overwrite the global var
        console.log("inside: " + x);
    }

    console.log("outside: " + x);


    var items = document.getElementsByTagName("li");

    for(var x = 0; x < items.length; x++){
        items[x].onclick = function() {
            console.log(x); // always get 4 every time you click any of the list items
        }
    }

    for(let y = 0; y < items.length; y++){
        items[y].onclick = function() {
            console.log(y); // works properly due to lexical scope 
        }
    }

}

function timer() {
    var colorChanger = document.getElementById("color-changer");
    var colors = ["red", "blue", "green", "yellow"];
    var counter = 0;

    function changeColor() {

        if (counter >= colors.length) {
            counter = 0;
        }

        colorChanger.style.background = colors[counter];

        counter++;
    };

    var colorInterval = setInterval(changeColor, 3000);

    colorChanger.onclick = function() {
        clearInterval(colorInterval);
        colorChanger.innerHTML = "Timer stopped";
    };
};

window.onload = function() {
    timer();
};

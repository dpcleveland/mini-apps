window.onload = function() {

    var ninjaGreeting = function() {
        console.log("hiiiya");
    };

    ninjaGreeting();

    var fancyNinjaGreeting = name => console.log(`${name} says fancy hiiiya`);

    fancyNinjaGreeting("Mark");

    var ninja = {
        name: "Ryu",
        chop(x) {
            var _this = this;
            window.setInterval(function() {
                if (x > 0) {
                    console.log(_this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    ninja.chop(5);


    var fancyNinja = {
        name: "Daniel",
        chop(x) {
            window.setInterval(() => {
                if (x > 0) {
                    console.log(this.name + " chopped the enemy");
                    x--;
                }
            }, 1000);
        }
    };

    fancyNinja.chop(5);
}

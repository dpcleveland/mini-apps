var user = prompt("You encounter Darth Vader. Do you want to FIGHT, RUN, or TURN to the dark side?").toUpperCase();

switch (user) {
    case 'FIGHT':
        var training = prompt("Have you trained? (YES or NO)").toUpperCase();
        var lightsaber = prompt("Do you know how to use a lightsaber? (YES or NO)").toUpperCase();
        if (training === 'YES' || lightsaber === 'YES') {
            console.log("Darth Vader is still too powerful. You lose your arm.");
        }
        else {
        console.log("Darth Vader is much more powerful than you, fool. Obi-Wan has not taught you enough yet.");
        }
        break;

    case 'RUN':
        console.log("You start to run, but your feet begin to leave the floor. Darth Vader has you in a force choke. You die for your cowardice.");
        break;

    case 'TURN':
        var traitor = prompt("Do you love the Rebellion?").toUpperCase();
        var light = prompt("Do you feel called to the light?").toUpperCase();
        if (traitor === 'NO' && light === 'NO') {
            console.log("Together, you and Darh Vader can overthrow the emporer and rule the galaxy! But at what cost...");
        }
        else {
            console.log("You are too weak, and the emporer will crush you.");
        }
        break;

    default:
        console.log("Your inability to make a decision has angered Darth Vader. You will be frozen in carbonite to give you time to think about your decisions.");
}

//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

function  winBattle(bool) {
    return bool;
} 

var experiencePoints = winBattle(true) ? 10 : 1;
 
//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");  -> break

//#3 return value when moveCommand("back"); -> you arrived home

//#4 return value when moveCommand("right"); -> you found a river

//#5 return value when moveCommand("left"); -> break

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function planetOfChoice(planet) {
    var whatHappens;
    switch (planet) {
        case "Venus":
            whatHappens = "you found a hot place";
            break;
        case "Mars":
            whatHappens = "a lot of sand";
            break;
        case "Pluto":
            whatHappens = "ice ice babeeeee.. so dark";
            break;
        case "Earth":
            whatHappens = "Planet of the Apes really was a documentary";
            break;
        default:
            whatHappens = "lost in space :(";
    }
    return whatHappens;
}
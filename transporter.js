"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter your name: ");
let vehicle = prompt("Enter the vehicle type: ");
let distance = prompt("Enter the distance to be travelled: ");
let weight = prompt("Enter the weight of the load: ");


if (vehicle == "van") {
    var charge = distance * 1;
}
else if (vehicle == "sprinter") {
    var charge = distance * 2;
}
else if (vehicle == "box truck") {
    if (weight> 10000) {
        var charge = distance * 2.75;
    }
    else 
        var charge = distance * 2;
}
    
else if (vehicle == "semi truck") {
    if (weight> 20000) {
        var charge = distance * 3.75;
    }
    else 
        var charge = distance * 3;
}

else console.log("You did not enter a valid vehicle type")

console.log("Hello " + name + '.')
console.log("Total charge is: $" + charge);

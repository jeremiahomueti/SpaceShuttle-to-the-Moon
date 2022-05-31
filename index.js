//Use class Syntax to Define a Constructor Function

//ES6 allows us to create objects using the class keyword.



//Here's the older way to create an object

var SpaceShuttle = function(targetPlanet)

{
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);
let person = prompt();
if (person === "Chris" || person === "Javier") {
    let cars = ["Lamborghini", "Ferrari", "Bugatti"];
    let n = Math.floor(Math.random() * cars.length);
    let car = cars[n];
    let carImage = car + ".png";
    document.getElementById("person").innerHTML = "Hello " + person + ", you won a " + car + " !";
    document.getElementById("car").innerHTML += "<img src=\"images/" + carImage + "\">" + "<p>" + car + "</p>";
} else {
    document.getElementById("person").innerHTML = "Hello " + person;
}
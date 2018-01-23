let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("the length of myString is", myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);
//2. Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log("my array length: ", favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: ", favoriteAnimals.indexOf("meerkat"));
//More JavaScript 1
function sum(a, b, c) {
    console.log("your sum function value" , arguments[0], "+", arguments[1], "+", arguments[2], "=");
    return (a + b + c)
};
console.log(sum(12, 434, 656))
function colorCar(d) {
    console.log("chose you car color ");
    console.log("you have chose a ", arguments[0], " color");
    return (d)
};
console.log("you receive a",colorCar("red"),"car")

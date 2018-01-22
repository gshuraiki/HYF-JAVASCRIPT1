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
console.log("The item you are looking for is at index: ",favoriteAnimals.indexOf("meerkat"))

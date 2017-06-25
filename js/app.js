var userAge = prompt("What is your age?")

console.log("You are " + userAge + " years old");

if(userAge < 18){
    console.log("You can't drink");
} else if(userAge > 19 && userAge < 50){
    console.log("You are an adult");
} else if(userAge > 99){
    console.log("You are dead");
} else {
    console.log("🖕🏻 💩");
}
// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => typeof who !== "undefined" ? `Two for me and one for ${who}` : "Two for me and one for you";

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"

// console.log(multiply(7,9));
// console.log(divide(81,9));
// console.log('16 v cube : ' + cube(16));
// //16 v cube razdelite na 4 i umnozhit' na 10
// let result = multiply(divide(cube(16),4),10);
// console.log(result);

// printFraseNtimes("I'm the Boss \n", 11);
// myPrintFraseNtimes("Andrew" , 3);

function multiply(a,b){
    return (a*b);
}

function divide(a,b) {
    return(a/b);
}

function square(a) {
    return(a*a);
}

function cube(a) {
    return (a*a*a);
}

//write a function printFraseNtimes 
//parametrs:frase:string, repeat:number
//returns: frase repeated number of "repeat" times

function printFraseNtimes(phrase,nTimes) {
   console.log(phrase.repeat(nTimes));
}

function forth(x) {
    return (x*x*x*x);
}

function myPrintFraseNtimes(p,n) {
    for (i=1;i<=n;i++){
        console.log(i + ". "  + p);
    }
}

//converts F to C
//parametr: temp in Fahr
//returns temp in C

// function fahrToCelsius(f){
//     return (f - 32) * 5 / 9;
// }



// console.log(fahrToCelsius(100));

// //converts C to F
// //parametr: temp in Celsius
// //returns temp in F
// function celsToFahrenheit(c){
//     return 9 / 5 * c + 32;
// }

// console.log("100 C = " + celsToFahrenheit(100) + " F" );

// function myFirstName() {
//     return 
// }


// myPrintFraseNtimes("Obi", 7);
// myPrintFraseNtimes("Angel", 2);
// myPrintFraseNtimes("Yasa", 3);
// myPrintFraseNtimes("Nata", 5);
// myPrintFraseNtimes("Andrew", 1);
// myPrintFraseNtimes("Obi", 7);
// myPrintFraseNtimes("Zuza", 3);

// let s = "Obi";
// let u = 1 +  ". " + s;
// console.log(u);

// var a = "Alex", b = 5 + a;
// console.log(b);

// let name, age, ssn, dob;

// name = "Nata";
// lastName = "Kovrigin";
// age = 33;
// ssn = "1234567";
// dob = "11/11/2000";

// let letter = "Dear, " + name + " " + lastName + "! I know that you are " + age + " years old.";


//  const name1 = "Koko";
// console.log("My letter: " + letter);

// console.log("2 cube = " + cube(2));


// console.log("2 in forth = " + forth(2) + " !!!, but  26 in cube = " + cube(26));

// var n = "Agata";
// console.log("Her name is " + n + " ?!!");

// // let f = "BlumKo";
// // console.log("Her Lastname is " + f + " and Firstname is " + n + " !!!");

// let f = "BlumKo";
// let o = "Obi"
// console.log("Her Lastname is " + f + " and Firstname is " + n +  o + " !!!");

// let x = 8;
// let y = 8;
// let z = x*y;
// console.log("The value of z is: " + z);

// let message = '123';
// let message = 123;

// console.log(message + 2);

// let amount = Number.parseFloat("123.12A");
// console.log(amount);

// let saved = true;
// saved = !saved;
// console.log( saved);

let msg = `I would like to 
know, how are you?`;
let userMsg = "";
let  wordSearch ="likes";
let wordLocation = msg.indexOf(wordSearch);
if (wordLocation ===-1) {userMsg = "not found"}
else {userMsg = "found at location: " + wordLocation}
console.log(userMsg);

function findWord(){
    let msg = document.getElementById("msg").value;
    let userMsg = "";
    let  wordSearch =document.getElementById("searchWord").value;
    let wordLocation = msg.indexOf(wordSearch);
    if (wordLocation ===-1) {userMsg = "not found"}
    else {userMsg = "found at location: " + wordLocation}
    document.getElementById("result").innerHTML = userMsg;
}

function joinTwoStrings(a,b) {
    return a + " " + b;
}

let m =  joinTwoStrings("Apple", "Watermelon");
console.log(m);

console.log(joinTwoStrings("I would like to find a  job! That's why I work very hard now!\n", "In the future I prefer to earn very good money,approximatly $80,000K in the year.Go,Go!!"));



    





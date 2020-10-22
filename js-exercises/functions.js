// function myFunction(names) {

//     let start = 0;
//     let finish = 0;
//     let pile = "";

//     do {
//         finish = names.indexOf("B",start);
//         pile = names.substring(start,finish) + '\n';
//         start = finish + 1;
//     }while(finish !=-1);
//     return pile;
// }

// let n = "NataBAndrejBGrushaBYasmin";
// console.log(myFunction(n));


// let myFunction = function logginFunction() {
//     console.log('Here is a message');
// }

// myFunction();

 let mySource = "Natasha,Dasha,Masha,Pasha,Natasha,Dasha,Masha,Pasha,Natasha,Dasha";

 let key = 50;

 function getSecretode(value) {
    let keyGenerator = function() {
        let key = 12;
        console.log('in keyGenerator:', key);
        return key;
    }
    let code = value * keyGenerator();
    console.log('in getSecretCode:', key);
    return code;
    
 }

 let secretCode = getSecretode(3);
 console.log(secretCode);

 
//returns current time as a string
function getCurrentTime(){
    // get a new date (locale machine date time)
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    return date.toLocaleTimeString();
}

function privet(w) {
    return "Privet, " +w +"!";
}

function alarm(n,t){
    return privet(n) + "time is " + t;  
}

let name = "Yasmin";
let time = getCurrentTime();


let result = alarm(name, time);

console.log(result);


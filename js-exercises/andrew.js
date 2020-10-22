/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

var names = [];
/* rl.question('please enter new contact ', (answer) => {
    // TODO: Log the answer in a database
    names[0] = answer;
    console.log(names[0]);
    console.log("length of names: " + names.length);
    localStorage.setItem("names", names);

    rl.close();
  }); */


// localStorage.setItem("names", JSON.stringify(names));

/* rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  names[0]=answer;
  console.log("names contents: " + names[0]);

  rl.close();
}); */

/* var names = [];
names[0] = readline();
localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
console.log(storedNames);
 */

/* const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
}); */

let creature1 = {type:"human", name: "andrew", sex: "male", dob: "1/1/2011", speak: function(){
  let msg = "";
  if(this.type =="human"){
    msg = "Hello! My name is " + this.name;
  }else msg = "Mooo";
  return msg;
}};

let creature2 = {type:"cow", name: "Burenka", sex: "female", dob: "1/1/2016", speak: function(){
  let msg = "";
  if(this.type =="human"){
    msg = "Hello! My name is " + this.name;
  }else msg = "Mooo";
  return msg;
}};

let creature3 = {type:"dog", name: "Obi", sex: "male", dob: "1/1/2011", speak: function(){
  let msg = "";
  if(this.type =="human"){
    msg = "Hello! My name is " + this.name;
  }else msg = "Mooo";
  return msg;
}};

let creature4 = {type:"pig", name: "Havronya", sex: "male", dob: "1/1/2019", speak: function(){
  let msg = "";
  if(this.type =="human"){
    msg = "Hello! My name is " + this.name;
  }else msg = "Mooo";
  return msg;
}};

let creatures = [];
creatures.push(creature1, creature2, creature3, creature4);

// console.log(creature.speak());

creatures.forEach((o, i) => {console.log(i, o.name)});

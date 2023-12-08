// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!");
}

sayHello();

function sayHelloToIsabel() {
  console.log("Hello, Isabel");
}

function sayHelloToSofia() {
  console.log("Hello, Sofia");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}`);
}

sayHelloTo("Isabel");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

// Arguments and Parameters

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Julio", "hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

// Returns Values in Javascript

function add(x, y) {
  return x + y;
}

// add(1,2)
console.log(add(1, 2));

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Sofia"));


function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
  console.log("I was called!");
}
console.log(say("Howdy", "partner"));

// My own functions to get the difference between returniing & printing cl

function match(team, scorer) {
  console.log('We won the match');
  return `${team},${scorer}`
}
console.log(
  match(`${"Arsenal"} won the match by a late winner goal by ${"Declan Rice"} `)
);



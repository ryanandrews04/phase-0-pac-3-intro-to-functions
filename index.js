// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log('Hello!');
  }

sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }

sayHelloToIsabel()

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }

sayHelloToSofia()

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }

  sayHelloToIsabel();
  sayHelloToSofia();
  sayHelloToBrendan();

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
  }

function add(x, y) {
    return x + y;
  }

  console.log(add(1,2));

  function say(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
  }
  say()
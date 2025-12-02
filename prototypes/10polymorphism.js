
polymorphism.js
// polymorphism.js

// meaning many forms
//polymorphism allows obj of diff classes to be treated as 
// obj of a common super class thru inheritance
//Its the ability for diff objects to respond to the same method call in diff ways:

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Programmer(name) {   //Parent obj
    this.name = name;
}

Programmer.prototype.work = function() {
    console.log(`${this.name} is working on programming tasks.`);
}
function FrontendEngineer(name) { //child obj
    Programmer.call(this, name)
}
function BackendEnginner(name) { //child obj
    Programmer.call(this, name)
}

extend( BackendEnginner, Programmer);
extend( FrontendEngineer, Programmer);

//**Goal: have both types od programmers have
//  different versions of work method:  **
FrontendEngineer.prototype.work =function() {
    console.log(`${this.name} is designing the frontend`)
}
BackendEnginner.prototype.work =function() {
    console.log(`${this.name} is designing the serverside logic`)
}


const Donald = new FrontendEngineer('Donald'); // Donald is designing the frontend
const Jake = new BackendEnginner('Jake');//Jake is designing the serverside logic

// Donald.work();
// Jake.work();

//using polymorphism, create an arr of obj that could be
//  frontend/backend programmers:
const programmers = [
    Donald, 
    Jake
];

for( let programmer of programmers) 
    programmer.work() ;


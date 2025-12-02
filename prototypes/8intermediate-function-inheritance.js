 
 //  INTERMEDIATE FUNCTION INHERITANCE

//Goal: set up an extend func that automates the process of 
// prototypical inheritnce btwn a child and parent constructor function to inherit methods.

function Engineer (name) {
    this.name = name;
}
Engineer.prototype.code  = function() {
    console.log(`${this.name} started coding.`)
};

function FrontendEnginner(name) {
    Engineer.call(this, name);
}

function BackendEnginner(name) {
    Engineer.call(this, name);
}

function extend (Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(FrontendEnginner, Engineer); 
extend(BackendEnginner, Engineer); 

const Melania = new FrontendEnginner('Melania'); 
const Brian = new BackendEnginner('Brian'); 

Melania.code(); //Melania started coding.
Brian.code(); //Brian started coding.


//NB,Benefits of using a generalized extend func to setup prototypical inheritance include:
//1. Encapsulation: by encapsulating the inheritance logic in the extend func,
// we avoid redundancy and make the code more  maintainable.
//2.Reusability: The extend func can be reused across the project whwerever inheritance is needed 
// promoting consistency  n reducing chances of errors

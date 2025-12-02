Calling-the-supper-Constructor.js

//Calling the supper Constructor
// constructor func is the func that is called or invoked to
//  instantiate an obj with a given state. they help setup new obj:
function Programmer(name, specialization) {
    this.name = name,
    this.specialization = specialization
}

function FrontendProgrammer (name, specialization,preferredFramework ) {
    Programmer.call(this, name, specialization); //this referencing this FrontendProg obj
    this.preferredFramework = preferredFramework;
}

const Stephanie = new FrontendProgrammer("Stephanie", "Frontend", "React.js")
console.log(Stephanie.preferredFramework);//React.js
console.log(Stephanie.specialization);//Frontend

// NB the "new" keyword creates a new obj in memory. 
// second, JS sets the prototype of the new obj to the prototype of the 
//  constructor func from which it was called. ie for Programmer.prototype === new Programmer()
//Thirdly, Executing the constructor so that "this" keyword is
//  bound to the newly created obj, allowing properties n 
//  methods to be assigned to "this"

// NB: when the constructor func is being called with the "new"
//  keyword to create a new obj, the "This" keyword refers to the new obj being created.
//second, when the constructor func is called WITHOUT the "new" keyword, 
// it will refer to the global obj ie "window obj" or global obj in nodeJS, or undefined leading to errors

//NB: IN conclusion always use the "new" operator to create a new obj
// to avoid errors


         7.//Creating your own Prototypical Inheritance
//Imagine we have multiple types of programmer objects(frontend ,backend programmer)
//we need to create a function that will have shared concepts for both types:

function Programmer(name  )   {
    this.name = name;
//     this.code = function() {
//         console.log(`${this.name} starts coding.`);
//     };
//     this.debug = function() {
//         console.log(`${this.name} is debugging.`);
//     };
//     this.meeting = function() {
//          console.log(`${this.name} is attending meetings. `);
//     }
// }
// const Mevida = new Programmer('Mevida');
// const Steen = new Programmer('Steen');

// Mevida.code();
// Steen.code();
//when you define methods directly inside the constructor func,
//  each instance will have its own copy of those methods which isnt efficient:

// console.log(Mevida.code === Steen.code);// false bcs each have thier own copies of the methods which is redundant.
//instead define the methods in the prototypes this way:
Programmer.prototype.code = function () {
     console.log(`${this.name} starts coding.`);
}
Programmer.prototype.debug = function () {
     console.log(`${this.name} is debugging.`);
}
Programmer.prototype.meeting = function () {
     console.log(`${this.name} is attending meetings. `);

}
}
const Mevida = new Programmer('Mevida');
const Steen = new Programmer('Steen');

Mevida.code();
Steen.code();
console.log(Mevida.code === Steen.code);// true
// as they are sharing memory location, each instance  dont create their own method copies thus
//  helping in DRY(DONT REPEAT YOURSELF)

function FrontendProgrammer(name) {
    Programmer.call(this, name);
}
function BackendProgrammer(name) {
        Programmer.call(this, name);
}

//NB: use this to reference this current obj, ie the instance ofthe Programmer
//use name as its the expected  parameter of the constructor obj
//you call the constrctor func and set the context to the new instance ie frontend/backend programmer

FrontendProgrammer.prototype = Object.create(Programmer.prototype);
BackendProgrammer.prototype = Object.create(Programmer.prototype);
//both will inherit the methods of Programmer func(parent) and this sets the as instances that inherit methods.

FrontendProgrammer.prototype.constructor = FrontendProgrammer;
BackendProgrammer.prototype.constructor = BackendProgrammer;
//The constructor property is then reset to pint back to the correct constructor funcs
// (FrontendProgrammer and BackendProgrammer), ensuring both instances were correctly identified

const Joe = new FrontendProgrammer('Joe');
Joe.code();//Joe starts coding.
Joe.debug();//Joe is debugging.
Joe.meeting(); //Joe is attending meetings. 

const Seline = new BackendProgrammer("Seline");
Seline.code(); //Seline starts coding.
Seline.debug(); //Seline is debugging.
Seline.meeting();//Seline is attending meetings. 


console.log(FrontendProgrammer.prototype.constructor === Programmer );//false bcs
//FrontendProgrammer is not referencing Programmenr

//NB: In JS whenever you change the  prototype of a func,
//  always reset the constructor poperty using obj.create and .prtototype.constructor
//This ensures the constructor poperty reflects the correct
//  constructor func for instances.
//  this helps avoid issues ie po9nting to the parent obj instead of the child obj
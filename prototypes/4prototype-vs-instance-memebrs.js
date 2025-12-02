//PROTOTYPE-VS-INSTANCE MEMBERS.js

    // 1. Optimizing memory usage with Prototypes in JS::
// jS efficiently  manage memory by using prototypical inheritance. 
//when a method is called an obj, Js first checks whether the obj exists on the obj itself.
//If the method isnt found, JS then looks up the prototype chain of the obj.

    //2.Utilizing the prototype property::
//since, Each constructor func has a prototype property, 
// shared by all instances of the constructor, JS uses this to manage memory
function Engineer(name, prefLang) {
    this.name = name;
    this.prefLang = prefLang;

}
Engineer.prototype.writesCode = function () {
    console.log( `${this.name} writes code in ${this.prefLang}` );
};

Engineer.prototype.toString = function() {
    return `Engineer: ${this.name}, Language: ${this.prefLang}`;
};

const jsEnginner = new Engineer('David Malan', "PHP");
jsEnginner.writesCode();//index.js:76 David Malan writes code in PHP

//The advantages of using prototypes: 
// A.(Memory efficiency)-SInce methods defined on the prototype are shared, 
//  there is ONLY ONE COPY of each method in memory, regardless of the no.of instances created.
// B.(Flexibility)- Since JS is dynamic, it allows you to add or modify methods on the prototype.
//  Also modifications on the prototype are reflected on all instances immeadiately
//C.(Overriding Methods)- You can easily overide inherited methods by defining new implementations on the prtottype 


            //3.Managing Instance and protype Members::
//Instance Members are dfined within the constructor functions and are unique to each instance:
// eg((name and prefLang)), these properties are set per individual obj,
//  and manage data that varies from one instance("Alice") to another("David")       

//Prototype Members are defined on the constructor's prtototype, and are sared across all instances:
//eg (writesCode, toString) are applied to all instances.
//By using prorotypes to share methods among instances improves per4mance and maintainability, ensuringefficient memory usage.

//NB: Prototypical inheritance(defining methods on the constructor's prototype) 
// is better than defing them on the constructor function itself bcs of the
//  reasons given above(memory efficiency, flexibility and overriding methods).


// 3multilevelInheritance.js
let myArr = [];  
// myArr(Array) inherits from  Array.prototype(ArrayBase)
//  which also inherits frm object.prototype(ParentOBJ/ObjBase)


//since functions are objects in JS, all objects follow a 
// hierachy and inherit from another obj except the objectBase


//console.log('Hello World');
let person = {
    name: "Bruce",
}; 
// console.log(person); //{name:'Bruce'}

// for(let key in person)
//     console.log(key);//name

// console.log( Object.keys(person) ); //[name]

                    //PROPRTY DESCRIPTORS: 
// let objBase = Object.getPrototypeOf(person); //get the properties of the parent obj(person)
// const propertyDescrepitor = Object.getOwnPropertyDescriptor(objBase, 'toString');
// console.log(propertyDescrepitor);//shows the properties:
    //writable:true so the property's value can be changed
    //enumerable:false which prevent the tostring() method to appear in the for in loop/ object.keys  .
    //configurable: true so the  property descriptor can be changed or deleted
    // value: f tostring()

//to modify the properties of this obj:
// Object.defineProperty(person, 'name', {
//     writable:false, 
//     enumerable:false, //so the property will not appear during for in loops and obj.keys
//     configurable: false
// });
// for( let key in person) 
//     console.log(key)  // 
// //no keys logged bcs all property descriptors were changed.

//NB:In JS,  property descriptors/attributes determine whether 
//  a property can be accessed, modified or iterated over;

//Those attributes are writtable,enumerable and  configurable




            // CONSTRUCTOR PROTOTYPES:
// use Object.getPrototypeOf(obj) to return the parent of the obj
//CONSTRUCOR FUNCTIONS have thier own prototype bcs func are obj 
// and all obj have prototypes except the root obj.
//so their protypes are used to assign properties and methods
//  to instances created by the constructor function

function circle() {
    //constructor code

}
// console.log(circle.prototype);//constructor: f circle()  [[prototype]]: object

            // CREATING OBJECTS AND THEIR PROTOTYPE LINKS:
//when you create a new obj, its prototype/parent  is set to
//  the prototype of its constructor func:
let obj = {};   //or let obj = new object();
// console.log(obj.__proto__);   //or console.log(object.prototype);


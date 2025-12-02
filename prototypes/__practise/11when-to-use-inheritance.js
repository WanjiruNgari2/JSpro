 when-to-use-inheritance.js
// avoid Inheritance comlexity where derived classes inherit
//  methods not directly passed from parent class:
            // function Employees(name) {
            //     this.name = name;
            // }
            // function Programmer(name) {
            //     Employees.call(this, name);
            // }
            // function Manager(name) {
            //     Employees.call(this, name);
            // }
// all follow an "is-a" where manager is a child of Employee and
//  Programmer is a child of employees.
//Keep it one level too, thus limiting the inheritance depth


        //use COMPOSITION instead Inheritance: 
// composition is where you build classes out of components, 
// instead of strict parent child rlship
// Composition represents a "has-a" rlship where objs have 
// instances of other obj and their functionality
//This allows obj to have the behaviour it needs without relying on hierachical structures.


            //using compositions with   Mixins:
// this is where functionality can be mixed into a class.
// This means that obj can have and use functionality from other obj

//A mixin is a reusable piece of code that adds
//  specific functionality to obj/classes
//Mixins help share methods and behaviours across many obj by coping properties into them
//For eg:  
function Employees(name) {
    this.name = name;
}
const canCode = {
    code() {
        console.log(`${this.name} is coding`)
    }
};

const canReview = {
    review() {
        console.log(`${this.name} is reviewing code`)
    }
}

function Programmer(name) {
    Employees.call(this, name);
//compositing the obj with necessary functionalities
    Object.assign(this, canCode, canReview);
}

function Manager(name) {
    Employees.call(this, name);
    Object.assign(this, canReview);
}

const Donald = new Programmer('Donald');
Donald.review();



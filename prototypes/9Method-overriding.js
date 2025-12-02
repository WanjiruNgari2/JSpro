Method-overriding.js

//Method-overriding

// Consider this example: 
    function Engineer (name) {
        this.name = name;
    }
    Engineer.prototype.code  = function() {
        console.log(`${this.name} started coding.`)
    };

    function FrontendEnginner(name) {
        Engineer.call(this, name);

    }

    function extend (Child, Parent) {
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
    }

    extend(FrontendEnginner, Engineer); 

//now lets redifine the code() method in FrontendEngineer to include
// additional behaviour specific to  frontend engineering:
    FrontendEnginner.prototype.code = function() {
        Engineer.prototype.code.call(this); //NB **
        console.log(`${this.name} is coding in HTML/CSS/JSCRIPT.`)
        //Melania is coding in HTML/CSS/JSCRIPT.
    }

    const Melania = new FrontendEnginner('Melania'); 

    Melania.code(); //Melania started coding.


// NB How To overide a nethid in a derived/child function, 
// so as to include additional methods while still calling 
// the base class method, do this:

//1. First define the new method on the derived func: eg FrontendEnginner.prototype.code = function() {
//2. In this method, call the base method eg Engineer.prototype.code.call(this); 
// then pass in the "this" keyword in the call method.
//  using call when invoking the base class method ensures 
//      the base method runs the current obj, bcs you pass in "this"

//3. Add the new behavior that is specific to derived func: 
//  eg  console.log(`${this.name} is coding in HTML/CSS/JSCRIPT.`)
 





//getters and setters are special methods that help you get and set propeties of an obj
// this encapsulation technique helps control how values ae accessed and modified in an obj
//helps ensure data encapsulation and validation rules are followed

function Designer(name, prefLang) {
    //private property
    let privateName = name; //using let instead of "this" makes the var private

    Object.defineProperties(this, {   //"this" refers to the whole designer func
        'name': {
            get: function() { //get method gets the current property 
                return privateName;
            },
            set: function(newName) { //set metod will change the value of current property
                if(!newName) { //checkes its not falsy(empty)
                    console.log('Name cannot be empty')
                }
                privateName = newName;
            }
        }
    })
    //public property
    this.prefLang = prefLang;
}

const newGuy = new Designer("Martin", "Express.js");
console.log(newGuy.name); //Martin
newGuy.name = "";
console.log(newGuy.name); //Name cannot be empty
newGuy.name = "Stella";//
console.log(newGuy.name); //Stella

//the validation rule works by checking newName isnt empty
//get method or getters  returns the current value of a private property 
///set method or setters  will change the value of current property, by checking validations first(controlled ways)

// getters === accessers and setters === mutators help encapsulate internal states, support validation and logging
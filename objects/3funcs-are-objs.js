                //CONSTRUCTOR FUNCTIONS:
//Used before JS ES6 before they brought Classes. The function has PascalCase,
//Used the "NEW" keyword for obj creation and inheritance.
    function Programmer (name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
        this.writeCode = function () {
            console.log(`${this.name} writes ${this.preferredLanguage} code. `)
        };
        this.drinksCoffee = function () {
            console.log(`${this.name} drinks coffee `);
        };
    }

    const newProgrammer = new Programmer("Shirleen" , "Python");
    newProgrammer.writeCode()   //Shirleen writes Python code. 
    const hellaCoder = new Programmer("Geniouses", "PHP");
    hellaCoder.drinksCoffee()  //Geniouses drinks coffee 


    //EXERCISE 4: Create a constructor func for the grocerry Items
    function GroceryItems(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.display = function () {
            console.log(`${this.quantity} * ${this.name} `)
        };
    }

    let shoppingItem = new GroceryItems("Pineapples", 400);
    let additionalItem = new GroceryItems("Veggis", 343)
    shoppingItem.display()  //400 * Pineapples 
    additionalItem.display() //343 * Veggis 

//Constructor property:
// Shows the type of obj, instances of parent functoins etc 
//console.log(shoppingItem.constructor);//[Function: GroceryItems]

    function add(numA, numB) {
        return numA + numB ;
    }
    const total = add;
    console.log(total(11, 33)) //44
    console.log(add.length) //2 bcs it has 2 params and functions are objects
//we assigned a var total to a function and used it to find sum


//EXERCISE 56:Create a func calculatePrice with params(grocery item, price),
// assign this func to a variable perfomCalculations, then invoke the 
// func performCalculations. refer to GroceryItems func.

    function calculatePrice (groceryItem, price) {
        return price * groceryItem.quantity;
    }
    const perfomCalculations = calculatePrice;
    console.log(perfomCalculations(shoppingItem, 10) ); //4000
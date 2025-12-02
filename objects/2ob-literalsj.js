// OBJECT LITERALS {} :
// an obj literal is a data structure in JS that allows you to define key value pairs.
//in JS, an obj can be difined using curly braces{}. this means an obj literal

let programmer = {
        name: "Karen",
        preferredLanguage: "JavaScript",
        writeCode: function() {
            console.log(`${this.name} writes ${this.preferredLanguage} code. `);
        },
        drinksCoffee() {
            console.log(`${this.name} drinks coffee `);
        }

    };

    // programmer.writeCode();//Karen writes JavaScript code. 
//This obj called programmer has two methods(drinksCoffee, writecode)
//  and two properties(name, prefferedLanguage)

//EXERCISE ONE: Create an obj "groceryListItem" that has properties(name, quantity)
//  and method display() . It should output example (4 * Apples)

    let groceryListItem = {
        name: "Apples",
        quantity: 4,
        display: function () {
            console.log(`${this.quantity} * ${this.name} `)
        }
    }
    groceryListItem.display();//4 * Apples 

            // FACTORY FUNCTION
// A factory func is a func that returns a new obj each time it is called
//      ensuring each obj has unique properties but shares the same methods.
//  The name of the obj must be in camelCase and accept params that customize the value of new objects created.

// EXERCISE TWO: With the frist obj progarmmer you created, add an obj that will create a new programmer:

    function createProgrammer (name, preferredLanguage) {
        return {
            name, 
            preferredLanguage, 
            writeCode() {
                console.log(`${this.name} writes ${this.preferredLanguage} code. `)
            },
            drinksCoffee() {
                console.log(`${this.name} drinks coffee `);
            }

        }
        
    }

    const newProgrammer = createProgrammer("Alice", "Angular");
    newProgrammer.writeCode()//Alice writes Angular code. 


//EXERCISE 3: Create a factory func which returns a new grocery item.
//The params are name and quantity:

    function createGroceryItem (name, quantity) {
        return {
            name, quantity,
            dispaly() {
                console.log(`${this.quantity} * ${this.name} `)
            }
        }
    }

    const newItem = createGroceryItem("Bananas", 30);
    newItem.dispaly()// 30 * Bananas
    let bestItems = createGroceryItem("Mangoes", 11);
    bestItems.dispaly()// 11 * Mangoes 




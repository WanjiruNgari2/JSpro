// JS supprorst 8 data types ie 7 primitive and 1 complex type.
//Primitive datatypes include: number, string, boolean, undefined, null, symbol, bigInt
//complex datatype is obj that comprises of arrays(lists),key vals and functions

// primitive Types are paased by copy:
//  assigning a var to another 
// conatining primitive value, the new var gets a copy of that value.
//So aleting one wunt affect the other bcs each var is in separate memory location:
let x = 2000;
let y = x;

x = 1234;
console.log(x) //1234
console.log(y) //2000 never changed 


//complex Types are passed by reference:
// Both objects point to the same memory location so changing the value 
//of one must affect the other:

x = { value: 20 };
y = x;

x.value = 10000
console.log(y) //{ value: 10000 } changed
console.log(x) //{ value: 10000 } changed

// exercise 6: create an obj var then add properties to it
//  using dot notation or suare brackets

    const person = {
        name: "Khalil"
    };
    console.log(person)//{ name: 'Khalil' }
    person.bestMovie = "Escape from Sobibor";
    console.log(person)//{ name: 'Khalil', bestMovie: 'Escape from Sobibor' }
    person["DOB"] =  "12/12/1999";
    console.log(person)//{ name: 'Khalil', bestMovie: 'Escape from Sobibor', DOB: '12/12/1999' }

    delete person.bestMovie;
    console.log(person)//{ name: 'Khalil', DOB: '12/12/1999' }

    person.loves = function() {
        console.log(`${person.name} loves ${person.bestMovie}`);
    }
    person.loves();//Khalil loves Escape from Sobibor



//Objects are dynamic bcs you can easily change their 
// properties and methods after initialization.

//Exercise 7: Create an obj with the groceryItem concstructor func.
//Then dynamically add the property of groceryAisle:
    function GroceryItems(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.display = function () {
            console.log(`${this.quantity} * ${this.name} `)
        };
    }

    let shoppingItem = new GroceryItems("Pineapples", 400);
    shoppingItem.display()  //400 * Pineapples 

    let objItem = new GroceryItems("Objects" , 444);
    objItem.groceryAisle = "Produce";
    console.log(objItem) //GroceryItems {name: 'Objects',quantity: 444,groceryAisle: 'Produce', display: [Function (anonymous)],}


// ITERATING ARRAYS USING FOR LOOPS:
    let nangers = [1, 2,3, 8,9];
    for(const n of nangers) {
        console.log(n) //1, 2,3, 8,9 ;
    }

// ITERATING objects USING FOR IN LOOPS:
// Used to iterte the keys in key val pairs. 
// used when you know the structure of the obj
    const dog = {
        name: 'Max', 
        age: 4,
        eyeColor: "blue"
    };

    for (const key in dog) {
        console.log(dog[key])//Max 4 blue
    }

    // FOR OF LOOPS:
    const keys = Object.keys(dog);
    for( const key of keys) 
        console.log(key); //name age eyeColor

    const values = Object.values(dog);
    for( const value of values) 
        console.log(value); //Max 4 blue

    
    
    // Object iteration
    const entries = Object.entries(dog);
    for( const entry of entries) 
        console.log(`Key: ${entry[0]} => Value: ${entry[1]} `);
    // Key: name => Value: Max   Key: age => Value: 4   Key: eyeColor => Value: blue



//EXERCISE 8: iterate thru the key values of this function:
    function GroceryItems(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.display = function () {
            console.log(`${this.quantity} * ${this.name} `)
        };
    }
    let shoppingItem = new GroceryItems("Pineapples", 400);

    for( const key of Object.keys(shoppingItem)) 
        //console.log(key) //name  quantity  display

    for( const value of Object.values(shoppingItem)) 
        // console.log(value) //Pineapples  400  [Function (anonymous)] 

    for( const entry of Object.entries(shoppingItem)) 
        console.log(entry) 
    //[ 'name', 'Pineapples' ]   [ 'quantity', 400 ]   [ 'display', [Function (anonymous)] ]

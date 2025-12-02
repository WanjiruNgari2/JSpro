//abstraction is essentially hiding the coplexdetails of a function 
// and only showing the important parts of a class or func to the user.

function Programmer(name, prefLang) {
    this.name = name;
    this.prefLang = prefLang;

    //public method/func
    this.typesCode = function () {
        console.log(`${this.name} writes ${this.prefLang} code`)
    }

    //private method/func
    const faveDrink = function () {
        console.log(`${this.name} drinks coffee. `)
    }.bind(this) //"this" here refers to this current concept
    // used so it can access the properties outside its scope/ be accessed by other methods
    // when its called by func startDay()

    //public method
    this.startDay = function () {
        faveDrink();
    }
}

const employee = new Programmer("Sally", "PHP");
employee.typesCode();//Sally writes PHP code

//employee.faveDrink();//TypeError: employee.faveDrink is not a function 
// bcs its a private function

employee.startDay();//undefined drinks coffee bcs it cant access 
// an obj of another func so add (.bind(this)) in func faveDrink() to
//  access other prpoerties and methods outside its scope


//method startDay() only shows the important details ie calls faveDrink()
//method faveDrink doesnt need to be shown to the user.

//EXERCISE: create a groceryList Item func, with params(price,quantity)
//it should maintain an arr to store the items, provide methods to add, display items 

//add a public method that(addItem(name, quantity), displayItems() and getTotalQuantity() )
//and private method for (calculateTotalQuanity() )

    function GroceryItems(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.display = function () {
            console.log(`${this.quantity} x ${this.name} `);
        };
    }

    
    function groceryList() {
        const items = []; //private arr to store hold the grocery items

        //private methods
        const calculateTotalQuanity = function() {
            return items.reduce( (total, item) => total + item.quantity, 0 ); //0 is the initial starting value
        }

        //public methods
        this.addItem = function(name, quantity) {
            const item = new GroceryItems(name, quantity);
            items.push(item);
        }

        this.displayItems = function () {
            items.forEach(item => item.display() );
        }

        this.getTotalQuantity = function () {
            return calculateTotalQuanity(); //only call dont show detils
        }

    }

    const myList = new groceryList();
    myList.addItem("Cabbages", 44);
    myList.addItem("Mangoes", 387);
    myList.displayItems();//44 x Cabbages and 387 x Mangoes
    console.log(`Total quantity: ${myList.getTotalQuantity()}`)
    //Total quantity: 431 and user doesnt see hw it was calculated



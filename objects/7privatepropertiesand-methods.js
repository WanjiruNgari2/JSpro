//privatepropertiesand-methods are powerful ways to use encapsulation in OOP
//Uses a closure which means an inner func has access to vars declared outside its scope
//closures help create private properties and private methods:

function example() {
    const num = 4;

    return function logNum() {
        console.log(num);
    }
} 
const innerFunc = example()//4
innerFunc();//4



function makeFunctions() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }

    return {
        logNum: () => console.log(privateNum),
        Increment: () => {
            privateIncrement();
            console.log('Incremented');
        }
    }
}

const { logNum, Increment } = makeFunctions(); //destructurin(g syntax
logNum();//0
Increment();//Incremented
logNum();//1




function Designer(name, prefLang) {
    //private property
    let privateName = name; //using let instead of "this" makes the var private

    //public property
    this.prefLang = prefLang;

    //public method
    this.typesCode = function() {
        console.log(`${privateName} Codes in ${this.prefLang}`);
    }

    //private method
    let faveDrink = function() {
        console.log("GULP....");
    }

    //public method that uses a closure
    this.startDay = function() {
        faveDrink();
    }
}

const newGuy = new Designer("Martin", "Express.js");
newGuy.typesCode();//Martin Codes in Express.js
newGuy.startDay();//GULP....
//newGuy.faveDrink()//TypeError: newGuy.faveDrink is not a function
//newGuy.privateName();//TypeError: newGuy.privateName is not a function


//scope is the context inwhich a var are visible or can be referenced
//if a var is not in the current scope, it cant be used

//for closure, these are inner func that access external vars 
// ie those defined outside its scope 

// EXERCISE: BANK ACC to have private var balance to store accc balance,
//private method to validate the amount being depoisted or withdrawn,
//public methods for deposit(amount), withdraw(amount) and getBalance().

function BankAccount(initialBalance) {
    let balance = initialBalance; //used let so its a private var that stores bal

    //private method to validate the amount
    const isValidAmount = function(amount) {
        return typeof amount === "number" && amount > 0;
    }

    //public method to deposit money
    this.deposit = function (amount) {
        if (isValidAmount(amount)) {
            balance += amount;
            console.log(`Deposited: $${amount}`); //double $$to show actual dollarsign in amount and still interpolate
        } else {
            console.log("Invalid deposit amount");
        }
    }

    //public method to withdraw money
    this.withdraw = function(amount) {
        if( isValidAmount(amount)) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`)
            } else {
                console.log("insufficient funds");
            }
        } else {
            console.log("Invalid withdraw amount");
        }
    }

    //public method to get current balance:
    this.getBalance = function() {
        return balance;
    }
}

const newBalance = new BankAccount(8000);
newBalance.deposit(1200); //Deposited: $1200
newBalance.withdraw(1000); //Withdrew: $1000
console.log( newBalance.getBalance() ); //8200
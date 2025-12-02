//prototypicalInheritance.js
let user = {
    name: 'Stella',
    surname: 'Mbadala',
    email: 'stella@globalThis.com',
    isActive: true,

    //user.fullName = "Bruce Wayne";
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },
    
    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    login() {
        console.log(`${this.fullName} logged in.`)
    },

    login() {
        console.log(`${this.fullName} logged out.`)
    }

};

let admin ={
    __proto__: user,    //means the parent of the admin obj is the user obj
    isAdmin: true,
    manageUsers() {
        console.log(`${this.fullName} is managing users.`)
    }
};

let guest = {
    isGuest: true,
    browseContent() {
        console.log(`${this.fullName} is browsing content.`)
    }
};
guest.__proto__ = user;   //also works to show guest is child of User


let superAdmin = {
    __proto__: admin,
    isSuperAdmin: true,
    manageAdmins() {
        console.log(`${this.fullName} is managing admins.`)
    }

};

//superAdmin is inheriting from user, and admin.
admin.fullName = "Bruce Wayne";
// console.log( admin.fullName );//Bruce Wayne
// console.log( user.fullName )//Stella Mbadala did not change the BASE/SUPER obj


//            for in:
// for (let key in admin)
    // console.log(key)//logs all properties of admin and user:
//isAdmin, manageUsers, name, surname,email, isActive,fullName,login,logout

// console.log( Object.keys(admin) )//shows only the properties of admin ie:
//isAdmin, manageUsers,name and surname ONLY




const programmerPrototype = {  //created the parent obj
    writeCode: function() {
        console.log(`${this.name} loves Writing code in ${this.preferredLanguage}`)
    },
    drinkCofee: function() {
        console.log(`${this.name} loves drinking cofee.`)
    }
};

function Programmer(name, preferredLanguage) { 
    let privateName = name;
    this.preferredLanguage = preferredLanguage;

    Object.defineProperties(this, {
        'name': {
            get: function() {
                return privateName;
            },
            set: function(newName) {
                privateName = newName
            }
        }
    });

    //inherit common behavior from prototype
    Object.setPrototypeOf(this, programmerPrototype);
}
    // NB: "setPrototypeOf" replaced '__proto__' 


const jsProgrammer = new Programmer("Alice", "PHP");
jsProgrammer.writeCode();//Alice loves Writing code in PHP
jsProgrammer.drinkCofee();//Alice loves drinking cofee.
console.log(jsProgrammer.name);//Alice

jsProgrammer.name = "Britney"
console.log(jsProgrammer.name);//Britney
jsProgrammer.drinkCofee();//Britney loves drinking cofee.


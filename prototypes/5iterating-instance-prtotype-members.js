     //4.Iteratig Instance Members and Prortotype Members::
     
//In js, changes to a contructor's prototype reflects on all instances 
// regardless on whether they were creted b4 or after the changes.
function Designer(dname, dprefLang) {
    this.dname = dname;
    this.dprefLang = dprefLang
}

const programmenr = new Designer('Steven', 'JavaScript');

Designer.prototype.lovesCode = function () {
    console.log(`${this.dname} loves to code in ${this.dprefLang}`);
};
programmenr.lovesCode();//Steven loves to code in JavaScript
// //still works though I added the method after creating the constructor and its instance.
//bcs instances check inside the prototype for methods.

// for (let key in programmenr)
//     console.log(key);//dname, dprefland, lovesCode

// console.log(programmenr.hasOwnProperty('dname')); //true, meaning its an own prototype and isnt inherited from the prototype
// console.log(programmenr.hasOwnProperty('lovesCode')); //false bcs it was created to the prototype not the actual obj
// console.log(Designer.hasOwnProperty('lovesCode')); //false so this property is inherited from the prototype

//NB Own properties are those defined directly on the obj, 
// while prototype properties are inherited from the obj prototype  


            //5.Avoid extending/modifying built-in prototypes in objects 
// this is to avoid risks conflicting with thirdparty libraries that might relyon default behaviors of these objs.
    // Array.prototype.shuffle = function () {
    //     //implementation of the shuffle method
    //     console.log('shuffle'); //shuffle
    // }
    // const array = [];
    // array.shuffle() ;

//NB: Dont modify objects you dont own.dont interfere and
//  consider using a utility function, best option example:

//     function shuffleArray(){
//         //shuffle logic goes here
//         return array
//     }
//     const array = [];
//     const shuffledArray = shuffleArray(array);

//     if (typeof Array.prototype.shuffle !== 'function') {  //checks the method already exists
//          Array.prototype.shuffle = function () {
//         //implementation of the shuffle method
//             console.log('shuffle');
//         }
// }

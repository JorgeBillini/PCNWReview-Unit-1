/*
    Unit 1 Final Review

    Do I understand:
      -> Function Scope
      -> Conditionals
      -> Loops
      -> Iterating through Arrays
      -> Manipulating Arrays
      -> Adding Strings
      -> Callbacks
      -> Array Methods
      -> Object Literals and Keys
      -> Classes
*/

/*  1
    @func catchPhrase
    @param name {string}
    @param greet {string}
    @returns {string}
    @desc - Given 2 string parameters, return a combined string
    @example - 
        console.log(catchPhrase('Mo', '^_^')); // 'Mo said, "^_^"'
        console.log(catchPhrase('Taq', 'Eat, sleep, code')); // 'Mo said, "Eat Sleep Code"'

*/
const catchPhrase = (name, greet) => {
        return `${name} said ${greet}`;
}
console.log(catchPhrase('jorge','lol'));

/*  2
    @func isOdd
    @param num {number}
    @returns {boolean}
    @desc - Given a number return true if it's odd
            return false if it's even
    @example - 
        isOdd(5); // true
        isOdd(2); // false

*/
const isOdd = (num) => {
        if (num % 2 !== 0) {
                return true;
        }
        return false;
}
        console.log(isOdd(5)); // true
         console.log(isOdd(2)); // false
/*  3 
    @func fizzBuzz
    @param end {number}
    @desc - Count from 1 to the end. Implement basic fizzBuzz
            Console.log each iteration. This function does not return anything
*/
const fizzBuzz = (end) => {
        for (let i = 1 ; i <= end ; i++) {
                if (i % 5 === 0 && i %3 ===0) {
                        console.log('fizzbuzz');
                        continue;
                }
                else if (i % 3 === 0){
                        console.log('fizz');
                        continue;
                }
               else  if (i % 5 === 0) {
                        console.log('buzz');
                        continue;
                }
                console.log(i);
                
        }
        
}

console.log(fizzBuzz(15));


/*  4
    @func myForEach
    @param arr {arr}
    @param cb {function}
    
    @desc - Implement the Javascript forEach method.

    @example - 
            myForEach([1, 2, 3], (e, i, original) => {
              console.log(e);
            });
*/

const myForEach = (arr, cb) => {
        for (let i = 0; i < arr.length ; i++) {
                cb(arr[i],i,arr);
        }
}


myForEach([1,2,3], (element,i,arr) => {
        console.log(element);
});



/*  5
    @func myMap
    @param arr {array}
    @param cb {function}
    @returns {array}
    @desc - Implement the Javascript map array method.

    @example - 
            myMap([1, 2, 3], (e, i, original) => {
              return e * 2;
            });
*/
const myMap = (arr,cb) => { 
        for (let i = 0; i < arr.length ; i++){
                arr[i] = cb(arr[i],i,arr);
        }
        return arr;
        }
        console.log(myMap([1,2,3], (element) => {
                return element ** 2;
        }));

/*  6
    @func createObject
    @param keyName {string}
    @param keyValue {anything}

    @desc - Return an object with the passed in keyName and keyValue.

    @example - 
            createObject('name', 'John'); // { name: 'John' }
            createObject('age', 15); // { age: 15 }
            createObject('a', 'c'); // { a: 'c' }

*/
const createObject = (keyName, keyValue) => {
        let newObj = {};
        newObj[keyName] = keyValue;
        return newObj;
}
console.log(createObject('jorge',100));


/*  7
    Define a @class called Pet
    With @properties: name, animal, greet
    With @methods: 
        greets() // Returns the pet's special greet. Eg. "Rexy the dog said Woof!"
*/
class Pet {
        constructor(name,animal,greet) {
        this.name = name;
        this.animal = animal;
        this.greet = greet;
        }
        greets(){
                return `${this.name} the ${this.animal} said ${this.greet}`;
        }
}


/*  8
    Define a @class called Person
    With @properties: name, age, pets
    With @methods: 
        profile() // Returns a greeting. Eg. "John is 30 years old."
        addPet(name, animal, greet) // Adds a new pet for the person
        petsOfKind(animal) // Returns list of pets that match the animal passed in

        const mo = new Person('Mo', 25);
        mo.addPet('Corgi', 'Dog', 'Trof');
        mo.addPet('Husky', 'Dog', 'Woof');
        mo.addpet('Tiger', 'Cat', 'Rawr');

        mo.petsOfKind('Dog'); // [ Pet {name: 'Corgi', animal: 'Dog', greet: 'Trof'},  
                                    Pet {name: 'Husky', animal: 'Dog', greet: 'Woof'} ]

        mo.petsOfKind('Cat'); // [ Pet {name: 'Tiger', animal: 'Cat', greet: 'Rawr'} ]
*/
class Person {
        constructor(name,age,pets = []) {
                this.name = name;
                this.age = age;
                this.pets = pets;
        }
        profile(){
                return `${this.name} is ${this.age}`;
        }
        addpet(animalName , animal, greet){
                this.pets.push(new Pet(animalName,animal,greet));
        }
        petsofKind(animal) {
                let newlist = []
                for (let i = 0; i < this.pets.length ; i++){
                        if (this.pets[i].animal === animal){
                                newlist.push(this.pets[i]);
                        }
                }
                return newlist;
        }
}
const Jorge = new Person('jorge',22,[new Pet('spooky','dog','woof')]);
console.log(Jorge);
Jorge.addpet('lol','what kind of dog is this','lmao what are you doing');
console.log('---------')
console.log(Jorge.petsofKind('dog'));

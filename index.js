// **Scope**
function scopeExample() {
    if (true) {
        //var example
        var functionScope = 'This is a function scope by Banky';
        console.log(functionScope) //Accessible here
        //Let example
        let blockScope = 'This is a block scope by Banky';
        console.log(blockScope); //Accessible here
        //const example
        const blockConst = 'This is a block const by Banky';
        console.log(blockConst); //Accessible here
    }
    console.log(functionScope); //Accessible outside the block
    //console.log(blockScope); //Error blockScope is not define; let is not accessible outside the block
    //console.log(blockConst); //Error blockConst is not define; const is not accessible outside the block
};
scopeExample()

//**Arrow function**
const greating = (name) => {
    console.log(`Hello good day ${name}`);
}
greating('Banky');

//**Array methods**
//An array
const numbers = [1, 2, 3, 4, 5];

//Map an array
const double = numbers.map((number) => number * 2);
console.log(numbers);

//filter an array
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//reduce to sum numbers 
const sunNumbers = numbers.reduce((total, num) => total + num, 0);
console.log(sunNumbers);

//forEach
numbers.forEach((num) => console.log('Number', num));

//Object
const user = {
    nam: 'Bankole Azeez',
    mail: 'bankoleazeezbabatunde@gmail.com',
    track: 'Frontend'
}
//Destructuring object
const { nam, mail, track } = user;
console.log(`My name is ${nam}, My Email address is ${mail}, And my Track is ${track}`)

//Implementation of array on simple HTML webpage
const fruits = ['Apple', 'Orange', 'Mango', 'Banana'];

//Dynamiccally display fruits on a webpage
document.getElementById('demo').innerHTML = `<h2>Fruit list</h2>
<ul>
${fruits.map((fruit) => 
`<li>${fruit}</li>`
).join('')}
</ul>
`
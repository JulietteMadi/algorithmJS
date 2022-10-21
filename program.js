const string = process.argv[2]; // nodeJS, not Javascript
console.log(string);
//
const array = string.split(",");//Source de la boucle
//
const numbers = [];// destination  de la boucle
for(let i = 0; i < array.length; i++){ //loop code block
    const candidate = array[i]; // type string
    //obj : convert candidate into integer
    const number = parseInt(candidate, 10);
    numbers.push(number);
}
console.log(numbers);
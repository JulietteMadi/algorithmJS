const string = process.argv[2];
const array = string.split(",");

const values = [];

for (let i = 0; i < array.length; i++){
    let candidate = array[i];
    let number = parseInt(candidate, 10);
    values.push(number);
}
//values est désormais un tableau d'entier qui a récupérer les entiers écrits en string en entrée


let min = 0;
let max = values.length - 1;

while (min<max){
    let temp = values[max];
    values[max] = values[min];
    values[min] = temp;
    min++;
    max--;
}

console.log(values);
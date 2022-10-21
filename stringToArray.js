const string = process.argv[2];
//console.log(string);
const numbers = [];
let temp = "";

for (let i = 0; i < string.length; i++){
    const candidate = string[i];
    if (candidate != "," ){
        temp += candidate;
    }
    else {
        numbers.push(temp);
        temp = "";
    }
}
numbers.push(temp);
console.log(numbers);
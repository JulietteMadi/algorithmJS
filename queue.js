const string = process.argv[2];
const queue = string.split(",");

console.log(queue);

let max = queue.length - 1;

for(let i = 0; i < queue.length; i++){
    console.log("Actual state = ", queue);
    console.log("Last exited = ", queue[i]);
    for(let i = 0; i < queue.length; i++){
        if(i < max) {
            queue[i] = queue[i+1];
        }
        else{
            queue[i] = "";
        }
    }
    max--;
    console.log("New state = ", queue);

}

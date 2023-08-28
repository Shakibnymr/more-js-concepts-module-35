let a = 5; //global context
function add(num1, num2) {
    const result = num1 + num2 + a; //functional context
    return result;
}
const sum = add(3,4);
console.log(sum); 
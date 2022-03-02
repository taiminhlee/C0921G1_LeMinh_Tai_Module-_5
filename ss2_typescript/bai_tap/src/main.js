var num1 = 0;
var num2 = 1;
var num3 = 1;
var arr = [];
function fibonacci(size) {
    if (size == 0) {
        return arr;
    }
    else {
        arr.push(num3);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    size--;
    return fibonacci(size);
}
console.log(fibonacci(8));
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    sum += num;
}
console.log(sum);

let num1: number=0;
let num2: number=1;
let num3: number=1;
let arr=[];
function fibonacci(size: number) {
    if (size==0){
        return arr;
    }else {
        arr.push(num3);
        num3=num1+num2;
        num1=num2;
        num2=num3;
    }
    size--;
    return fibonacci(size);
}
console.log(fibonacci(8));
let sum: number=0;
for (let i=0;i<fibonacci(8);i++){
    
}
console.log(sum)
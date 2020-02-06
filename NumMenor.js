var num1 =Math.floor(Math.random()*10);
var num2 =Math.floor(Math.random()*10);
var num3 =Math.floor(Math.random()*10);

console.log(num1);
console.log(num2);
console.log(num3);

if (num1<num2&&num1<num3){
console.log("El menor es:" ,num1);}
else
    if (num2<num1&&num2<num3){
    console.log("El menor es:" ,num2);}
else
    console.log("El menor es: ",num3);    
    
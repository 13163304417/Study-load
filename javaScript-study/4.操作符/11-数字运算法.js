var num = 1;
// 前置++ 先自身加1 然后输出num
console.log(++num);//输出为2
//后置++ 先输出num 在自身加1
var num1 = 1;
console.log(num1++);//输出为1

var a = 1; 
var b = a++ + ++a; //1+3 =4
console.log(b);

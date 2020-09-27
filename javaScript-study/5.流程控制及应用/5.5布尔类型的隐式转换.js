/*复习一下之前的布尔类型
    要转换成布尔类型需要 Boolean()
    只有五种情况才会返回false 
    0   ''空字符串  NaN  null   undefined 
*/

//隐性转换

//1. if语句可以实现

var str = '123';

if(str){
    console.log('qison');
}

//2. 取反

var str1 = '232';

var n = !str1;

var i = !!str1;

console.log(n);

console.log(i);
// 案例：
// 求两个数的最大数
// 判断一个数是偶数还是奇数
// 分数转换，把百分制转换成ABCDE   <60  E  60-70 D  70-80 C  80-90 B  90 - 100 A


// // 案例1

// var num1 = 5;
// var num2 = 6;

// if (num1 > num2) {
//     console.log('最大数是num1:' + num1);
// }else{
//     console.log('最大数是num2:' + num2);
// }


// // 案例2

// var num3 = 5;
// if (num3 % 2==0) {
//     console.log('这个数字是偶数');
// }else{
//     console.log('这个数字是奇数');
// }

// //案例3

// var num4 = 90 ;
// if (num4 < 60 && num4 >=0) {
//     console.log('成绩为E');
// }else if(num4 >= 60&& num4<70){
//     console.log('成绩为D');
// }else if (num4 >=70 && num4 <80) {
//     console.log('成绩为C');
// }else if (num4 >=80 && num4 <90) {
//     console.log('成绩为B');
// }else if (num4 >=90 && num4 <=100) {
//     console.log('成绩为A');
// }else{
//     console.log('成绩有误，请检查');
// }


// var score = 50;
// if (score >= 90) {
//     console.log('A');
// }else if (score >= 80) {
//     console.log('B');
// }else if (score >= 70) {
//     console.log('C');
// }else if (score >= 60) {
//     console.log('D');
// }else {
//     console.log('E');
// }

// /* 作业：
//     判断一个年份是闰年还是平年
//       闰年：能被4整除，但不能被100整除的年份 或者 能被400整除的年份
//     判断一个人的年龄是否满18岁(是否成年) 
// */

// // 作业1

// var year = 1900 ;

// if(year % 4 ==0 && year % 100 != 0 || year % 400 ==0){
//     console.log('此年为闰年');
// }else{
//     console.log('此年为平年');
// }




// function f(i){
//     return i;
// }
// if(f(19) >= 18 ){
//     console.log('这比可以看18+');
// }
 

var f = function (){
    var i = 1;
    return function (){
        return i++;
    }
}

console.log(f());
console.log(f());
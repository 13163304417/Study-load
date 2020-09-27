// 案例1 遍历1-100

// for(var i = 1;i <= 100;i++){
//     console.log(i);
// }

// 案例2 求1-100之间所有数的和
// var sum = 0;
// for(var i = 1;i <= 100;i++){
//     sum += i;
// }
// console.log(sum);


//案例3 求1-100之间所有数的平均值

// var sum = 0;

// for(var i = 1;i <= 100;i++){
//     sum += i;
// }
// console.log(sum/100);

//案例4 同时求1-100之间所有偶数的和奇数和
// var sum = 0;
// var sum1 = 0;
// for(var i = 1;i <=100;i++){
//     if(i % 2 ==0){
//         sum += i;
//     }else{
//         sum1 += i;
//     }
// }
// console.log(sum);
// console.log(sum1);

//案例5  打印正方形
// var s = '';

// for(var i = 0;i<10;i++){
//     for(var j = 0;j <10;j++){
//         s += '*'
//     }
//     s += '\n'
// }
// console.log(s);

//打印三角形

// var start = '';
// for (var i = 0; i < 10; i++) {
//   for (var j = i; j < 10; j++) {
//     start += '* ';
//   }
//   start += '\n';
// }
// console.log(start);


//九九乘法表

// var start = '';
// for(var i = 1;i < 10;i++){
//     for(var j = i;j < 10;j++){
//         start += i + '*' + j + '=' + i*j + '\t'
//     }
//     start += '\n'
    
// }
// console.log(start);

//作业1  求1-100之间所有数的乘积

// var sum2 = 1;
// for(var i = 1;i <=100;i++){
//     sum2 *= i;
// }
// console.log(sum2);

// 作业2 求1-100之间所有奇数的和

// var sum = 0;
// for(var i = 1;i <= 100;i++){
//     if(i %2 ==1){
//         sum  += i;
//     }
// }
// console.log(sum);

//作业3 计算1-100之间能3整除的数的和

// var sum = 0;
// for(var i = 1;i <=100;i++){
//     if(i % 3==0){
//         sum += i;
//     }
// }
// console.log(sum);

//作业4  计算1-100之间不能被7整除的数的和

// var sum = 0;
// for(var i = 1;i <=100;i++){
//     if(i % 7 !=0){
//         sum += i;
//     }
// }
// console.log(sum);


//work5 本金10000元存入银行，年利率是千分之三，
//      每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？

// var money = 10000;
// for (var i = 1; i<=5;i++){
//     money = money*(1+0.003);
// }
// console.log(money);

//work6  有个人想知道，一年之内一对兔子能繁殖多少对？于是就筑了一道围墙把一对兔子关在里面。
//     已知一对兔子每个月可以生一对小兔子，而一对兔子从出生后第3个月起每月生一对小兔子。假如一年内
//     没有发生死亡现象，那么，一对兔子一年内（12个月）能繁殖成多少对？（兔子的规律为数列，1，1，2
//     ，3，5，8，13，21）

// var a = 1;
// var b =1 ;
// for (var i = 2; i <= 12;i++){
//     var sum = a+b;
//     a = b;
//     b = sum;
// }
// console.log(a);


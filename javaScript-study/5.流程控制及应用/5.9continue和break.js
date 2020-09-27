//案例1  求整数1～100的累加值，但要求碰到个位为3的数则停止累加

// var num = 0;

// for(var i = 1; i<=100;i++){
//     if(i %10 ==3){
//         break ;
//     }
//     num += i;
// }
// console.log(num);

//案例2  求整数1～100的累加值，但要求跳过所有个位为3的数

// var num = 0;

// for(var i = 1; i<=100;i++){
//     if(i %10 ==3){
//         continue ;
//     }
//     num += i;
// }
// console.log(num);


//work 1 求1-100之间不能被7整除的整数的和（用continue）

// var num = 0;
// for(var i = 1;i<=100;i++){
//     if(i % 7 ==0){
//         continue;
//     }
//     num +=i;
// }
// console.log(num);

//work 2 求200-300之间所有的奇数的和（用continue）

// var num = 0;
// for(var i=200;i <= 300;i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     num += i;
// }
// console.log(num);

//work 3 求200-300之间第一个能被7整数的数（break）

// for(var i = 200;i<=300;i++){
//     if(i % 3 ==0){
//         break;
//     }
// }
// console.log(i);


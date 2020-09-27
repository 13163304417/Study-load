// function a(){
//     function f(){
//         console.log('王业启傻逼');
//     }   
//     return f
// }
// a()()

//  求1-100之间所有数的和
// function getSum(){
//     var sum = 0;
//     for(var i = 1;i <= 100;i++){
//         sum += i;
//     }
//     console.log(sum);
// }

// getSum();

// function fn(a,b){
//     sum = a +b
//     console.log(sum);
// }
// fn(1,2)
// let zc = new Person('zc',100)
// zc.sayHi();

// let tyh =  new Person('tyh',23)
// tyh.sayHi()
// console.log(zc);

// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     }

// let tyh = new Person('tyh',18)
// tyh.prototype()


// function getNum(num){
//     return num ++
// }
// var getNum1 = function(num1){
//     return num1++
// }

// console.log(getNum1(1));

// function Person(name,age){
//     this.name = name
//     this.age =  age
// }

// Person.prototype.sayHi = function(){
//     console.log('hello world!');
// }


// class Person{
//     constructor(){
//         this.name = 'zc'
//         this.age =  12
//     }
// }



// Array.prototype.sayHi = function(...arg){
//     let arr = arg
//     console.log(arr);
//     return arr.join('')
// }
// let arr = [1,2]
// [1,2].sayHi('xxx','yyyy')

// console.log([1,2,4].sayHi());


// 案例1  求1-n之间所有数的和

// function getSum(n){
//     var sum = 0;
//     for(var i = 1;i <= n;i++){
//         sum += i;
//     }
//     console.log(sum);
// }


//案例2 求n-m之间所有数额和

// function getSum(n,m){
//     var sum = 0;
//     for(var i = n;i <= m;i++){
//         sum += i;
//     }
//     console.log(sum);
// }

// getSum(1,2)

// 案例3 圆的面积

// function circleS(r){
//     return Math.PI*r*r

// }
// console.log(circleS(2));

// 求2个数中的最大值

// function getMax(n,m){
//     if(n > m){
//         console.log(n);
//     }else{
//         console.log(m);
//     }
// }

// 求3个数中的最大值

// function getMax(n,m,p){
//     if(n > m){
//         if(n >p){
//             console.log(n);
//         }
//     }else if(m > p){
//         console.log(m);
//     }else{
//         console.log(p);
//     }
// }
// getMax(1,2,3)

// 判断一个数是否是素数

// function getSuShu(n){
//     var m =0;
//     if(n ===1){
//         console.log('1既不是素数也不是合数');
//     }else{
//         for(var i = 2;i <= n;i++){
//             if(n % i === 0){
//                 m++
//             }
//         }
//     if(m === 2 || m === 1){
//         console.log('这个数为素数');
//     }else{
//         console.log('这个数为合数');
//     }
//     }
// }
// getSuShu(100)

// function getSuShu(n){
    
//     if(n === 1){
//         console.log('1既不是素数也不是合数');
//     }else {
//         for(var i = 2;i <= n;i++){
//             if(n % i === 0){
//                 console.log('素数');
//             }else{
//                 console.log('合数');
//             }
//         }
//     }
// }
// getSuShu(2)

//  快速排序
// function quickSort(arr){
//         if(arr.length<=1) 
//         return arr;
//         var fenge = Math.floor(arr.length/2);  //先找一个中间位置的数
//         var fengezhi = arr.splice(fenge,1)[0]; //把这个数的值表示出来
//         // console.log(fengezhi);
//         var one = []; //定义一个空数组接收小的一边的数
//         var two = []; //定义一个空数组接收大的一边的数
//         for(var i =0;i<arr.length;i++){
//             if(arr[i]<=fengezhi){
//                 one.push(arr[i]); //one数组接收比其小的数
//             }else{
//                 two.push(arr[i]); //two数组接收比其大的数
//             }
//         }
//         return quickSort(one).concat([fengezhi],quickSort(two)); //递归+拼接大小数组
// }

// var array = [4,2,6,45,66,2,4,34,1,9];
// console.log(quickSort(array))


//  求阶乘

// function fac(n){
//     var sum = 1
//     for(var i = n;i >=1;i--){
//         sum *= i
//     }
//     console.log(n +'的阶乘为:' + sum);
// }
// fac(4)


//求阶乘的和

// function facHe(n){
//     var sum = 0;
//     for(var i =1;i <=n;i++){
//         var m = 1;
//         for(var j = i;j>=1;j--){
//             m *=j
//         }
//         sum += m
//     }
//     return sum
// }

// console.log(facHe(4));

// 求一组数中的最小值

// function getMin(arr){
// var max = 0;
// var min = arr[0];
// var index = 0;
// for(var i =1;i <= arr.length; i++){
//     if(arr[i] <min){
//         min=arr[i];
//         index = i ;
//     }
    
// }
// console.log(index);
// console.log(min)
// }
// getMin([5,3,2,4,1,6,10,8,9,7])


// 输入某年某月某日，判断这一天是这一年的第几天？

// function getDays(year,month,day){
//     var days = day;  //当前月份的天数
//     var result = 0;
    
//     for (var i = 1;i < month;i++){
//         switch(i){
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 days += 31;
//                 break;
//             case 4:                
//             case 6:
//             case 9:    
//             case 11:
//                 days +=30;
//                 break;
//             case 2:
//                 // 判断是否为闰年
//                  if(year % 4 ===0 && year % 100 !==0 || year % 400 === 0){
//                     days += 29;
//                 }else{
//                     days  += 28;
//                 }
//                 break;
//         }
//     }
//     return days;
// }
// console.log(getDays(2000,3,1));



// 变量提升

//  最后输出的num 为 10 
// var num = 0;
// getSon()
// function getSon(){
//     console.log('王业启是son');
//     var num = 10;
//     console.log(num);
// }
// 


//经典面试题目
// var str="URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e";
// var arr1=str.split("?")[1]   //a=1&b=2&c=&d=xxx&e
// var arr2=arr1.split("&")     //a=1 b=2 c= d=xxx e
// var obj={};
// for(var i=0;i<arr2.length;i++){
//     var arr=arr2[i]
//     var pro=arr[0]
//     var len=arr.substring(1)


// if(len=="="){
//     len=" "
// }if(len==""){
//     len="undefined"
// }
// len=len.replace(/[=]/,"")
//     obj[pro]=len;




// }
//   console.log(obj)



//预解析
    // 1 变量提升，把变量的声明提升到当前作用域的最上面，不包括变量的赋值
    // 2 函数提升，把函数的声明提升到当前作用域的最上面，不包括函数的调用
     

    // console.log(n);
    // var n = 5;

    //预解析
    // var n ;
    // console.log(n);
    // n = 5;


    // f1();
    // function f1(){
    //     console.log('王业启傻逼');
    // }

    //预解析
    // function f1(){
    //     console.log('王业启傻逼');
    // }
    // f1();

    //案例

//     f1();
//         console.log(c);
//         console.log(b);
//         console.log(a);
//     function f1() {
//         var a = b = c = 9;
//         console.log(a);
//         console.log(b);
//         console.log(c);
// }


//预解析案例

    // var  a = b = c =9;
    // 分解之后为
    // var a ;
    // b c为全局变量
    //  b = 9;
    //  c = 9;

//     function f1() {
//         var a;
//       //b和c在这里为全局变量
//         a = b = c =9;
//         console.log(a);
//         console.log(b);
//         console.log(c);
// }
//     f1();
//     console.log(c);
//     console.log(b);
//     console.log(a);

//arguments  函数输入的值
function fn1(){
    console.log(arguments);
}

fn1(1,2,4)
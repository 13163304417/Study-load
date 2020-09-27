// // toString() / valueof() 每个对象都具有这两种方法
// var arr = [1,3,51,12,12];

// console.log(arr);
// //toString() 把数组转换成字符串，并且使用逗号分割每一项
// console.log(arr.toString());
// //valueOf() 返回数组对象本身
// console.log(arr.valueOf());


//1. 栈操作   先进后出

// var array = [1,2,3];
//在数组最后一位增添一个数
// 方法一
// array[array.length] = 2;
// 方法二 push
// 参数， 可以有多个 ，都会添加到数组最后
// push 的返回值 就是返回的该数组的长度
// array.push(4);
// console.log(array);  //输出为 [1,2,3,4]
// var r = array.push(2,3,5,4);
// console.log(r);
// console.log(array);

//pop  返回数组中最后一个数，并且取出来，修改数组的长度

// var last = array.pop();
// console.log(last);
// console.log(array.length);
// console.log(array);


//2. 队列操作   push()在数组最后插入  shift()取出数组中第一个数  unshift()在数组最前面插入

// var arr = [1,2,3,4] ;
//在数组最后插入一个5
// arr.push(5);
// console.log(arr);
// //在数组中取出第一个数
// var first = arr.shift();
// //返回值为取出的第一数
// console.log(first);
// // console.log(arr.length);
// console.log(arr);
// //在数组最前面插入一个数
// first = arr.unshift(0);
// //返回值为数组的长度
// console.log(first);
// // console.log(arr.length);
// console.log(arr);


// //3. 排序方法

// var arr = ['a', 'b', 'c' , 'd'] ;
// //翻转  reverse()
//  arr.reverse();
//  console.log(arr);
//  //排序 sort()
//  arr.sort();
//  console.log(arr);

//sort()  默认情况下 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是
//        在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的 


//sort(compareFunction)
// 如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。
// 即 a 和 b 是两个将要被比较的元素：
// 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
// 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
// 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
// compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。


//对数字为数字类型的进行排序  
//方法一
// var arr = [22 , 3 , 4 , 2 , 1 ,54] ;
// function compareFunction(a,b){
//     return a - b ;
// }

// arr.sort(compareFunction);
// console.log(arr);

//方法二
// var arr  = [2,5,3,4,85,13] ;
// arr.sort(function (a,b){
//     return a - b ;
// });
// console.log(arr);




//方法三

// var arr = [11,3,5,8,3,4,5] ;
// arr.sort((a,b) => a - b);
// console.log(arr);

// concat() // 把参数拼接到当前数组

// var arr1 = [1,2,3]
// var arr2 = [4,5]
// var  arr3= arr1.concat(arr2);
// console.log(arr3);

//slice() //从当前的数组中截取一个新的数组,不影响原数组，参数start从0开始，end从1开始

// var arr = [1,2,3,4,5,6,7,8,9]
// var arr1 = arr.slice(0,2);  //start 从0 开始   end 从1开始  
// console.log(arr1);  //输出为 [1,2] 

//splice()  删除或替换当前数组的某些项目，参数start，deleteCount，options(要替换的项目)

// var arr = [1,2,3,4,5];
// arr.splice(2,0,3)
// console.log(arr);
// arr[2] 开始 删除1个
// arr.splice(2,1)
// console.log(arr); //返回值为[1,2,4,5]

// arr.splice(0,2,10,8,9);
// console.log(arr); 返回值为  [10,8,9,3,4,5]



//indexOf  方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
//  有2个参数值，  第一个必须写 ，第二个可选
// 第一个参数  表示 在数组中需要查找的元素
// 第二个参数  表示 从哪个位置开始查找 开始查找的位置。如果该索引值大于或等于数组长度，
//            意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的
//            一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 
//            注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询
//            数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0.

// var arr = [1,2,3,4,5,6,7,8,9]

// console.log(arr.indexOf(3));
// console.log(arr.indexOf(3,-8));



//every()  方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

// 下例检测数组中的所有元素是否都大于 10。

// function isBigEnough(element){
//     return element >=10 ;
// }

// var  arr = [10,5,81,132];
// console.log(arr.every(isBigEnough));

// join()方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
// var arr = ['1','2','3'];

// console.log(arr.join('|'));



// 1. 将一个字符串数组输出为|分割的形式，比如“刘备|张飞|关羽”。使用两种方式实现
//方法一
// var arr = ['刘备' , '张飞' , '关羽'];
// console.log(arr.join('|'));

//方法二
// function myJoin(array, seperator) {
//   seperator = seperator || ',';
//   array = array || [];
//   if (array.length == 0) {
//     return '';
//   }
//   var str = array[0];
//   for (var i = 1; i < array.length; i++) {
//     str += seperator + array[i];
//   }
//   return str;
// }
// console.log(myJoin(['刘备', '张飞', '关羽'], '|'));






//2. 将一个字符串数组的元素的顺序进行反转。["a", "b", "c", "d"] -> [ "d","c","b","a"]
// 。使用两种种方式实现。提示：第i个和第length-i-1个进行交换

//方法一
// const arr = ["a", "b", "c", "d"]
// arr.reverse();
// console.log(arr);

//方法二

// function myReverse(array) {
//   if (!array || array.length == 0) {
//     return []
//   }

//   var tmp = 0
//   //  i < array.length /2    如果不除以2的话，那么久交换了2次位置 
//   for (var i = 0; i < array.length / 2; i++) {
//     tmp = array[i]
//     array[i] = array[array.length - i - 1]
//     array[array.length - i - 1] = tmp
//   }
//   return array
// }

// var arr = [2, 2, 45, 5, 67, 8, 96, 56, 544, 3, 4, 4]
// console.log(myReverse(arr))

// 3.工资的数组[1500, 1200, 2000, 2100, 1800],把工资超过2000的删除

// function delSalary(arr) {
//   if (!arr || arr.length == 0) {
//     return []
//   }
//   var a = arr.every(function (element) {
//     return element <= 2000
//   })
//   if (a == 1) {
//     return arr
//   }
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 2000) {
//       arr.splice(i, 1)
//     }
//   }
//   return arr
// }

// var arr1 = [1500, 1200, 2000, 2100, 1800]
// console.log(delSalary(arr1));


//4. ["c", "a", "z", "a", "x", "a"]找到数组中每一个a出现的位置

//方法一
// function findOne(arr){
//   if(!arr || arr.length==0){
//     return []
//   }
//   for(var i = 0;i<arr.length;i++){
//     if(arr[i] == 'a'){
//       console.log('下标为'+i);
//       // arr.splice(i,1)
//     }
//   }
//   return arr ;
// }
// var arr1 = ["c", "a", "z", "a", "x", "a"]
// findOne(arr1)

//方法二
// var arr = ["c", "a", "z", "a", "x", "a"]
// var index = -1
// do {
//     index = arr.indexOf('a', index + 1)
//     if (index !== -1) {
//         console.log(index);
//     }
// } while (index !== -1);




//5.编写一个方法去掉一个数组的重复元素
// let arr1 = [1,2,1,2,3] 
// function clear(arr) {
//     if (!arr || arr.length == 0) {
//         return ''
//     }
//     console.log(Array.from(new Set(arr1)) );
// }

// clear(arr1);



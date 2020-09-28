//5.编写一个方法去掉一个数组的重复元素

// 方法一
// let arr1 = [1,2,1,2,3] 
// function clear(arr) {
//     if (!arr || arr.length == 0) {
//         return ''
//     }
//     console.log(Array.from(new Set(arr1)) );
// }
// clear(arr1);

//方法二

// let arr1 = [1, 2, 2, 3, 4, 5, 5, 6]

// function clear(arr) {
//     if (!arr || arr.length == 0) {
//         return ''
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//             arr.splice(j, 1)
//             j--
//             }
//         }
//     }
//     return arr
// }
// console.log(clear(arr1));

//方法三

// function clear(arr) {
//     if (!arr || arr.length == 0) {
//         return ''
//     }
//     let array = []
//     for (let i = 0; i < arr.length; i++) {
//         //判断array数组中是否有和arr数组中一样的元素，如果没有则加入array中
//         if (array.indexOf(arr[i]) === -1) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// let arr1 = [1, 2, 3, 4, 4, 5, 6, 8, 8, 6, 6, 9]
// console.log(clear(arr1));
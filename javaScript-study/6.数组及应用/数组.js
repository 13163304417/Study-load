//遍历数组

// var arr = [0,1,2,3,4,5,6,7,8,9,10];
// for(var i =0;i <= arr.length; i++){
//     console.log(arr[i]);
// }

// var n = 123;

// n = '123'

// console.log(n);
// console.log(typeof n);
 



// work


// 





//work 1 求一组数中的所有数的和和平均值
// var sum =0;
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var a = 0;
// for(var i = 0;i <arr.length;i++){
//     sum += arr[i]
//     a = sum / arr.length
// }
// console.log(sum);
// console.log(a);

//work 2 求一组数中的最大值和最小值，以及所在位置


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



// console.log(Math.max.apply(null,arr));
// console.log(Math.min.apply(null,arr));
// console.log(max);
// console.log(min)


// function getMax(arr){
// var max =arr[0]
// var index = 0

// for(var i = 1;i <= arr.length;i++){
//     if(max < arr[i]){
//         max = arr[i]
//         index = i
//     }
// }
// console.log(index);
// console.log(max);
// }

// getMax([8,3,7,9,6,2,1,4,5,10])


// 将字符串数组用|或其他符号分割

// var arr = ['1','2','3','4','5','6','7','8']

// arr[4]='|'

// arr[8]='5'

// console.log(arr);


// 要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
// function getNewArr(arr){
//     var arr1 = [];
//     var sum = 0;
//     for(var i = 0; i < arr.length;i++){
//         if(arr[i] !== 0){
//             arr1[sum]=arr[i]
//             sum++;
//         }
//     }
//     console.log(sum);
//     console.log(arr1);
// }
// getNewArr([0,2,3,4,6,0,7])

// 翻转数组

// function fanZhuanArr(arr){
//     var tmp = 0
//     var arr1 = []
//     var sum = 0
//     for(var i = 0;i < arr.length;i++){
//         arr1[sum] = arr[arr.length-i-1]
//         sum++
//     }
//     console.log(arr1);

// }

// fanZhuanArr([1,2,3,4])



//冒泡排序 从小到大

function getArr(arr){
    var sum = []
    for(var j = 0;j <arr.length-1;j++){
        for(var i = 0;i < arr.length-j-1;i++){
            if(arr[i]>arr[i+1]){
                sum = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] =sum
            }
    }
}
    console.log(arr);
    // console.log(arr.sort());  
}
getArr([8,9,2,4,1]);
getArr([8,9,2,1,6,5,4])


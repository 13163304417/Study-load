//创建数组对象
// var numbers = new Array(1,23,4,51,4);


// console.log(numbers);


// 判断一个变量是否为一个数组对象的两种方法

//1. instanceof   支持全部的浏览器

// function fn(arr){
//     if(!(arr instanceof Array)){
//         console.log('该变量不是Array对象');
//         return ;
//     }
//     console.log('该数组类型是数组对象');
// }
// var d = 1 ;
// fn(d);

// 2. Array.isArray()  存在浏览器兼容问题  支持HTML5的浏览器可以使用 

function fn(arr){
    if(!Array.isArray(arr)){
        console.log('该变量是不是数组对象');
        return ;
    }

    console.log('该变量是数组对象');
}

var d = 1 ;
fn(d);

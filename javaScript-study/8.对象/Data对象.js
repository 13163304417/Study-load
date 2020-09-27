// console.log(Object.prototype.toString.call(1).slice(8,-1));


// var str = '1234';
// console.log(str.slice(0,2));

// var arr = [1]

// function getType(str){
//     return  Object.prototype.toString.call(str).slice(8,-1);
// }

// var f = new getType();

//constructor  判断某个实例对象为哪个构造函数  返回值为 true  或者 false
// console.log(f.constructor === getType);

// 案例 格式化日期对象  形式  yyyy-MM-dd  HH：mm：ss

// var d = new Date();
// console.log(d)

// function formatDate(d){
//     if(!(d instanceof Date)){
//         console.error('不是日期格式');
//         return ;
//     }

//     var year = d.getFullYear(),
//         month = d.getMonth() + 1,
//         date = d.getDate(),
//         hour = d.getHours(),
//         minute = d.getMinutes(),
//         second = d.getSeconds();

//         month = month < 10 ? '0' + month : month;
//         date = date < 10 ? '0' + date : date ;
//         hour = hour < 10 ? '0' + hour :hour ;
//         minute = minute < 10 ? '0' + minute :minute;
//         second = second < 10 ? '0' + second : second;

//         return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second         
        
// }
// var d = new Date();

// console.log(formatDate(d));

// 计算时间差

function getInterval(start,end){
    //获取时间差的毫秒数
    var interval = end - start ;
    //将毫秒数装换成秒数
    // interval = interval / 1000;
    interval /= 1000;  // 简写
    var day , hour , minute , second ;
    day = Math.round(interval / 60 / 60 / 24 );
    hour = Math.round(interval / 60 / 60 % 24) ;
    minute = Math.round(interval / 60 % 60 );
    second = Math.round(interval % 60 );

    return day + '天' + hour + '小时' + minute + '分钟' + second + '秒' ;
}
var d1 = new Date(2020,9,1);
var d2 = new Date();
console.log(getInterval(d2,d1));


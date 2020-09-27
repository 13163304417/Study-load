//Math.random()

//默认值为[0,1)
// function getRandom(){
//     console.log(Math.random());
// }

// getRandom()

//取[min,max)

// function getRandom(min,max){
//     console.log(Math.random() * (max-min) + min);
// }
// getRandom(10,20);

//取[min,max)之间的整型
// function getRandom(min,max){
//     //两种取整型的方法
//     //Math.floor
//     console.log(Math.floor(Math.random() * (max-min) + min));
//     // parseInt
//     console.log(parseInt(Math.random() * (max-min) + min));
// }
// getRandom(10,20);


//案例1  求10到20之间的随机数 整数 10和20都可以取到

// function getRandom(min,max){
//     console.log(Math.floor(Math.random(min,max) * (max-min+1) + min));
// }

// getRandom(10,20)


//案例2 随机生成颜色RGB

// function randomRGB(min,max){
//     var    color1 = Math.floor(Math.random(min,max) * (max - min + 1) + min);
//     var    color2 = Math.floor(Math.random(min,max) * (max - min + 1) + min);
//     var    color3 = Math.floor(Math.random(min,max) * (max - min + 1) + min);

//     return 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';

// }

// console.log(randomRGB(0,255));

//案例3  实现max()和min()

// function getMax(){
//     // arguments  
//     var max = arguments[0];

//     for(var i = 0; i< arguments.length ; i++){
//         if(max < arguments[i]){
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(getMax(1,2,3,5,4,9));

// function getMin(){
//     // arguments  
//     var min = arguments[0];

//     for(var i = 0; i< arguments.length ; i++){
//         if(min > arguments[i]){
//             min = arguments[i];
//         }
//     }
//     return min;
// }

// console.log(getMin(1,2,3,5,4,9));


//方法

// var MyMath = {
//     max : function(){
//         //  arguments  
//         var max = arguments[0];

//         for(var i = 0; i< arguments.length ; i++){
//          if(max < arguments[i]){
//                max = arguments[i];
//          }
//         }
//         return max
//     },
//     min : function () {
//             // arguments  
//         var min = arguments[0];

//         for(var i = 0; i< arguments.length ; i++){
//          if(min > arguments[i]){
//                 min = arguments[i];
//         }
//         }
//         return min;
//         }
// }
// console.log(MyMath.max(1,2,3,4,5,6,7,8,9));



// function MyMath(min,max){
//     this.min =  function(){
//             //  arguments  
//         var min = arguments[0];

//         for(var i = 0; i< arguments.length ; i++){
//          if(min > arguments[i]){
//                 min = arguments[i];
//         }
//         }
//         return min;
//     },
//     this.max = function(){
//          //  arguments  
//         var max = arguments[0];

//         for(var i = 0; i< arguments.length ; i++){
//          if(max < arguments[i]){
//                max = arguments[i];
//          }
//         }
//         return max
//     }
// }
// var asd = new MyMath();
// console.log(asd.min(1,23,4,56,7,9,84));
// console.log(asd.max(11,23,4,5,7,8,9,6,45,4));
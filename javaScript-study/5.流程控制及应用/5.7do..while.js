var i = 1; 
var sum = 0;
do {
    sum += i ;
    i++;
} while (i <= 100);

console.log(sum);

//作业1   求100以内所有3的倍数的和

var num = 0 ;

var sum1 = 0;

do {
    if (num % 3 == 0) {
        sum1 += num;
    }
    num++;
} while (num <= 100);
console.log(sum1);

//作业2  使用do-while循环：输出询问“我爱你，嫁给我吧？”，选择“你喜欢我吗？(y/n):"，
//       如果输入为y则打印”我们形影不离“，若输入为n,则继续询问 

do {
    var msg = prompt('我爱你，你嫁给我吧','请回答yes/no');
    
} while (msg == yes);

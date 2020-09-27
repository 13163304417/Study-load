var weekDay = 100 ;

switch (weekDay) {
    //switch中的相等判断是用的===   case和weekDay比较用的是 === 
    case 1:
        console.log('星期一');
        // 如果不加入break的话 不管条件符不符合，都会继续往下执行，继续输出下面的值，为穿透效果
        break;
    case 2:
        console.log('星期二');
        break;
    case 3:
    console.log('星期三');
        break;
    case 4:
    console.log('星期四');
        break; 
    case 5:   
    console.log('星期五');
        break;
    case 6:
        console.log('星期六');
        break;
    case 7:
        console.log('星期日');
    default:
        console.log('输入错误！');
        break;
}
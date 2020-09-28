// let str1 = 'abc'
// let str2 = new String('abc')

// console.log(str1);
// console.log(str2);

// 当重新给str赋值的时候，常量'abc'不会被修改，依然在内存中
// 重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变
// 由于字符串的不可变，在大量拼接字符串的时候会有效率问题
// let str = 'abc'
// str = '123'
// console.log(str);


//创建String对象

// let str = new String('12345')
// console.log(str.length);

//字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，操作完成会返回一个新的字符串


// let str = new String('1234567')

// //charAt()、str[]获取指定位置处的字符
// console.log(str.charAt(5));
// console.log(str[5]); //HTML5，IE8支持和charAt()等效

// //charCodeAt()获取指定位置处的字符的ASCII码
// console.log(str.charCodeAt(5));

// let str1 = new String('89')

// //concat()拼接字符串  等效于+   + 更常用
// console.log(str.concat(str1));

// //slice()截取字符串  从start开始  end结束，end取不到
// console.log(str.slice(0,3));

// //subString()从start位置开始，截取到end位置，end取不到
// console.log(str.substring(0,3));

// //substr()//从start位置开始，截取length个字符
// console.log(str.substr(2));

// //indexOf()返回指定内容在原字符串中的位置
// console.log(str.indexOf('2'));// 返回的是索引值

// //lastIndexOf() 从后往前找，只找到第一个匹配的
// console.log(str.lastIndexOf('2'));//返回值和indexOf()值是一样


let str = ' 123 456 '

console.log(str);
//trim() 去除空白 
// 只能去除字符串前后的空白
console.log(str.trim());


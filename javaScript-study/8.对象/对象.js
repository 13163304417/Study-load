
//创建一个对象

// var person = {
//     name : '陶逸辉',
//     age : 21,
//     sex : '男',
//     sayHi: function(){
//         console.log('hello');
//     }
// }


//创建一个dog对象

// var dog = {
//     //属性
//     name: 'qison',
//     age : 2,
//     sex : '母',
//     //方法
//     bark: function(){
//         console.log(this.name +'汪汪汪喵~');
//     },
//     eat : function(){
//         console.log(this.name + '吃shit');
//     } 
// }

// //调用属性
// console.log(dog.name);
// console.log(dog.sex);
// console.log(dog.age);

// //调用方法
// dog.bark();
// dog.eat();

//创建一个hero对象

// var hero = {
//     name : '王业启',
//     age : 18,
//     sex : '男',
//     //装备
//     equipment :'美少女战士魔法战衣',
//     //武器
//     weapon : '美巴啦啦能量—仙多拉—魔仙剑',
//     //方法类： Transform 变身
//     transform : function(){
//         console.log('巴啦啦能量—沙罗沙罗—小魔仙—全身变');
//     },
//     skill : function(){
//         console.log('巴拉拉能量---沙沙胡---保护能量');
//     }
// }
// function Hero(name,age,sex,equipment,weapon){
//     this.age = age;
//     this.name = name;
//     this.equipment = equipment;
//     this.weapon = weapon;

//     this.transform = function(){
//         console.log('巴啦啦能量—沙罗沙罗—小魔仙—全身变');
//     }
//     this.skill = function(){
//         console.log('巴拉拉能量---沙沙胡---保护能量');
//     }
// }

// var hero1 = new Hero('王业启',18,'女','美少女战士魔法战衣','巴啦啦能量—仙多拉—魔仙剑');
// var hero2 = new Hero('陈驰',20,'男','神话','神之意象');

// hero1.skill()
// console.log(hero1);
// console.log(hero2);


// var person = {
//     name : '王业启',
//     sex : '女',
//     age : 18,
//     sayHi : function(){
//         console.log(this.name + 'hello');
//     }
// }

// //删除属性
// delete person.sex;

// for(var key in person){
//     console.log(key + ' --'+ person[key]);
// }

// person.sayHi();


// function fn(a,b){
//     a = a + 1 ;
//     b = b + 1 ;
//     console.log(a);
//     console.log(b);
// }

// var x = 20;
// var y = 10;
// fn(x,y)
// console.log(x);
// console.log(y);


//内置对象

// JavaScript 组成: ECMAScript  BOM  DOM

// JavaScript中的对象有三种：自定义对象 内置对象  浏览器对象（不属于ECMAScript）

//最常用的属性和方法，

//查文档  MDN 

var d = new Date();

console.log(d.getFullYear());
// console.log(d.getDate());

// console.log(d.getDay());
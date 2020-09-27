// var a =1;

// var b = ++a + ++a;

// console.log(b);

// var c = ++a + a++;

// console.log(c);

// var d = a++ + a++;

//  console.log(d);

const p = new Promise((resolve,reject) =>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
    })
    resolve(4)
    console.log(3);
}
)

setTimeout(()=>{
    console.log(5);
})

p.then(value =>{
    console.log(value);
})

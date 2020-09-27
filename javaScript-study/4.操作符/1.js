// const p = new Promise((resolve,reject) =>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//     })
//     resolve(4)
//     console.log(3);
// }
// )

// setTimeout(()=>{
//     console.log(5);
// })

// p.then(value =>{
//     console.log(value);
// })
"use strict";
$(function () {
    $("#love_login").on("submit", function (o) {
        o.preventDefault();
        var e = $(this).serialize();
        console.log(e), $.ajax({
            url: "/lovelogin",
            type: "post",
            data: e,
            dataType: "json",
            success: function (o) {
                var e = o.err_code;
                0 === e ? window.location.href = "/love" : 1 === e ? window.alert("密码错误！") : 500 === e && window.alert("服务器繁忙，请稍后再试！")
            }
        })
    })
});
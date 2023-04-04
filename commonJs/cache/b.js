var a1 = require('./a.js')
console.log(a1.name) 
a1.name = "Bob";

// 删除缓存
delete require.cache[require.resolve("./a")]

var a2 = require("./a.js")
console.log(a2.name)

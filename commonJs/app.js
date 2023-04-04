
//  ​browserify打包命令 ​browserify app.js -o dist/bundle.js
//  ​browserify：提供浏览器环境使用的模块打包工具

let uniq = require('uniq')
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo() 
module2()  
module3.foo() 
console.log(uniq(module3.arr)) 



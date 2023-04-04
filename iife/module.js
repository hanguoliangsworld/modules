(function(window) {
  let data = 'hello world'
  function foo() {
    console.log(`foo() ${data}`)
  }
  window.myModule = { foo, data }
})(window)


/* // 依赖
(function(window, $) {
  let data = 'hello world'
  //操作数据的函数
  function foo() {
    //用于暴露有函数
    console.log(`foo() ${data}`)
    $('body').css('background', '#ccc')
  }
  //暴露行为
  window.myModule = { foo }
})(window, jQuery) */


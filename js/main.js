function whiteCode(code) {
  var domCode = document.querySelector('#code')
  var n = 0
  var id = setInterval(() => {
    n = n + 1
    domCode.innerHTML = code.substring(0, n)
    domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0, n)
    if (n > result.length) {
      window.clearInterval(id)
      fn2()
      fn3(result)
    }
  }, 10)
}


var result = `/*面试官你好!
 * 只用文字介绍太单调了
 * 我将以动画的方式介绍自己
 * 就用代码来介绍吧
 * 首先准备一些样式
 */
 
*{
  transition: all .8s;
}
/*设置背景颜色*/
html{
    background: rgba(222,222,222);
    font-size: 16px;
  }

/*文字距离边框太近了*/
#code{
  border: 1px solid red;
  padding: 16px;
}
/*代码高亮*/
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}

`
whiteCode(result)

function fn2() {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(oldResult) {
  var result = `#paper{
      width: 200px;
      height: 200px;
      background: white;
    }
  `
  console.log('13213')
  var n = 0
  var id = setInterval(() => {
    n += 1
    code.innerHTML = oldResult + result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = oldResult + result.substring(0, n)
    if (n >= result.length) {
      window.clearInterval(id)
    }
  }, 30)
}
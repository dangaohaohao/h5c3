##购物车宣传（宣传页 活动页 h5宣传页）


####全屏切换效果
 > 通过鼠标的滚轮 切换全屏页面
 - 使用 fullpage 来完成
 - 使用动画 （js 实现动画  css3显示的动画）
 	+ 一个是帧动画 一个是补间动画
 	+ 什么是帧动画：使用定时器 每隔一段时间 更改当前元素的状态
 	+ 什么是补间动画：过渡动画（加过渡 只要状态发生改变就能产生动画）动画（多个节点来控制动画）性能会更好
 	+ 在支持H5C3的浏览器尽可能使用c3动画 （尤其移动端）
 	+ transition  animation
 	+ transition 组合写法（transition:all 1s linear 1s）
 	  的拆分写法 transition-property transition-duration transition-timing-function transition-delay
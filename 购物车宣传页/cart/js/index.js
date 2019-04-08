


$(function($){

	// 初始化fullpage组件
	// 1.设置每一个屏幕的背景颜色
	// 2.设置屏幕内容的对齐方式 默认是垂直居中的 改为顶部对齐
	// 3.设置指示器 即点容器
	// 4.监听进入某一屏的时候
	$('.container').fullpage({
		// 配置参数
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		verticalCentered:false,
		navigation:true,
		afterLoad:function(link,index){
			// 序号 从1开始的 当前屏的序号
			$('.section').eq(index-1).addClass('now');
		},
		// 最好在组件初始完毕或者插件内容渲染完毕
		afterRender:function(){
			// console.log(this);
			// this 里面没有api方法
			// jquery插件封装的时候有没有这个方法
			// 1.回想jquery插件封装 $.fn.fullpage = function(){}
			// 2.jquery 本身没有的方法通过 $.fn的方式追加 认为是插件方法
			// 3.例如 $.fn.src = function(){ return this.attr('src')} this 你选了谁 this(jquery对象)指向谁 
			// 点击更多切换下一页
			$('.more').on('click',function(){
				$.fn.fullpage.moveSectionDown();
			});
		}
	});
});



$(function($){

	// 初始化fullpage组件
	// 1.设置每一个屏幕的背景颜色
	// 2.设置屏幕内容的对齐方式 默认是垂直居中的 改为顶部对齐
	// 3.设置指示器 即点容器
	$('.container').fullpage({
		// 配置参数
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		verticalCentered:false,
		navigation:true
	});
});
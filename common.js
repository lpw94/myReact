/*
**index customer-logo hover
 */

// $(".coustomer-logo").find(".am-u-md-2 a").each(function() {
//   $(this).hover(function() {
//     console.log(1)
//       $(this).find(".am-active").show();
//       $(this).find(".normal-logo").hide();
//   }, function() {
//     $(this).find(".am-active").hide();
//     $(this).find(".normal-logo").show();
//   });
// });
(function(){
	function addPlay(){    
		var x=0;    
		return function(){       
		//函数嵌套函数        
			x++;
			if (x>3) {
				x = 0;
			}        
			//console.log(x);
			//初始tabs事件   闭包定义
			$("#my-tabs").tabs('open',x);    
		}
	}
	var outPut = addPlay();     
	
	var times = setInterval(outPut,3000);

	//鼠标移到容器清楚定时器
	$("#my-tabs").hover(function(){
			clearInterval(times); 
	},function(){
		times=setInterval(outPut,3000);
	})


  $('.customer-logo').find('.customer-box').each(function(){
    $(this).hover(function(){
        $(this).find('.am-active').show();
        $(this).find('.normal-logo').hide();
    },function(){
        $(this).find('.am-active').hide();
        $(this).find('.normal-logo').show();
    })
  });
})()

function ownFrame() {}
ownFrame.prototype = {
	// 多个属性运动框架  添加回调函数
	$animate: function animate(obj,json,fn) {  
	    clearInterval(obj.timer);
	    obj.timer = setInterval(function() {
	    	// 用来判断是否停止定时器   一定写到遍历的外面
	        var flag = true;  
	        for(var attr in json){  
	            var current = 0;
	            if(attr == "opacity")
	            {
	                current = Math.round(parseInt(ownFrame.prototype.$getStyle(obj,attr)*100)) || 0;
	            }
	            else
	            {
	                current = parseInt(ownFrame.prototype.$getStyle(obj,attr)); // 数值
	            }
	            // console.log(current);
	            // 目标位置就是  属性值
	            var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
	            step = step > 0 ? Math.ceil(step) : Math.floor(step);
	            //判断透明度
	            if(attr == "opacity")  // 判断用户有没有输入 opacity
	            {
	                if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
	                {
	                    obj.style.opacity = (current + step) /100;
	                }
	                else
	                {  
	                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";
	                }
	            }
	            else if(attr == "zIndex")
	            {
	                obj.style.zIndex = json[attr];
	            }
	            else
	            {
	                obj.style[attr] = current  + step + "px" ;
	            }

	            if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
	            {
	                flag =  false;
	            }
	        }
	        if(flag)  // 用于判断定时器的条件
	        {
	            clearInterval(obj.timer);
	            if(fn) 
	            {
	                fn(); 
	            }
	        }
	    },10);
	    
	},
	
	// 获取对象当前属性值
	$getStyle: function getStyle(obj,attr) {  
		    if(obj.currentStyle)  
		    {
		        return obj.currentStyle[attr];  // 
		    }
		    else
		    {
		        return window.getComputedStyle(obj,null)[attr];  
		    }
	},

	// 获取页面滚动的高度和宽度
	$scroll: function scroll() {
	    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
	    {
	        return {
	            left: window.pageXOffset,
	            top: window.pageYOffset
	        }
	    }
	    else if(document.compatMode == "CSS1Compat") 
	    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
	    {
	        return {
	            left: document.documentElement.scrollLeft,
	            top: document.documentElement.scrollTop
	        }
	    }
	    return { 
	    	//  怪异模式
	        left: document.body.scrollLeft,
	        top: document.body.scrollTop
	    }
	},

	// 页面从leader滚动到target
	$scrollToTarget: function scrollToTarget($selector,target) {
	    $selector.on('click',function() {
	        var leader = $$own.$scroll().top;
	        var timer = null;
	        //target为滑到到的位置
	        timer = setInterval(function() {
	            leader = leader + (target - leader ) / 10;
	            window.scrollTo(target,leader);  
	            // 去往页面中的某个位置
	            if(Math.floor(leader) == target || Math.floor(leader) + 1  == target )
	            {   
	                clearInterval(timer);
	                timer = null;
	            }
	        },20);
	    });
	}
};
// 初始化一个实例
$$own = new ownFrame();
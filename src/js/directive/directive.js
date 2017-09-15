var dir=angular.module("FlowerDirective",["flowerctl"]);
dir.directive("swiper",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/swiper.html",
		link:function(){
		//swiper 插件
  		var swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        loop : true,
        autoplayDisableOnInteraction: false
   		});
		},
		
	}
});

dir.directive("logintop",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/logintop.html",
		link:function(){
			
			$(window).scroll(function(){
				var scrolls = $(window).scrollTop();
				if(scrolls>0){
					$(".top-fix").css({
					"backgroundColor":"#fff",
				});
				}else{
				$(".top-fix").css({
					"backgroundColor":"transparent",
				});				
				}				
			})
		}
	}
});

dir.directive("midgoods",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/midgoods.html",
	}
});

dir.directive("jingxuan",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/jingxuan.html",
//		controller:	
	}
});

dir.directive("yongshenghua",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/yongshenghua.html",
	}
});


dir.directive("swiperbot",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/swiperbot.html",
		link:function(){
		var swiperbot = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        centeredSlides: true,   
        paginationType : 'custom',
        paginationElement : 'li',
        uniqueNavElements :false,
		paginationCustomRender: function (swiper, current, total) {
			
		},
		onSlideChangeEnd:function(swiperbot){
			num=swiperbot.activeIndex;
			$(".sw-head ul").find("li").eq(num).attr("class","sw2-active").siblings().attr("class","sw2-nactive");
		},
		
		});
		$(".sw-head ul li").click(function(){
			$(this).attr("class","");
			var num=$(this).index();		
			swiperbot.slideTo(num, 200, false);//切换到第一个slide，速度为1秒
			$(this).attr("class","sw2-active").siblings().attr("class","sw2-nactive");
		});
		
		$(window).scroll(function(){
			var scrolls = $(window).scrollTop();
			if(scrolls>=1000){
				$(".go-top").show();
			}else{
				$(".go-top").hide();
			}
			$(".go-top").click(function(){
				$(window).scrollTop(0);
			});
		})
		
		},
	}
});

dir.directive("searchbox",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/searchbox.html",
	}
});

dir.directive("goodstype",function(){
	return{
		resrict:"A",
		replace:true,
		controller:"goodsclass",
		templateUrl:"views/template/goodstype.html",
	}
});

dir.directive("detailsw",function(){
	
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/detailsw.html",
		link:function(){
		setTimeout(function(){
		var swiper=new Swiper(".swiper3",{
		pagination: '.swiper-pagination3',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        loop : true,
        autoplayDisableOnInteraction: false,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
			});
		},0);

	
		$(window).scroll(function(){
			var n=$(window).scrollTop();
			if(n>1000){
				$(".detail-top").css({
					"background":"#fff",
				});
			}else{
				$(".detail-top").css({
					"background":"rgba(255, 255, 255, 0.26)",
				});
			}
		});
		}
	}
});

dir.directive("advice",function(){
	return{
		resrict:"A",
		replace:false,
		templateUrl:"views/template/advice.html",
		
	}
});

dir.directive("register",function(){
	return{
		resrict:"A",
		replace:true,
		templateUrl:"views/template/register.html",
	}
});
;(function (doc, win) {

        var docEle = doc.documentElement,
                dpr=Math.min(win.devicePixelRatio, 3),
                scale = 1 / dpr,

                resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

        var metaEle = doc.createElement('meta');
        metaEle.name = 'viewport';
        metaEle.content = 'initial-scale=' + 1 + ',maximum-scale=' + scale;
        docEle.firstElementChild.appendChild(metaEle);
        var recalCulate = function () {
            var width = docEle.clientWidth;
            docEle.style.fontSize = 10 * (width / 375) + 'px';
        };
        recalCulate();

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);

var app=angular.module("flower",["ui.router","ngAnimate","flowerctl","FlowerDirective"]);
app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider.state("main",{
		url:"/main",
		views:{
			"main":{
				templateUrl:"views/main.html",
				controller:"start",
			}
		}
	})
	.state("shopcar",{
		url:"/shopcar",
		params:{'url':null},
		views:{
			"main":{
				templateUrl:"views/shopcar.html",
				controller:"shopctl",				
			}
			
		}
		
	})
	.state("main.home",{
		url:"/home",
//		params:{'url':null},
		views:{
			"content":{
				templateUrl:"views/home.html",
				controller:"homectl",
			}
		}
	}).state("main.class",{
		url:"/class",
		views:{
			"content":{
				templateUrl:"views/class.html",
				controller:["$rootScope","$state",function($scope,$state){
					$scope.url="main.class";
				}]
			}
		}
	}).state("main.my",{
		url:"/my",
//		params:{'url':null},
		views:{
				
			"content":{
				templateUrl:"views/my.html",
				controller:"my",
				
			}
		}
	}).state("detail",{
		url:"/detail",
		params:{'id':null},
		views:{
			"main":{
				templateUrl:"views/detail.html",
				controller:"detailctl",				
			}
		}
	}).state("passport",{
		url:"/passport",
		views:{
			"main":{
				templateUrl:"views/passport.html",
				controller:"passctl",
				
			}
		}
	}).state("passport.rphone",{
		url:"/rphone",
		views:{
			"regiscon":{
			templateUrl:"views/registerphone.html",
//			controller"validateCtrl",
			}
		}
	}).state("passport.remail",{
		url:"/remail",
		views:{
			"regiscon":{
				templateUrl:"views/registeremail.html",
			}
		}
	});
	
	$urlRouterProvider.otherwise("main");
	
}]);



var ctl=angular.module("flowerctl",[]);
ctl.controller("start",["$state","$scope","$rootScope","$location",function($state,sc,$rootScope,$location){
	if(!$rootScope.url){
		$state.go("main.home");
	}else{
//		$state.go("main.home");
	}


}]);

ctl.controller("homectl",["$scope","$rootScope","$http",function(sc,$rootscope,$http){
	$("body").scrollTop(0);
	$rootscope.url="main.home";
	sc.data=[];
	$http.get("data/flower.json").success(function (data){
		sc.data=data;
	});

	

	
}]);


ctl.controller("goodsclass",["$scope",function(sc){
	sc.name="商品分类";
	sc.typelist={
		hot:{
		topbg:"img/all_banner_teacher.jpg",
		toptitle:"9.10 	教师节	提前送祝福",				
		type:"tuijian",
		content:"这里是推荐",
		},		
		
		flower:{
		topbg:"img/all_cla_ban_business flower.jpg",
		toptitle:"浪漫告白·卡罗拉红玫瑰11枝 ¥235",
		type:"flower",
		content:"鲜花",
		},
		
		ysh:{
		type:"ysh",
		content:"永生花",
		topbg:"img/all_cla_ban_freflowers.jpg",
		toptitle:"永生花盒·维多利亚的花园 ¥329",
		},
		cake:{
			type:"cake",
			content:"蛋糕",
			topbg:"img/all_cla_ban_cake.jpg",
			toptitle:"美味蛋糕·让生活充满甜蜜",
			
		}		
	};
	sc.myclass="hot";	
	sc.content=sc.typelist.hot;
	sc.type=function(data){		
		sc.myclass=data;
		sc.content=sc.typelist[data];	
//		console.log(sc.content.content);
	}
	
}]);

ctl.controller("shopctl",["$scope","$state","$location","$rootScope",function(sc,$state,$location,$rootScope){
	sc.fl=false;
	$rootScope.url = $state.params.url;
	sc.changeshow=function(){
		if(sc.fl){
			sc.fl=false;
		}else{
			sc.fl=true;
		}
	}
	
	sc.goback=function(){
	$state.go($state.params.url);
	
//	window.history.go(-1);
	}
	sc.golook=function(){
		$state.go("main.home");
	}
}]);

ctl.controller("my",["$scope","$rootScope","$state",function(sc,$rootscope,$state){
	$rootscope.url="main.my";
	sc.goback=function(){
	window.history.go(-1);
	}	
}]);

ctl.controller("detailctl",["$scope","$state","$http",function(sc,$state,$http){
		$("body").scrollTop(0);
		console.log("controller");
	
	sc.backhome=function(){
//		$state.go("main.home",{},{reload:true});
		$state.go("main.home");
//		location.reload();

	}
	sc.back=function(){
		window.history.go(-1);
//		$(window).reload();
//		location.reload();

		
	}
	
	sc.data=[];
	$http.get("data/detail.json").success(function(data){
		sc.data=data;
		for(var i=0;i<sc.data.length;i++){
			if($state.params.id==sc.data[i].id){
				sc.content=sc.data[i];
			}
		}
	});
	sc.arr=["9010011.jpg","201709011121381963.jpg","201709011117442888.jpg","201709011117500763.jpg"];
	sc.lb1="9010011.jpg";
	sc.lb2="201709011121381963.jpg";
	sc.lb3="201709011117442888.jpg";
	sc.lb4="201709011117500763.jpg";
}]);
ctl.controller("passctl",["$scope","$state",function(sc,$state){
	$state.go("passport.rphone");
	sc.fl=false;
	sc.changeshow=function(){
		if(sc.fl){
			sc.fl=false;
		}else{
			sc.fl=true;
		}
	}
	sc.goback=function(){
	window.history.go(-1);
	}
	sc.golook=function(){
		$state.go("main.home");
	}
}]);


ctl.controller("validateCtrl",["$scope",function($scope){
//	   $scope.user = '';
    $scope.email = '';
    $scope.mobileRegx = "^1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\\d{8}$";
    $scope.login=function(){
    	console.log("123");
    }
}]);
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
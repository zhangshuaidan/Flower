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
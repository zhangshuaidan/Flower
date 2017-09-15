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



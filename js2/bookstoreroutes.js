//定义路由
var  bookstoreroute=angular.module("bookstoreroutes",["ngRoute"]);
			//config()配置函数
			//$routeProvider路由提供类 类似于$scope  他的下面有具体的方法
			bookstoreroute.config(function($routeProvider){
				//表示一旦路由请求指向根目录
				$routeProvider
				.when("/",{//处理对象
					templateUrl:"list.html",//指向的模板也就是页面
					controller:"bookstoreListerController" //控制器
				})
				//如果用户请求指向了带有id的页面 控制器也相应的发生改变
				// 格式就是这样/:id
				.when("/:id",{//处理对象
					templateUrl:"detail.html",//指向的模板也就是页面
					controller:"bookstoreDetailController" //控制器
				})
				//其他情况重新定向到根目录下
				.otherwise({
					redireTo:"/"
				});
			});
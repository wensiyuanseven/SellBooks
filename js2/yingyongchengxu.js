//bookstoreroutes 注入路由模块
		//bookstoreService 注入服务模块
		//bookstorefilte 注入过滤器模块
		//bookstoreControler注入控制器模块(控制页面)
			var  bookstoreApp=angular.module('bookstoreApp',["bookstoreroutes","bookstoreService","bookstorefilte","bookstoreControler","ngAnimate"]);
//模块功能 实现用户自定义服务
//注入服务    可以使系统更加简洁(把hyyp替换掉)
//这个服务可以帮助封装http 查找data文件下的json文件
//通过factory()定制自己的服务
var  Service=angular.module("bookstoreService",["ngResource"]);
Service.factory("bookstoreService",function($resource){
				//用$resource去获取资源文件
				//:id理解为资源占位符 它可以获得a,b,c,d books 的json文件
				return $resource("data/:id.json");
});
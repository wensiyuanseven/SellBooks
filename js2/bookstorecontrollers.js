var  bookstoreControler=angular.module("bookstoreControler",[]);
//controller控制器     控制器名字bookstoreListerController   通过$scope传递数据
			//依赖注入
			//传入angular自带的$http对象 从外部注入进来
			//通过get()方法远程调用json文件 如果调用成功success()返回的json数据存放在resp中
			//bookstoreService 服务 替换http 
			bookstoreControler.controller('bookstoreListerController',function($scope,bookstoreService){
				//id:"books"与服务相对应 就是得到了books.json文件
				$scope.books=bookstoreService.get({id:"books"});
				//1在列表框中默认绑定name字段来搜索
				$scope.select='name';
			});
			//detail详细
			//$routeParams 获得跳转页面的详细信息也就是斜杠/后面的路由
			bookstoreControler.controller('bookstoreDetailController',function($scope,bookstoreService,$routeParams){
				//与上面的服务一样 id:$routeParams.id与服务相对应 就是得到了a,b,c,d.json文件
				$scope.book=bookstoreService.get({id:$routeParams.id});
				//这个地方只能写id 谁也不指向 就是这样写的  
				//如果要跳转页面不同 只能改list.html里面的超链接{{}}
				//$routeParams.id相似于$scope.id
				//路由传入的$routeParams.id相当于a,b,c,d
				//$http.get("data/"+$routeParams.id+".json")  根据传入的参数获取具体格式data文件下的每一个json数据
				//$http.get("data/"+$routeParams.id+".json").success(function(resp){
				//resp可以返回单个的json数据
				//book是一个对象
				//$scope.book=resp;
				//cover封面 获得用户传进来封面 也就是a,b,c,d
				$scope.cover=$routeParams.id; //与下面的定制函数相关联
				//自定义函数   与ng-click()一块使用 
				//例如如果用户点击a   a将会被传入当前函数 并且赋值给cover   和cover进行绑定  
				$scope.setCover=function(id){
					$scope.cover=id;
				};
			});
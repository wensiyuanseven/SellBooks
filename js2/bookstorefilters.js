//自定义过滤器
			//定义检查状态的过滤器
			var bookstorefilte=angular.module("bookstorefilte",[]);
			bookstorefilte.filter("checkStatueFilter",function(){
				return function(input){  //input判断用户输入的条件也就是json数据定义的 true和false
					return input=="true" ?  "正常出售" : "暂无库存";
				};
			});
			//定义标签样式的过滤器
			bookstorefilte.filter("getStatueFilter",function(){
				return function(input){
					return input=="true" ? "btn-success" : "btn-danger";
				};
			});
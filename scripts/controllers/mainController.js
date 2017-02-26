/*应用程序主控制器*/
 angular
 	.module('controller.module.main',[
 		'service.module.baseService',
 		])
 	.controller('mainController', [
 		'$scope',
 		'$routeParams',
 		'$window',
 		'$location',
 		'$state',
 		'$stateParams',
 		'baseService',
 		 function($scope,$routeParams,$window,$location,$state,$stateParams,baseService){

 		
		var storage = $window.localStorage;

 		// 商品数据
		var goods = baseService.getGoods();
		// main区域数据
		$scope.main =  baseService.getMain();	
		
		// 主页服饰运动滑动图片
		$scope.slideImage =  function (isRight,id) {
			baseService.slideImage(isRight,id,$scope);
		};
		
		// 获取是否登录标志
		isLogin = baseService.getStorage('isLogin','');
		if(isLogin === '') {
			var isLogin = false;
		}
		baseService.saveStorage('isLogin',isLogin);

        $scope.users = baseService.getStorage('users_List',[]);
		$scope.user = baseService.getStorage('currentUser',{});
		baseService.saveStorage('currentUser',$scope.user);

		

		var carts = baseService.getStorage('carts',[]);
		var cart = carts[$scope.user.cartId];
		var orders = baseService.getStorage('orders',[]);
		var order = orders[$scope.user.orderId];
		var collections = baseService.getStorage('collections',[]);
		var collection = collections[$scope.user.collectionId];
		
		$scope.addToCart =  function(id) {
			baseService.add(id,cart,carts,'carts');
			baseService.returnTop();
		}

		$scope.addToOrder =  function(id) {
			baseService.add(id,order,orders,'orders');
			baseService.returnTop();
		}
		$scope.addToCollection =  function(id) {
			baseService.add(id,collection,collections,'collections');
			baseService.returnTop();
		}


		// 如果用户登录了，刷新时候不显示注册登录模块
		if(typeof $scope.user.id !== 'undefined' ) {
			angular.element('.check').hide()
			angular.element('.welcome').css('display','block');
			angular.element('.account').html($scope.user.name);
		}

		// 注册登录模块
 		if($location.$$path == '/login' || $location.$$path == '/register') {
			
	        var user = baseService.getUserTemplate();
			$scope.showWindow = true;

			// 初始化check模板数据模型
	 		if($location.$$path == '/register') {
	 			$scope.model = baseService.getCheck().register;
	 			user.repeat_password = '';
	 		}else if ($location.$$path == '/login') {
	 			$scope.model = baseService.getCheck().login;
	 			$scope.checked = false;
	 		}

	 		// isRegister 确定是登录还是注册
	 		var isRegister = $scope.model.type === 'register' ? true : false;	

			// 自动登录逻辑	
	 		if(!isRegister) {	
	 			// 遍历找到自动登录的对象
				var  userAuto = {};
				for(var i = 0; i < $scope.users.length; i++) {
					if($scope.users[i].isAutoLogin === true) {
						userAuto = $scope.users[i];
						$scope.checked = true;
					}
				}	
	 			if(userAuto.isAutoLogin) {
	 				var lable = document.getElementById('check');
	 				// console.log(angular.element(lable).children().children('#login_ui').children('.import').children());
					// 将用户名和密码输入框值改为该用户名和密码
	 				angular.element('#username').val(userAuto.name);
	 				angular.element('#password').val(userAuto.password);
	 			}
	 		}

	 		$scope.autoLogin = function() {
	 			// 必须当前的用户名密码格式正确，并且值存在
	 			for(var i = 0;i < user.succ.length; i++) {
						if(user.succ[i] == false) {
							console.log(angular.element('#username'));
							tipChange('error',$scope,false);
							return ;
						}
				}
				for(var key in user) {
						if(user[key] == '') {
							console.log('请填写用户名');
							tipChange('error',$scope,false);
							return ;	
						}
				}
				// 控制自动登录标志
				for(var i = 0; i < $scope.users.length; i++) {
					if(user.name === $scope.users[i].name) {
						if(user.password === $scope.users[i].password) {

							// 把其他用户的isAutoLogin设置为false
							for(var j = 0; j < $scope.users.length; j++) {
								$scope.users[j].isAutoLogin = false;
							}
							$scope.users[i].isAutoLogin = true;
							break ;
						}
					}	
				}
				save();
	 		}

	 		// 提交数据
			$scope.submitData = function() {
				var isSubmit = true;
				// 判断是否满足填写条件
				baseService.judgeFillCondition(user,$scope,isSubmit);
				if(isRegister) {
					// 满足注册条件将值保存
					user = baseService.saveRegisterUser(user,$scope,isSubmit);
					setTimeout(function(){
						$state.go('login');
					},1000);
				}else {
					// 判断账号密码
					console.log(user);
					baseService.judgeAccountPassword(user,$scope,isSubmit);
				}
			}

			function tipChange(index,tipType,$scope,isSubmit) {
				// 如果是提交提示需要重新调整一下参数的值
				if(typeof arguments[0] == 'string') {
					isSubmit = arguments[2];
					$scope = arguments[1];
					tipType = arguments[0];
					index = undefined;
				}
				if(isSubmit) {
					$scope.model.submit.tip.type = tipType;
					$scope.model.submit.tip.result = $scope.model.submit.tip[tipType];
				}else if(typeof index == 'number') {
					$scope.model.input[index].tip.type = tipType;
					$scope.model.input[index].tip.result = $scope.model.input[index].tip[tipType];
				}
				
			}
			// 格式验证函数
			$scope.inspectFormat = function(type,value,index) {
				baseService.inspectInputFormat(user,type,value,index,$scope,isRegister);
			}

		}else if($location.$$path.substring(0,7) == '/search') {
 			var antistop =  decodeURIComponent($stateParams.antistop);

 			// 过滤数组
 			$scope.antistop = antistop;
			$scope.goods = goods;
			
			

 		}else if($location.$$path.substring(0,7) == '/detail')　{



	 		var goodsId = $stateParams.id;
			// 根据id拿到商品的数据赋值给$scope
			$scope.goods = goods[goodsId];

			// 商品旋转图
			$scope.transPosition = false;
			// 控制当前small图片和下面第三个一样
			var currentImage = 2;
			$scope.changePosition = function() {
				$scope.transPosition = true;
				var wrap = angular.element("#wrap");  
			    var arrow = angular.element("#arrow")[0];
			    var slider = angular.element("#slide");
			    var lis = angular.element("#slide li");  

			    // 鼠标经过显示和隐藏 左右两个箭头
		        $$own.$animate(arrow,{'opacity':100});
			    wrap.on('mouseleave',function() {
			        $$own.$animate(arrow,{'opacity':0});
			    });
			    //  两个按钮点击事件
			    // 函数节流用来控制函数节奏的 变量
			    var execteFlag = true;
			    if(execteFlag == true)
                {
                    change(true);
                    execteFlag = false;  
                }

				// 控制图片移动方向
				$scope.moveImage = function(direction) {
					if(direction == "prev")
		            {
		                if(execteFlag == true)
		                {
		                    change(false);
		                    execteFlag = false;
		                }
		            }
		            else
		            {
		                if(execteFlag == true)
		                {
		                    change(true);
		                    execteFlag = false;
		                }
		            }
				}

				// 点击图像
				$scope.changeImage = function(index) {
					// 遍历找出当前图片换到small
					$scope.goods.magnifyImage = $scope.goods.images[index];
					var flag = index > currentImage;
					circleCount = flag ? index - currentImage : currentImage - index;
					for(var i = 0;i < circleCount;i++) {
						change(flag);
					}
			
				}
			    function change(flag) {
			        if(flag)
			        {
					    currentImage = currentImage >= 4 ? (currentImage = 0) : currentImage + 1;
			            $scope.goods.position.unshift($scope.goods.position.pop());
			        }
			        else
			        {			   			    		
					    currentImage = currentImage <= 0 ? (currentImage = 4) : (currentImage - 1);
			            $scope.goods.position.push($scope.goods.position.shift());
			        }
					$scope.goods.magnifyImage = $scope.goods.images[currentImage];
			        for(var i=0;i<$scope.goods.position.length; i++)
			        {
		            	
			            $$own.$animate(lis[i],{
			                width: $scope.goods.position[i].width,
			                top: $scope.goods.position[i].top,
			                left: $scope.goods.position[i].left,
			                opacity:$scope.goods.position[i].opacity,
			                zIndex:$scope.goods.position[i].z
			            },function(){ 
			            	execteFlag = true;
			            });
			        }
			    }
			}

		    

			// // 放大主图
			$scope.showBig = false;
			$scope.magnifyMainImage = function() {
				/* 放大镜效果*/

				$scope.showBig = true;
				var small = angular.element('.small');  
				var big =   angular.element('.amplification .big');
				var mask = angular.element('.small .mask');
				var bigImage = angular.element('.big img');
				//  鼠标在small内移动
				var x = 0;
				var y = 0;
				small.on('mousemove',function(event) {
				    var event = event || window.event;
				     x = event.clientX - angular.element(this).parent().offset().left - mask[0].offsetWidth /2;
				     y = event.clientY - angular.element(this).parent().offset().top - mask[0].offsetHeight /2;
				     
				     if(x < 0)
				     {
				         x = 0;
				     }
				     else if (x > 200)
				     {
				     	x = 200;
				     }

				     if(y<0)
				     {
				        y = 0;
				     }
				     else if (y > 200) {
				      	y = 200;
				     }
				     mask.css('top',y + 'px');
				     mask.css('left',x + 'px');
				     if(x > small.innerWidth() - mask.innerWidth())
				     {
				         x = small.innerWidth() - mask.innerWidth();
				     }
				     if(y > small.innerHeight() - mask.innerHeight())
				     {
				         y = small.innerHeight() - mask.innerHeight();
				     }
				     bigImage.css('left',-x *  bigImage[0].offsetWidth /small[0].offsetWidth + 'px');
				     bigImage.css('top',-y *  bigImage[0].offsetHeight /small[0].offsetHeight + 'px');
				});			
			}
			//隐藏大图
			$scope.hideBigBox = function() {
				$scope.showBig = false;
			}

			// 选择当前尺寸和分类
			$scope.selectCurrent = function(index,mold,type) {
				var className = mold.substring(1) + ' ' + type;
				angular.element(mold).removeClass(type);
				angular.element(mold)[index].setAttribute('class',className);
				angular.element(mold)[index].setAttribute('index',index);
			}

			// 改变数量
			$scope.changeCount = function(isPlus) {
				var count = $scope.goods.count;
				count = isPlus ? count + 1 : count - 1;
				count = count <= 0 ?  count = 1 : count;
				$scope.goods.count =  count; 				
			}

			// 评论区域
			$scope.selectPage = function(id) {
				// 实现选择跳转
				angular
					.element('#' + id)
					.parent()
					.parent()
					.children()
					.removeClass('current');
				angular
					.element('#' + id)
					.parent()
					.addClass('current');

				// 实现详情页和评论页面的切换
				var operation = id === 'babyDetail' ?  'removeClass' : 'addClass';

				angular.element('.baby-details')[operation]('hide');
				angular.element('.cumulative-comments')[operation]('show');

				var inputs = angular.element('.inputs');
				angular.element(inputs[0]).attr('checked','1');

				// 显示各种评论的数目
				var options =  $scope.goods.options;
				var comments = $scope.goods.comments;
				options[0].count = comments.length;
				for(var i=0;i<options.length;i++) {
					for(var j=0; j < comments.length;j++) {
						var type = options[i].name+'！';
						switch(type) {
							case '好评！': increaseCount(type);
							break;
							case '中评！': increaseCount(type);
							break;
							case '差评！': increaseCount(type);
							break;
							case '追评！': increaseCount(true);
							break;
							default:;
						}
						function increaseCount(type) {
							if(typeof type === 'boolean') {

								if(comments[j][0].isAppend === type) {
									options[i].count++;
								}
							}else {
								if(comments[j][0].level === type) {
									options[i].count++;
								}
							}
						}	
					}
				}

				// 选择当选框
				$scope.currentRadio = function(index) {
					// 修改当前选中状态
					var inputs = angular.element('.inputs');
					inputs.removeAttr('checked');
					angular.element(inputs[index]).attr('checked','1');

					// 同步选中评论列表
					
					
					var comments = $scope.goods.comments;
					switch (index) {
						case 0: 
							disChange()
							break;
						case 1: 
							disChange('isAppend',true)
							break;
						case 2: 
							disChange('level','好评！')
							break;
						case 3: 
							disChange('level','中评！')
							break;
						case 4: 
							disChange('level','差评！')
							break;
						default: ;
					}
					$scope.goods.comments = comments;
					function disChange(flag,value) {
						console.log(11);
						for(var i = 0; i < comments.length; i++) {
							comments[i][0].isShow = false;
							if(comments[i][0][flag] == value) {
								comments[i][0].isShow = true;
							}
						}
					}

					// 隐藏追评论模块
					
					angular.element('.evaluation').show();
					angular.element('.append-evaluation').hide();
				}

				// 点击显示追加评论模块
				angular.element('.append-evaluation').hide();
				$scope.appendComment = function(index) {
					angular.element('.evaluation').hide();
					angular.element('.append-evaluation').show();
					console.log(angular.element('#mask'));
					angular.element('#mask').addClass('mask');
				}
				// 点击关闭追评模块
				$scope.closeAppendComment = function() {
					angular.element('.evaluation').show();
					angular.element('.append-evaluation').hide();
					angular.element('#mask').removeClass('mask');
				}

				// 发表评论
			 	$scope.publishedEvaluation  = function () {
			 		var data = {
          			level: '中评！',
          			isApeend: false,
          			isShow: true,
          			commentContent: [{
          				text: '按实际贷款哈巴是大气的撒',
		          		time: '2016年8月17日 08:30',
		          		images: [
		          			'../images/1.jpg',
		          			'../images/2.jpg',
		          			'../images/3.jpg',
		          		]
          			}]
          		};
       			// console.log('发表');
       			// var content =  $scope.detail.describe.comment.totalComment.summary.content;
       			// content.unshift(data);
       			// console.log(content);
			 	}

    			$scope.selectImages = function() {
    				angular
    					.element('#uploadImage')
    					.on('click',function(){
    						$scope.detail.describe.comment.totalComment.publishInfo.mainBody[0].showImage.images[0] = angular.element('#uploadImage').val();
    					})
    					.trigger('click')
    					.on('change',function(){
    						var dataUrl = document.getElementById('uploadImage').getAsDataURL();
						 	console.log(angular.element(dataUrl));
							$scope.detail.describe.comment.totalComment.publishInfo.mainBody[0].showImage.images[0] = angular.element('#uploadImage').val();    								 	
							console.log($scope.detail.describe.comment.totalComment.publishInfo.mainBody[0].showImage.images);
						 });;
    			}
			}
		}else if(isLogin) {
		// 已经登录可以显示购物车,收藏夹,我的订单
			var status = 0;
			if(
				$location.$$path.substring(0,5) == '/cart' ? status = 1 : status = 0 || 
				$location.$$path.substring(0,6) == '/order' ? status = 2 : status = 0 ||
				$location.$$path.substring(0,11) == '/collection' ?  status = 3 : status = 0 
			) {
				// 统一数据变化点
				var data = {
					cart: {
						typeKey: 'cart',
						type: cart,
						typesKey: 'carts',
						types: carts,
						theme: '商品'
					},
					order: {
						typeKey: 'order',
						type: order,
						typesKey: 'orders',
						types: orders,
						theme: '订单'
					},
					collection: {
						typeKey: 'collection',
						type: collection,
						typesKey: 'collections',
						types: collections,
						theme: '收藏'
					},
				};
				switch(status) {
					case 1: modules = data.cart;
						break;
					case 2: modules = data.order;
						break;
					case 3: modules = data.collection;
						break;
					default:;
				}
				// 判断用户原来是否有购物车，没有增加一个购物车
				baseService.bindModule($scope,modules.typeKey,modules.typesKey,modules.types);

				$scope[modules.typeKey]= modules.types[$scope.user[modules.typeKey + 'Id']];
				$scope.goods = baseService.getModuleGoods($scope[modules.typeKey].goodsId);	

				// 提示用户购物车，订单，收藏夹是否有记录
				baseService.tipRecord($scope,modules.typeKey);

				// 选择单个商品
				$scope.selectSingle = function(index) {
					baseService.selectSingle(index,$scope,modules.typeKey);
				}
				// 选择所有商品
				$scope.selectAll = function() {
					baseService.selectAll($scope,modules.typeKey);
					baseService.caculateRental($scope,modules.typeKey);
				}

				// 改变商品数量
				$scope.changeOneCount = function(index,isPlus) {
					baseService.changeQuantity(index,isPlus,modules.typeKey,modules.typesKey,$scope);
				}

				// 显示删除提示框
				$scope.showPrompt = function(index) {
					baseService.showPrompt(index,$scope,modules.typeKey,modules.theme);
				}
				// 隐藏删除提示框
				$scope.hidePrompt = function() {
					baseService.hidePrompt($scope,modules.typeKey);
				}

				// 删除单个商品
				$scope.deleteSingle = function() {
					baseService.deleteSingle($scope,modules.typeKey,modules.typesKey,modules.type,modules.types);
				}

				// 删除选中
				$scope.deleteSelected = function (index) {
					baseService.deleteSelected($scope,modules.typeKey,modules.typesKey,modules.type,modules.types);
				}

				//删除全部
				$scope.deleteAll = function() {
					baseService.deleteAll($scope,modules.typeKey,modules.type,modules.typesKey,modules.types);
				}
			}
 		}else if($location.$$path != '/') {
 			$state.go('login');
 		}
 		
 	}]);
 	

				
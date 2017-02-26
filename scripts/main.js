'use strict';
(function (window,angular) {
    // 接受收$$own自定义对象
    $$own = window.$$own;
    // 跳转到路由    
    console.log(window.location.hash);

    // 启动轮播图
    $('.carousel').carousel();

    /*侧边导航*/
    // 统一侧栏数据变化点
    var $sides = {
        $goTop: {
            $selector: $('#return-top'),
            start: -100,
        },
        $costumeSport: {
            $selector: $('#costume_sport'),
            start: 400,
            end: 800,
        },
        $homeDigital: {
            $selector: $('#home_digital'),
            start: 800,
            end: 1300,
        },
        $hotRecommend: {
            $selector: $('#hot-recommend'),
            start: 1300,
            end: 1600
        },
    }
    // 页面初始化时隐藏回到顶部按钮
    $sides.$goTop.$selector.hide() ;

    // 控制侧栏样式
    window.onscroll = function() {
        for(var key in $sides) {
            sideBarStyle($sides[key].$selector,$sides[key].start,$sides[key].end);
        }
    }
    function sideBarStyle($selector,start,end){
        var pageTop = $$own.$scroll().top;
        if(typeof end === 'undefined') {
            start = start + 100;
            pageTop > start ? $selector.show() : $selector.hide();
        }else {
            pageTop > start && pageTop < end ? $selector.addClass('active') : $selector.removeClass('active');
        }
    }

    // 页面滚动到特定位置
    for(var key in $sides) {
        $$own.$scrollToTarget($sides[key].$selector,$sides[key].start + 100);
    }

    // 退出登录
    $('.exist').on('click',function(){
        $('.check').show();
        $('.welcome').css('display','none');
        var storage = window.localStorage;
        storage['isLogin'] = JSON.stringify(false);
        storage['currentUser'] = JSON.stringify({});
    });

    // 输入框按enter键实现搜索
    $('#searchValue').on('input',function(e){
        $('#search').trigger('click');    
    });

    //  搜索
    $('#search').on('click',function() {
        if($('#searchValue').val() === '') {
            window.location.hash = '#/';
        }else {
            window.location.hash = '#/search/' + encodeURIComponent($('#searchValue').val()) + '?' + new Date().getTime();

        }
    });


    // 注册angular主模块
	angular
		.module('app',['controller.module.main','ngRoute','ngResource','ui.router'])
		.config(function($routeProvider, $locationProvider,$stateProvider,$urlRouterProvider){
                $stateProvider
                .state('cart',{
                    url: '/cart/:id?',
                    views: {
                        'cartView': {
                            templateUrl: 'temp/cart.html',
                            controller: 'mainController'
                        },
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }
                        
                    }
                })
                .state('collection',{
                    url: '/collection/:id?',
                    views: {
                        'collectionView': {
                            templateUrl: 'temp/collection.html',
                            controller: 'mainController'
                        },
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }
                        
                    }
                })
                .state('order',{
                    url: '/order/:id?',
                    views: {
                        'orderView': {
                            templateUrl: 'temp/order.html',
                            controller: 'mainController'
                        },
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }
                        
                    }
                })
                .state('search',{
                    url: '/search/:antistop?',
                    views: {
                        'searchView': {
                            templateUrl: 'temp/search.html',
                            controller: 'mainController'
                        }
                        
                    }
                })
                .state('detail',{
                    url: '/detail/:id?',
                    views: {
                        'detailView': {
                            params: {'id': null},
                            templateUrl: 'temp/detail.html',
                            controller: 'mainController'
                        }    
                    }
                })
                .state('register',{
                    url: '/register',
                    views: {
                        'registerView': {
                            templateUrl: 'temp/check.html',
                            controller: 'mainController'
                        },
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }   
                    }
                })
                .state('login',{
                    url: '/login',
                    views: {
                        'loginView': {
                            templateUrl: 'temp/check.html',
                            controller: 'mainController'
                        },
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }    
                    }
                })
                .state(' ',{
                    url: '/',
                    views: {
                        'mainView': {
                            templateUrl: 'temp/main.html',
                            controller: 'mainController'
                        }    
                    }
                });

                $urlRouterProvider.when('','/');
	});
})(window,angular);
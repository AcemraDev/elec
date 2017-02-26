/**
 * 基础服务
 */
(function(){
	angular
		.module('service.module.baseService',[])
		.service('baseService',['$window','$state',function($window,$state){
			
			/**
			 * 公共基础部分
			 */
			var storage = $window.localStorage;
			
			//清空用户数据
			// storage['users_List'] = JSON.stringify([]);
			// storage['currentUser'] = JSON.stringify({});
			// storage['collections'] = JSON.stringify([]);
			// storage['carts'] = JSON.stringify([]);
			// storage['orders'] = JSON.stringify([]);
			// storage['isLogin'] = JSON.stringify(false);

			// 获取所有商品
			var goods = [
					{
					    id: 0,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '墨麦客男装春季衣服男士针织长袖t恤男韩版修身翻领polo打底衫潮',
					    descibe: '墨麦客男装春季衣服男士针织长袖t恤男韩版修身翻领polo打底衫潮发布价 149 多色可选 纯色翻领',
					    origin: 149,
					    discount: 69,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods1_2.jpg',
					        '../images/goods1_3.jpg',
					        '../images/goods1_4.jpg',
					        '../images/goods1_5.jpg',
					    ],
					    magnifyImage: '../images/goods1_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 1,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods2_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods2_3.jpg',
					        '../images/goods2_4.jpg',
					        '../images/goods2_5.jpg',
					    ],
					    magnifyImage: '../images/goods2_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 2,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '秋冬季飞织运动鞋男休闲鞋韩版情侣板鞋潮流阿甘男鞋学生跑步鞋子',
					    descibe: '秋冬季飞织运动鞋男休闲鞋韩版情侣板鞋潮流阿甘男鞋学生跑步鞋子',
					    origin: 350,
					    discount: 78,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['40','41','42','43','44'],
					    count: 1,
					    images: [
					        '../images/goods3_1.jpg',
					        '../images/goods3_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods3_4.jpg',
					        '../images/goods3_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 3,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '香港代购春季真皮男鞋英伦风磨砂皮鞋男士商务休闲鞋复古软底潮鞋',
					    descibe: '香港代购春季真皮男鞋英伦风磨砂皮鞋男士商务休闲鞋复古软底潮鞋',
					    origin: 310,
					    discount: 129,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['40','41','42','43','44'],
					    count: 1,
					    images: [
					        '../images/goods4_1.jpg',
					        '../images/goods4_2.jpg',
					        '../images/goods4_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods4_5.jpg',
					    ],
					    magnifyImage: '../images/goods4_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 4,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '女包2016新款休闲斜挎包英伦复古包单肩包女士手提包牛皮小猪包包',
					    descibe: '女包2016新款休闲斜挎包英伦复古包单肩包女士手提包牛皮小猪包包',
					    origin: 1499,
					    discount: 198,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods5_1.jpg',
					        '../images/goods5_2.jpg',
					        '../images/goods5_3.jpg',
					        '../images/goods5_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods5_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 5,
					    count: 1,
					    slug: '新款休闲斜挎复古',
					    title: '包包2017新款迷你贝壳包牛皮单肩斜跨包小包包复古女包休闲手提包',
					    descibe: '包包2017新款迷你贝壳包牛皮单肩斜跨包小包包复古女包休闲手提包',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods6_1.jpg',
					        '../images/goods6_2.jpg',
					        '../images/goods6_3.jpg',
					        '../images/goods6_4.jpg',
					        '../images/goods6_5.jpg',
					    ],
					    magnifyImage: '../images/goods6_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 6,
					    count: 1,
					    slug: '欧货潮系 新款女装',
					    title: '欧洲站2017春秋欧货潮两件套新款女装秋冬款连衣裙套装裙子中长款',
					    descibe: '欧洲站2017春秋欧货潮两件套新款女装秋冬款连衣裙套装裙子中长款',
					    origin: 235,
					    discount: 79,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods7_1.jpg',
					        '../images/goods7_2.jpg',
					        '../images/goods7_3.jpg',
					        '../images/goods7_4.jpg',
					        '../images/goods7_5.jpg',
					    ],
					    magnifyImage: '../images/goods7_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 7,
					    count: 1,
					    slug: '简约现代U型组合',
					    title: '支持定制尺寸颜色，百搭布艺沙发，线上线下畅销款型“品质工厂”验证商家，让您买退无忧。',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['两件套','三件套','全套'],
					    count: 1,
					    images: [
					        '../images/goods8_1.jpg',
					        '../images/goods8_2.jpg',
					        '../images/goods8_3.jpg',
					        '../images/goods8_4.jpg',
					        '../images/goods8_5.jpg',
					    ],
					    magnifyImage: '../images/goods8_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 8,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '布艺沙发北欧简约现代可拆洗小户型麻布日式沙发客厅转角组合',
					    descibe: '专注品质北欧家具10年，麻布、超柔绒布、全可拆洗加密封板，沙发耐坐绝对不会出现坍塌现象45D高密度海绵，坐垫不易变形',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods9_1.jpg',
					        '../images/goods9_2.jpg',
					        '../images/goods9_3.jpg',
					        '../images/goods9_4.jpg',
					        '../images/goods9_5.jpg',
					    ],
					    magnifyImage: '../images/goods9_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 9,
					    count: 1,
					    slug: '实木吧台欧式酒吧',
					    title: '竹璟实木吧台椅创意高椅欧式酒吧椅子木前台复古吧凳简约高脚凳子',
					    descibe: '竹璟实木脚架 多省包邮 多色可选',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods10_1.jpg',
					        '../images/goods10_2.jpg',
					        '../images/goods10_3.jpg',
					        '../images/goods10_4.jpg',
					        '../images/goods10_5.jpg',
					    ],
					    magnifyImage: '../images/goods10_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 10,
					    count: 1,
					    slug: '北欧椅子宜家餐椅',
					    title: '北欧椅子现代简约带扶手靠背实木沙发椅子电脑椅布艺座椅宜家餐椅',
					    descibe: '真材实木，透气棉麻，注重品质，完美细节',
					    origin: 369,
					    discount: 199,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods11_1.jpg',
					        '../images/goods11_2.jpg',
					        '../images/goods11_3.jpg',
					        '../images/goods11_4.jpg',
					        '../images/goods11_5.jpg',
					    ],
					    magnifyImage: '../images/goods11_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 11,
					    count: 1,
					    slug: '创意时尚简约瓷器',
					    title: '陶瓷创意时尚白色花瓶现代简约瓷器客厅摆件家居家饰干花花器插花',
					    descibe: '限时优惠 精选优质陶瓷 布艺蝴蝶结 多尺寸，赠送运费险，无忧购物！',
					    origin: 269,
					    discount: 135,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods12_1.jpg',
					        '../images/goods12_2.jpg',
					        '../images/goods12_3.jpg',
					        '../images/goods12_4.jpg',
					        '../images/goods12_5.jpg',
					    ],
					    magnifyImage: '../images/goods12_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 12,
					    count: 1,
					    slug: '中式家居仿古瓷器',
					    title: '景德镇陶瓷器仿古青花瓷花瓶插花现代新中式家居客厅装饰品摆件',
					    descibe: '景德镇制 纯手工拉坯 买就送底座',
					    origin: 169,
					    discount: 39,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['大','中','小'],
					    count: 1,
					    images: [
					        '../images/goods13_1.jpg',
					        '../images/goods13_2.jpg',
					        '../images/goods13_3.jpg',
					        '../images/goods13_4.jpg',
					        '../images/goods13_5.jpg',
					    ],
					    magnifyImage: '../images/goods13_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 13,
					    count: 1,
					    slug: '魅蓝Note5全网通',
					    title: '【裸机999元开售】Meizu/魅族 魅蓝Note5全网通公开版智能手机',
					    descibe: '官方标配版 限量开售',
					    origin: 1499,
					    discount: 999,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['全网通','电信机','移动机'],
					    count: 1,
					    images: [
					        '../images/goods14_1.jpg',
					        '../images/goods14_2.jpg',
					        '../images/goods14_3.jpg',
					        '../images/goods14_4.jpg',
					        '../images/goods14_5.jpg',
					    ],
					    magnifyImage: '../images/goods14_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 14,
					    count: 1,
					    slug: 'iPhone 7 正品国行',
					    title: '[未激活]Apple/苹果 iPhone 7 全网通4G手机正品国行',
					    descibe: '送壳膜 未激活 全国联保',
					    origin: 6500,
					    discount: 5080,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['全网通','电信机','移动版'],
					    count: 1,
					    images: [
					        '../images/goods15_1.jpg',
					        '../images/goods15_2.jpg',
					        '../images/goods15_3.jpg',
					        '../images/goods15_4.jpg',
					        '../images/goods15_5.jpg',
					    ],
					    magnifyImage: '../images/goods15_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 15,
					    count: 1,
					    slug: 'SimDog sim3.0',
					    title: 'SimDog sim3.0 【森狗】入耳式手机耳机有线耳麦通用带麦运动耳机',
					    descibe: '支持加减音 支持耳麦通话 支持运动式',
					    origin: 35,
					    discount: 19,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标配','加外壳'],
					    count: 1,
					    images: [
					        '../images/goods16_1.jpg',
					        '../images/goods16_2.jpg',
					        '../images/goods16_3.jpg',
					        '../images/goods16_4.jpg',
					        '../images/goods16_5.jpg',
					    ],
					    magnifyImage: '../images/goods16_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 16,
					    count: 1,
					    slug: '无线蓝牙头戴耳机',
					    title: '【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机',
					    descibe: ' 免费保修一年 全国联保',
					    origin: 3500,
					    discount: 2599,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['加线','加耳线'],
					    count: 1,
					    images: [
					        '../images/goods17_1.jpg',
					        '../images/goods17_2.jpg',
					        '../images/goods17_3.jpg',
					        '../images/goods17_4.jpg',
					        '../images/goods17_5.jpg',
					    ],
					    magnifyImage: '../images/goods17_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 17,
					    count: 1,
					    slug: '超薄太阳能充电宝',
					    title: '超薄太阳能充电宝20000M毫安聚合物移动电源三星苹果华为手机通用',
					    descibe: '超薄机身，智能数显，聚合物电芯，安全可靠，手机通用',
					    origin: 149,
					    discount: 79,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['2000毫安','5000毫安','10000毫安'],
					    count: 1,
					    images: [
					        '../images/goods18_1.jpg',
					        '../images/goods18_2.jpg',
					        '../images/goods18_3.jpg',
					        '../images/goods18_4.jpg',
					        '../images/goods18_5.jpg',
					    ],
					    magnifyImage: '../images/goods18_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 18,
					    count: 1,
					    slug: 'iPhone6加长数据线',
					    title: '倍思 iPhone6数据线6s苹果5加长5s手机6Plus充电线器六7P认证ipad',
					    descibe: '快充不弹窗 充电快2倍 有问题免费换新',
					    origin: 90,
					    discount: 28,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['2m','2.5m'],
					    count: 1,
					    images: [
					        '../images/goods19_1.jpg',
					        '../images/goods19_2.jpg',
					        '../images/goods19_3.jpg',
					        '../images/goods19_4.jpg',
					        '../images/goods19_5.jpg',
					    ],
					    magnifyImage: '../images/goods19_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 19,
					    count: 1,
					    slug: '韩版加绒牛仔裤',
					    title: '韩版加绒牛仔裤男秋冬款弹力小脚裤男裤修身青少年长裤子男装靴裤',
					    descibe: '实拍图片，不满退货,支持正品',
					    origin: 189,
					    discount: 49,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['27','28','29','30','31','32'],
					    count: 1,
					    images: [
					        '../images/goods20_1.jpg',
					        '../images/goods20_2.jpg',
					        '../images/goods20_3.jpg',
					        '../images/goods20_4.jpg',
					        '../images/goods20_5.jpg',
					    ],
					    magnifyImage: '../images/goods20_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 20,
					    count: 1,
					    slug: '园艺新品多肉植物',
					    title: '子兰园艺多肉植物萌肉肉景天科上色状态控型卧室吸甲醛防辐射绿',
					    descibe: '多肉批发，价格优势',
					    origin: 9,
					    discount: 3.8,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['直径4-5cm'],
					    count: 1,
					    images: [
					        '../images/goods21_1.jpg',
					        '../images/goods21_2.jpg',
					        '../images/goods21_3.jpg',
					        '../images/goods21_4.jpg',
					        '../images/goods21_5.jpg',
					    ],
					    magnifyImage: '../images/goods21_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 21,
					    count: 1,
					    slug: 'Parnis/柏尼时手表',
					    title: 'Parnis/柏尼时 海鸥机芯/飞行系列 自动机械表 男士手表 休闲表',
					    descibe: '时光传承经典，大尺寸表盘指的是42mm直径以上。这股源于欧美的大表盘风格流行至仍然丝毫没有减少的迹象。诠释了现代都会生活的实用简约，佩于腕间，散发大方自信迷人风采!!!!【品质保证】【同价位手表中蕞强做工！】 【本店只用正品天津海鸥机芯， 宝贝详情有机芯图】 【机芯保修两年】',
					    origin: 1009,
					    discount: 720,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['表盘直径3cm'],
					    count: 1,
					    images: [
					        '../images/goods22_1.jpg',
					        '../images/goods22_2.jpg',
					        '../images/goods22_3.jpg',
					        '../images/goods22_4.jpg',
					        '../images/goods22_5.jpg',
					    ],
					    magnifyImage: '../images/goods22_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 22,
					    count: 1,
					    slug: '铝合金碟刹自行车',
					    title: '永久山地车双碟刹学生/成人27.5寸铝合金27/30速自行车变速单车',
					    descibe: '多色可选,送全套加装版！！！',
					    origin: 999,
					    discount: 799,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['27速','30速'],
					    count: 1,
					    images: [
					        '../images/goods23_1.jpg',
					        '../images/goods23_2.jpg',
					        '../images/goods23_3.jpg',
					        '../images/goods23_4.jpg',
					        '../images/goods23_5.jpg',
					    ],
					    magnifyImage: '../images/goods23_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 23,
					    count: 1,
					    slug: '进口不锈鋼英国温控器',
					    title: 'EnTech/一特 ET801进口304不锈钢电热水壶家用自动断电水壶烧水壶',
					    descibe: '健康环保，绿色养生',
					    origin: 326,
					    discount: 219,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['2L','1.5L'],
					    count: 1,
					    images: [
					        '../images/goods24_1.jpg',
					        '../images/goods24_2.jpg',
					        '../images/goods24_3.jpg',
					        '../images/goods24_4.jpg',
					        '../images/goods24_5.jpg',
					    ],
					    magnifyImage: '../images/goods24_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 24,
					    count: 1,
					    slug: '怀旧宠物小精灵书包',
					    title: '宠物小精灵皮卡丘双肩包 神奇宝贝 动漫周边男女学生书包休闲背包',
					    descibe: '好的材质，一流生产工序',
					    origin: 95,
					    discount: 59,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['60cm*40cm'],
					    count: 1,
					    images: [
					        '../images/goods25_1.jpg',
					        '../images/goods25_2.jpg',
					        '../images/goods25_3.jpg',
					        '../images/goods25_4.jpg',
					        '../images/goods25_5.jpg',
					    ],
					    magnifyImage: '../images/goods25_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 25,
					    count: 1,
					    slug: '花花公子春季板鞋',
					    title: '花花公子男鞋春季板鞋男韩版潮流运动休闲鞋真皮拼接透气男士鞋子',
					    descibe: '皮鞋码 比运动鞋选小一码 选小一码 选小一码 默认圆通 赠运费险',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['39','40','41','42','43'],
					    count: 1,
					    images: [
					        '../images/goods26_1.jpg',
					        '../images/goods26_2.jpg',
					        '../images/goods26_3.jpg',
					        '../images/goods26_4.jpg',
					        '../images/goods26_5.jpg',
					    ],
					    magnifyImage: '../images/goods26_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 26,
					    count: 1,
					    slug: 'LED学习护眼台灯',
					    title: '雅格LED学习护眼卧室床头充电台灯 折叠式学生阅读写字创意小台灯',
					    descibe: '持久续航 高亮led 三档调节 大气好看',
					    origin: 69,
					    discount: 29,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['25w','10w','5w'],
					    count: 1,
					    images: [
					        '../images/goods27_1.jpg',
					        '../images/goods27_2.jpg',
					        '../images/goods27_3.jpg',
					        '../images/goods27_4.jpg',
					        '../images/goods27_5.jpg',
					    ],
					    magnifyImage: '../images/goods27_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 27,
					    count: 1,
					    slug: '简约手绘大师瓷板画',
					    title: '华艺源 花鸟荷花现代简约手绘抽象油画玄关装饰画新中式过道挂画',
					    descibe: '原创画家亲手绘制品牌旗舰华艺源 品质保障',
					    origin: 1499,
					    discount: 789,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['1.7m*0.8'],
					    count: 1,
					    images: [
					        '../images/goods28_1.jpg',
					        '../images/goods28_2.jpg',
					        '../images/goods28_3.jpg',
					        '../images/goods28_4.jpg',
					        '../images/goods28_5.jpg',
					    ],
					    magnifyImage: '../images/goods28_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 28,
					    count: 1,
					    slug: '亨采食品级电热水壶',
					    title: '亨采 ZX-200B6电热水壶食品级304不锈钢双层家用烧水壶自动断电2L',
					    descibe: '304食品级不锈钢，双层防烫壶体，自动断电，2L大容量，',
					    origin: 149,
					    discount: 29.9,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['2L'],
					    count: 1,
					    images: [
					        '../images/goods29_1.jpg',
					        '../images/goods29_2.jpg',
					        '../images/goods29_3.jpg',
					        '../images/goods29_4.jpg',
					        '../images/goods29_5.jpg',
					    ],
					    magnifyImage: '../images/goods29_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 29,
					    count: 1,
					    slug: '简约吸顶灯创意LED',
					    title: '卧室灯简约吸顶灯客厅灯水晶餐厅灯LED书房个性三头创意灯具',
					    descibe: '【1】优质电镀吸盘，进口磨砂玻璃灯罩，智能炫彩变光模式【2】款式新颖独特漂亮，高透光率，安装简单，清洁方便【3】配原装led光源,节能省电，完美显色，寿命长达10年以上 【4】15天无理由退换，质保3年，售后无忧',
					    origin: 259,
					    discount: 167,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['50cm*50'],
					    count: 1,
					    images: [
					        '../images/goods30_1.jpg',
					        '../images/goods30_2.jpg',
					        '../images/goods30_3.jpg',
					        '../images/goods30_4.jpg',
					        '../images/goods30_5.jpg',
					    ],
					    magnifyImage: '../images/goods30_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 30,
					    count: 1,
					    slug: '可折叠衣服烘干机',
					    title: '极乐鸟宝宝衣服烘干机可折叠干衣机家用静音风干器烘衣机速干衣柜',
					    descibe: '①爆款钜惠，反季大放价！痛击骤雨天！干衣，杀菌，做衣橱！ ②极乐鸟品质有保障，5年保修，真正售后无忧！ ③双层不锈钢支架，直接为不锈钢管子，结实耐用,主机人体工程学设计，方便提携，一机多用！',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['1.5m*0.8m',],
					    count: 1,
					    images: [
					        '../images/goods31_1.jpg',
					        '../images/goods31_2.jpg',
					        '../images/goods31_3.jpg',
					        '../images/goods31_4.jpg',
					        '../images/goods31_5.jpg',
					    ],
					    magnifyImage: '../images/goods31_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 31,
					    count: 1,
					    slug: '美图T8 美颜自拍手机',
					    title: '抢先到货预定减100 Meitu/美图 T8美颜自拍指纹全网通手机预售',
					    descibe: '5000元为官网预约价，最终销售价将在21号公布.',
					    origin: 5622,
					    discount: 5000,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['全网通'],
					    count: 1,
					    images: [
					        '../images/goods32_1.jpg',
					        '../images/goods32_2.jpg',
					        '../images/goods32_3.jpg',
					        '../images/goods32_4.jpg',
					        '../images/goods32_5.jpg',
					    ],
					    magnifyImage: '../images/goods32_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 32,
					    count: 1,
					    slug: '三星S7 Edge ',
					    title: '速发/免息送礼Samsung/三星 Galaxy S7 Edge SM-G9350曲屏4G手机',
					    descibe: '现货速发 送豪礼 正品国行 延保一年',
					    origin: 5800,
					    discount: 4655,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['全网通'],
					    count: 1,
					    images: [
					        '../images/goods33_1.jpg',
					        '../images/goods33_2.jpg',
					        '../images/goods33_3.jpg',
					        '../images/goods33_4.jpg',
					        '../images/goods33_5.jpg',
					    ],
					    magnifyImage: '../images/goods33_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 33,
					    count: 1,
					    slug: '笔记本air11电脑包',
					    title: '苹果笔记本air11电脑包Macbook 12内胆air/pro13皮套mac保护套壳',
					    descibe: '外贸单 售完即止 大厂出货 品质一流 大福利！！快来购买',
					    origin: 69,
					    discount: 39,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['11英寸','12英寸','13英寸'],
					    count: 1,
					    images: [
					        '../images/goods34_1.jpg',
					        '../images/goods34_2.jpg',
					        '../images/goods34_3.jpg',
					        '../images/goods34_4.jpg',
					        '../images/goods34_5.jpg',
					    ],
					    magnifyImage: '../images/goods34_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 34,
					    count: 1,
					    slug: '办公透明文件袋',
					    title: '20个 办公按扣透明文件袋 A4塑料文件资料档案袋收纳袋学生试卷袋',
					    descibe: '新款新样式 A4大小 耐用按扣 多种用途',
					    origin: 28,
					    discount: 13.50,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['A4大小'],
					    count: 1,
					    images: [
					        '../images/goods35_1.jpg',
					        '../images/goods35_2.jpg',
					        '../images/goods35_3.jpg',
					        '../images/goods35_4.jpg',
					        '../images/goods35_5.jpg',
					    ],
					    magnifyImage: '../images/goods35_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 35,
					    count: 1,
					    slug: '新款组合布艺沙发',
					    title: '布艺沙发可拆洗大小户型转角皮配布皮布沙发L型组合客厅家具',
					    descibe: '皮配布沙发，数百城市免费送货，沙发无需安装',
					    origin: 6360,
					    discount: 3180,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['全套'],
					    count: 1,
					    images: [
					        '../images/goods36_1.jpg',
					        '../images/goods36_2.jpg',
					        '../images/goods36_3.jpg',
					        '../images/goods36_4.jpg',
					        '../images/goods36_5.jpg',
					    ],
					    magnifyImage: '../images/goods6_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 36,
					    count: 1,
					    slug: '简约卡通勺子',
					    title: '秸秆汤勺家用长柄盛粥勺厨房厨具塑料加厚大号稀饭勺子',
					    descibe: '健康材料，多色可以选择',
					    origin: 16,
					    discount: 9,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['长40cm','35cm'],
					    count: 1,
					    images: [
					        '../images/goods37_1.jpg',
					        '../images/goods37_2.jpg',
					        '../images/goods37_3.jpg',
					        '../images/goods37_4.jpg',
					        '../images/goods37_5.jpg',
					    ],
					    magnifyImage: '../images/goods37_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 37,
					    count: 1,
					    slug: '室内简约精装瓷砖',
					    title: '金属铝塑板玻璃风车马赛克电视客厅背景墙自贴带背胶瓷砖内墙装修',
					    descibe: '厂家货源，颜色多种，支持定做',
					    origin: 15,
					    discount: 9.9,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['30cm*30cm'],
					    count: 1,
					    images: [
					        '../images/goods38_1.jpg',
					        '../images/goods38_2.jpg',
					        '../images/goods38_3.jpg',
					        '../images/goods38_4.jpg',
					        '../images/goods38_5.jpg',
					    ],
					    magnifyImage: '../images/goods38_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 38,
					    count: 1,
					    slug: '青年个性潮男上衣',
					    title: '春季新款港风青年个性袋鼠兜学生宽松潮流连帽夹克衫男装潮男上衣',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 249,
					    discount: 105,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XL','4XL'],
					    count: 1,
					    images: [
					        '../images/goods39_1.jpg',
					        '../images/goods39_2.jpg',
					        '../images/goods39_3.jpg',
					        '../images/goods39_4.jpg',
					        '../images/goods39_5.jpg',
					    ],
					    magnifyImage: '../images/goods39_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 39,
					    count: 1,
					    slug: '新款韩版针织',
					    title: '春装外套女装2017新款韩版中长款宽松春季针织开衫毛衣上衣潮春秋',
					    descibe: '不退色不起天球 性价比高 品质保证',
					    origin: 39,
					    discount: 19,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL'],
					    count: 1,
					    images: [
					        '../images/goods40_1.jpg',
					        '../images/goods40_2.jpg',
					        '../images/goods40_3.jpg',
					        '../images/goods40_4.jpg',
					        '../images/goods40_5.jpg',
					    ],
					    magnifyImage: '../images/goods40_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 40,
					    count: 1,
					    slug: '学生超流卫衣',
					    title: '卫衣女加绒宽松韩版潮学生灯笼袖加厚开衫外套打底衫女装上衣棉衣',
					    descibe: '急速发货，不满包换',
					    origin: 99,
					    discount: 49,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL'],
					    count: 1,
					    images: [
					        '../images/goods41_1.jpg',
					        '../images/goods41_2.jpg',
					        '../images/goods41_3.jpg',
					        '../images/goods41_4.jpg',
					        '../images/goods41_5.jpg',
					    ],
					    magnifyImage: '../images/goods41_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 41,
					    count: 1,
					    slug: '简约时尚连衣裙',
					    title: '大码女装30-35-40岁青年少妇女妈妈装假两件套2017春秋装连衣裙潮',
					    descibe: '赠送围巾，售后无忧',
					    origin: 263,
					    discount: 69,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL'],
					    count: 1,
					    images: [
					        '../images/goods42_1.jpg',
					        '../images/goods42_2.jpg',
					        '../images/goods42_3.jpg',
					        '../images/goods42_4.jpg',
					        '../images/goods42_5.jpg',
					    ],
					    magnifyImage: '../images/goods42_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 42,
					    count: 1,
					    slug: '百雀羚化妆品套装',
					    title: '百雀羚套装女补水保湿美白化妆品护肤品水嫩倍现精华水乳洗面奶霜',
					    descibe: '【专柜正品，质量保障】【30天无理由退换】【赔钱促销，谢绝讲价】',
					    origin: 292,
					    discount: 169,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标准'],
					    count: 1,
					    images: [
					        '../images/goods43_1.jpg',
					        '../images/goods43_2.jpg',
					        '../images/goods43_3.jpg',
					        '../images/goods43_4.jpg',
					        '../images/goods43_5.jpg',
					    ],
					    magnifyImage: '../images/goods43_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 43,
					    count: 1,
					    slug: '完美化妆品套装',
					    title: '完美化妆品套装专柜正品专卖深层补水保湿官方护肤品旗舰店',
					    descibe: '适合干性肌肤 滋润补水保湿',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标准'],
					    count: 1,
					    images: [
					        '../images/goods44_1.jpg',
					        '../images/goods44_2.jpg',
					        '../images/goods44_3.jpg',
					        '../images/goods44_4.jpg',
					        '../images/goods44_5.jpg',
					    ],
					    magnifyImage: '../images/goods44_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 44,
					    count: 1,
					    slug: '百搭贝壳潮鞋男鞋',
					    title: '冬季男鞋子板鞋韩版潮流男士运动休闲鞋百搭贝壳潮鞋2017新款春季',
					    descibe: '支持DIY,损坏补寄',
					    origin: 149,
					    discount: 39,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['40','41','42','43','44'],
					    count: 1,
					    images: [
					        '../images/goods45_1.jpg',
					        '../images/goods45_2.jpg',
					        '../images/goods45_3.jpg',
					        '../images/goods45_4.jpg',
					        '../images/goods45_5.jpg',
					    ],
					    magnifyImage: '../images/goods45_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 45,
					    count: 1,
					    slug: '花花公子休闲鞋子',
					    title: '花花公子男鞋春夏季透气品牌运动鞋男士休闲鞋子男跑步鞋旅游鞋潮',
					    descibe: '15天免费退换 送运费险 闪电发货',
					    origin: 226,
					    discount: 179,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['40','41','42','43','44'],
					    count: 1,
					    images: [
					        '../images/goods46_1.jpg',
					        '../images/goods46_2.jpg',
					        '../images/goods46_3.jpg',
					        '../images/goods46_4.jpg',
					        '../images/goods46_5.jpg',
					    ],
					    magnifyImage: '../images/goods46_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 46,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '手拿包女士大容量简约手提包包2017新款女包手包小包手抓包斜挎包',
					    descibe: '高评分 好质量 值得拥有',
					    origin: 169,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标准'],
					    count: 1,
					    images: [
					        '../images/goods47_1.jpg',
					        '../images/goods47_2.jpg',
					        '../images/goods47_3.jpg',
					        '../images/goods47_4.jpg',
					        '../images/goods47_5.jpg',
					    ],
					    magnifyImage: '../images/goods47_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 47,
					    count: 1,
					    slug: '欧美裸色尖头女鞋',
					    title: '大小码女鞋欧美裸色尖头10cm高跟鞋细跟中跟浅口黑色漆皮单鞋婚鞋',
					    descibe: '1 精选内里设计舒适透气不臭脚.无脚气环保健康给您双脚更好的呵护. 2 优雅钢管细跟让您双腿修长.显瘦.更有曲线美. 3 [10cm]高跟设计更能彰显您的自信和性感. 4 亲,还等什么赶紧抢购吧；质量可靠如有问题全额退款【八天以内】。跟高5-8cm鞋子也有',
					    origin: 199,
					    discount: 49,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['38','39','40','41'],
					    count: 1,
					    images: [
					        '../images/goods48_1.jpg',
					        '../images/goods48_2.jpg',
					        '../images/goods48_3.jpg',
					        '../images/goods48_4.jpg',
					        '../images/goods48_5.jpg',
					    ],
					    magnifyImage: '../images/goods48_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 48,
					    count: 1,
					    slug: '豪华欧式挂钟',
					    title: '老船长豪华欧式挂钟客厅壁钟实木石英钟表静音大复古时钟田园钟表',
					    descibe: '欧美 锌合金金属 仿古工艺 实木',
					    origin: 288,
					    discount: 249,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['40cm*60cm'],
					    count: 1,
					    images: [
					        '../images/goods49_1.jpg',
					        '../images/goods49_2.jpg',
					        '../images/goods49_3.jpg',
					        '../images/goods49_4.jpg',
					        '../images/goods49_5.jpg',
					    ],
					    magnifyImage: '../images/goods49_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 49,
					    count: 1,
					    slug: '男孩青少年夜光手表',
					    title: '初中学生手表男孩青少年高中防水石英表男生夜光韩版儿童手表男童',
					    descibe: '拍下69 终身保修 送运费险 0风险',
					    origin: 199,
					    discount: 79,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['直径3cm'],
					    count: 1,
					    images: [
					        '../images/goods50_1.jpg',
					        '../images/goods50_2.jpg',
					        '../images/goods50_3.jpg',
					        '../images/goods50_4.jpg',
					        '../images/goods50_5.jpg',
					    ],
					    magnifyImage: '../images/goods50_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 50,
					    count: 1,
					    slug: '运动头巾吸汗带',
					    title: '李宁运动头带男女运动头巾吸汗带网球篮球跑步纯棉护额束发护头带',
					    descibe: '多种颜色 纯棉吸汗 运动必备 柔软舒适 超经典款',
					    origin: 49,
					    discount: 15,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标准'],
					    count: 1,
					    images: [
					        '../images/goods51_1.jpg',
					        '../images/goods51_2.jpg',
					        '../images/goods51_3.jpg',
					        '../images/goods51_4.jpg',
					        '../images/goods51_5.jpg',
					    ],
					    magnifyImage: '../images/goods51_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 51,
					    count: 1,
					    slug: '运动男女NIKE头巾',
					    title: '耐克头带 开放式网球束发带瑜伽头箍 篮球街头运动男女NIKE头巾',
					    descibe: '束发透气 时尚运动 网坛同款',
					    origin: 149,
					    discount: 79,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['均码'],
					    count: 1,
					    images: [
					        '../images/goods52_1.jpg',
					        '../images/goods52_2.jpg',
					        '../images/goods52_3.jpg',
					        '../images/goods52_4.jpg',
					        '../images/goods52_5.jpg',
					    ],
					    magnifyImage: '../images/goods52_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 52,
					    count: 1,
					    slug: '车用腰靠垫记忆枕',
					    title: '摩丝娃娃汽车腰靠垫记忆棉车用腰枕可爱卡通汽车腰垫护腰靠垫四季',
					    descibe: '正品保证，顺丰包邮',
					    origin: 104,
					    discount: 35,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['44cm*26cm'],
					    count: 1,
					    images: [
					        '../images/goods53_1.jpg',
					        '../images/goods53_2.jpg',
					        '../images/goods53_3.jpg',
					        '../images/goods53_4.jpg',
					        '../images/goods53_5.jpg',
					    ],
					    magnifyImage: '../images/goods53_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 53,
					    count: 1,
					    slug: '汽车大腰靠垫',
					    title: '包邮特大钢筋汽车大腰靠垫背办公室座椅靠背垫护腰枕货车小车腰靠',
					    descibe: '库存处理 不支持退货 吹毛求疵的买家慎拍 加粗钢筋 木珠按摩 手工编织 有效保护腰部支撑 长时间开车抗疲劳 永不变型！',
					    origin: 149,
					    discount: 26,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['均码'],
					    count: 1,
					    images: [
					        '../images/goods54_1.jpg',
					        '../images/goods54_2.jpg',
					        '../images/goods54_3.jpg',
					        '../images/goods54_4.jpg',
					        '../images/goods54_5.jpg',
					    ],
					    magnifyImage: '../images/goods54_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 54,
					    count: 1,
					    slug: '汽车方向盘套',
					    title: '汽车方向盘套把套夏季女通用运动卡通四季通用防滑通用型加菲猫',
					    descibe: '卡通潮牌 多款可选 不掉色 防滑 吸汗',
					    origin: 159,
					    discount: 32,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['标准'],
					    count: 1,
					    images: [
					        '../images/goods55_1.jpg',
					        '../images/goods55_2.jpg',
					        '../images/goods55_3.jpg',
					        '../images/goods55_4.jpg',
					        '../images/goods55_5.jpg',
					    ],
					    magnifyImage: '../images/goods55_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 55,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 56,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 57,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 58,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 59,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 60,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 61,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
					},{
					    id: 62,
					    count: 1,
					    slug: '新款日系韩版修身',
					    title: '男装秋冬新款日系韩版修身潮男士长袖t恤弹力v领打底衫衣服春秋',
					    descibe: '撒谎说单卖不哈哈就打不想做工程设备的满身的啊刷卡',
					    origin: 149,
					    discount: 99,
					    collection: [],
					    cart: [],
					    order: [],
					    size: ['M','XL','2XL','3XML','4XML'],
					    count: 1,
					    images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        '../images/goods4_4.jpg',
					        '../images/goods5_5.jpg',
					    ],
					    magnifyImage: '../images/goods3_3.jpg',
					    info: [
					        '上市年份季节: 2015夏季',
					        '厚薄: 薄',
					        '材质成分: 棉95% 聚氨酯弹性纤维(氨纶)5%',
					        '货号: FS10238',
					        '面料分类: 棉毛布',
					        '品牌: Fisen/风森',
					        '基础风格: 青春流行',
					    ],
					    comments: [
					        [{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '好评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }],[{
					       	isShow: true,
					 		isAppend: false,
					        text : '文字描述',
					        level: '中评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]}],[{
					       	isShow: true,
					 		isAppend: true,
					        text : '文字描述',
					        level: '差评！',
					        user: '304**3@qq.com',
					        time: '2016年7月17日 06:30',
					        images: [
					        '../images/goods1_1.jpg',
					        '../images/goods2_2.jpg',
					        '../images/goods3_3.jpg',
					        ]},{
						        text : '文字描述',
						        time: '2016年8月17日 08:30',
						        images: [
						        '../images/goods1_1.jpg',
						        '../images/goods2_2.jpg',
						        '../images/goods3_3.jpg',
						        ]
						    }]],
					    service: [{
					    	name: '承诺：',
					    	items: ['七天无理由','购买运费险'],
					    	class: 'commitment'
					    },{
					    	name: '支付：',
					    	items: ['快捷支付'],
					    	class: 'pay-method'
					    }],
					    options: [
				            {
				              name: '全部',
				              class: 'all',
				              count: 0,
				              checked: 0
				            },
				            {
				              name: '追评',
				              class: 'sppend',
				              count: 0,
				              checked: 1
				            },
				            {
				              name: '好评',
				              class: 'good',
				              count: 0,
				              checked: 2
				            },{
				              name: '中评',
				              class: 'medium',
				              count: 0,
				              checked: 3
				            },{
				              name: '差评',
				              class: 'bad',
				              count: 0,
				              checked: 4
				            }
			            ],
			            publish: [{
				            title: '评论：',
				            class: '',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
			            },{
				            title: '追加评论：',
				            level: '好评！',
				            time: '[2017-02-04]',
				            options: ['好评','中评','差评'],
			            	images: [
			            		'../images/1.jpg',
			            		'../images/2.jpg',
			            		'../images/3.jpg',
			            	],
			            	isShow: true,
				        }],
					    position: [
					    	{   // 1
					            width:80,
					            top:5,
					            left:50,
					            opacity:40,
					            z:2
					        },
					        {  // 2
					            width:100,
					            top:15,
					            left:5,
					            opacity:80,
					            z:3
					        },
					        {   // 3
					            width:120,
					            top:25,
					            left:140,
					            opacity:100,
					            z:4
					        },
					        {  // 4
					            width:100,
					            top:15,
					            left:295,
					            opacity:80,
					            z:3
					        },
					        {   //5
					            width:80,
					            top:5,
					            left:270,
					            opacity:40,
					            z:2
					        }
					    ]
			}];
			this.getGoods = function(){
				return goods;
			}
			// 获取缓存数据
			this.getStorage = function(key,defaultValue) {
				return storage[key] ? JSON.parse(storage[key]) : defaultValue;
			}
			// 将数据缓存
			this.saveStorage = function(key,value) {
				saveStorage(key,value);
			}
			function saveStorage(key,value){
				storage[key] = JSON.stringify(value);
			}
			// 根据商品id数组获取商品列表
			function getGoodsList(listId,goods) {
				var goodsList = [];
				for(var i = 0;i < listId.length;i++) {
					for(var j=0; j< goods.length;j++) {
						if(goods[j].id == listId[i]) {
							goodsList.push(goods[j]);
						}
					}
				}
				return goodsList;
			}


			//  将date转化为2001-12-12格式
			function getFormatDate(date) {
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				month = month <= 9 ? '0' + month: month;
				var sun = date.getDate()
				return year + '-' + month + '-' + sun; 
			}

			/**
			 * main 区域
			 */
			var main = {
				life: [7,8,9,10,11,12],
				sport: [0,1,2,3,4,5,6],
				mobile: [13,14,15,16,17,18],
				hot: {
					one:[19,20,21],
					two:[22,23,24],
					three:[25,26,27]
				},
				navGoods: [],
				nav: [
					{
						title: '家用电器',
						lists: [28,29,30,],
					},{
						title: '手机、数码',
						lists: [31,32],
					},{
						title: '电脑、办公',
						lists: [33,34],
					},{
						title: '家居、家装、厨具',
						lists: [35,36,37],
					},{
						title: '男装、女装',
						lists: [38,39,40,41],
					},{
						title: '个护化妆、清洁用品',
						lists: [42,43],
					},{
						title: '鞋靴、箱包',
						lists: [44,45,46,47],
					},{
						title: '运动户外、钟表',
						lists: [48,49,50,51],
					},{
						title: '汽车、汽车用品',
						lists: [52,53,54],
					},
				]
			}
			productMain(main,goods);
			// 获取main区域数据
			this.getMain = function() {
				return main;
			}

			// 修改并产生main数据
			function productMain(main,goods) {
				if(main.lifeGoods == undefined) {
					for(var type in main) {
						if(Object.prototype.toString.call(main[type]) == '[object Object]') {
							main.hotGoods = {};
							for(var item in main[type]) {	
								main.hotGoods[item] = getGoodsList(main[type][item],goods);
							}
						}else {
							main[type + 'Goods'] = getGoodsList(main[type],goods);	
						}
					}
				}
				for(var i =0; i < main.nav.length;i++) {
					main.navGoods.push(getGoodsList(main.nav[i].lists,goods))
				}
			}
			// 滑动图片函数
			this.slideImage = function(isRight,id,$scope) {
				var slideImage = $scope.main.sportGoods[id].images;
				if(isRight) {
					slideImage.push(slideImage.shift());
				}else {
					slideImage.unshift(slideImage.pop());
				}
			}
			// 返回顶部
			this.returnTop = function() {
				angular.element('#return-top').trigger('click');
			}
			// 获取时间毫秒数
			function randomId(){
				return new Date().getTime();
			}

			/**
			 * 注册登录
			 */

			// 获取check数据
			var check = {
				register: {
					type: 'register',
					title: '免费注册',
					prompt: '请两次确认密码后注册！',
					input: [{
						index: 0,
						type: 'text',
						inspect_type: 'email',
						regex: /^[\w\-\.]{5,9}\@[\w]+\.[\w]{2,4}/,
						name: '用户名：',
						parent_class: 'register_usrename',
						class: 'text-field',
						tip: {
							type: '',
							normal: '邮箱格式错误',
							error: '邮箱格式错误',
							correct: '邮箱可以使用',
							used: '邮箱已经被使用',
							result: ''
						}
					},{
						index: 1,
						type: 'password',
						inspect_type: 'password',
						regex: /^[A-Z]\w{6,15}$/,
						name: '密码：',
						parent_class: 'register_password',
						class: 'security',
						tip: {
							normal: '首字母大写，6到16位',
							error: '密码格式不对',
							correct: '密码格式正确',
							type: '',
							result: ''
						}
					},{
						index: 2,
						type: 'password',
						inspect_type: 'repeat_password',
						regex: /^[A-Z]\w{6,15}$/,
						name: '确认密码：',
						parent_class: 'repeat_password',
						class: 'security',
						tip: {
							normal: '两次密码不一致',
							error: '两次密码不一致',
							correct: '两次密码一致',
							type: '',
							result: ''
						}
					}],
					submit: {
						name: '注册',
						tip: {
							error: '注册失败,填写出错',
							correct: '注册成功',
							result: '',
							type: ''
						}
					}
				},
				login:{
					type: 'login',
					title: '登录',
					prompt: '公共场所不建议自动登录，以防账号丢失',
					input: [{
						index: 0,
						type: 'text',
						name: '用户名：',
						parent_class: 'usrename',
						class: 'text-field',
						inspect_type: 'email',
						regex: /^[\w\-\.]+\@[\w]+\.[\w]{2,4}/,
						tip: {
							normal: '邮箱格式错误',
							error: '用户名不存在，请注册',
							correct: '用户名存在',
							type: '',
							result: ''
						}
					},{
						index: 1,
						type: 'password',
						name: '密码：',
						parent_class: 'password',
						class: 'security',
						inspect_type: 'password',
						regex: /^[A-Z]\w{6,15}$/,
						tip: {
							normal: '首字母大写，6到16位',
							error: '密码格式不对',
							correct: '密码格式正确',
							type: '',
							result: ''
						}
					}],
					login_link: {
						auto: '自动登录',
						register: '前往注册'
					},
					submit: {
						name: '登录',
						tip: {
							error: '登录失败,填写出错',
							correct: '登录成功',
							result: '',
							type: ''
						}
					}
				},
 			};
			this.getCheck = function() {
				return check;
			}
			// 获取默认用户注册模板
			 var user = {	
	        		id: 0,
	 				name: '',
	 				password: '',
	 				cartId: 0,
	 				succ: [],
	 				collectionId: 0,
	 				orderId: 0,
			};
			this.getUserTemplate = function() {
				return user;
			}
			// 判断是否满足填写条件
			this.judgeFillCondition = function(user,$scope,isSubmit) {
				for(var i = 0;i < user.succ.length; i++) {
						if(user.succ[i] == false) {
							tipChange('error',$scope,isSubmit);
							return ;
						}
				}

				for(var key in user) {
						if(user[key] === '') {
							tipChange('error',$scope,isSubmit);
							return ;	
						}
				}
			}
			// 满足注册条件保存用户
			this.saveRegisterUser = function(user,$scope,isSubmit) {
					user.id = randomId();
					user.cartId = user.id;
					user.collectionId = user.id;
					user.orderId = user.id;
					delete user.repeat_password;
					$scope.users.push(user);
					tipChange('correct',$scope,isSubmit);
					saveStorage('users_List',$scope.users);
					return user;
			}
			// 判断账号密码是否正确
			this.judgeAccountPassword = function(user,$scope,isSubmit) {
				for(var i = 0; i < $scope.users.length; i++) {
					if(user.name === $scope.users[i].name) {
						if(user.password === $scope.users[i].password) {
							tipChange('correct',$scope,isSubmit);
							angular.element('.check').hide()
							angular.element('.welcome').css('display','block');
							saveStorage('isLogin',true);
							$scope.user = $scope.users[i];
							saveStorage('currentUser',$scope.user);
							saveStorage('users_List',$scope.users);
							setTimeout(function(){
								$state.go(' ');
							},1000);
							return;
						}
					}	
				}
				tipChange('error',$scope,isSubmit);
			}
			// 输入框格式验证函数
			this.inspectInputFormat = function(user,type,value,index,$scope,isRegister) {
				tipChange(index,'normal',$scope);	
				if(type === 'email') {
					email(user,$scope.model.input[index].regex,value,$scope,index);
				}
				else if(type === 'password') {
					password(user,$scope.model.input[index].regex,value,$scope,index);
					if(isRegister) {
						repeat_password(user,user.repeat_password,value,index);
					}
				}else if(type === 'repeat_password') {
					repeat_password(user,user.password,value,index);
				}
				function email(user,regex,value,$scope,index) {
					user.succ[index] = false;			
					var flag = inspect(regex,value);
					// 邮箱格式正确
					if(flag) {
						// 验证是否重复
						var exist = isExist(value,$scope.users,isRegister);
						tipChange(index,exist.tipType,$scope);
						if(isRegister) {
							// 注册页面标识用户名重复
							if(!exist.isRepeat) {
								user.name = value;
								user.succ[index] = true;
							}
						}else {
							if(exist.isRepeat) {
								user.name = value;
								user.succ[index] = true;
							}
						}
					}
				}
				// 判断密码格式是否正确
				function password(user,regex,value,$scope,index) {
					user.succ[index] = false;
					var flag = inspect($scope.model.input[index].regex,value);
					if(flag) {
						// 密码格式正确
						tipChange(index,'correct',$scope);
						// 将值保存在user里面
						user.password = value;
						user.succ[index] = true;
					}else {
						// 密码格式非法
						tipChange(index,'error',$scope);
					}
				}
				// 判断两次输入密码是否相等
				function repeat_password(user,password,value,index) {
					index = index == 1 ? index + 1 : index;
					user.succ[index] = false;
					var equal = isEqual(password,value);
					if(isRegister && index == 2) {
						// 将值保存在user里面
						user.repeat_password = value;
						user.succ[index]  = equal.isEqual;
					}
					tipChange(index,equal.tipType,$scope);
				}
				function isEqual(password,value) {
					// 取得上个密码框的值
					if(password == value) {
						return {
							isEqual: true,
							tipType: 'correct'
						}
					}
					return {
						isEqual: false,
						tipType: 'error'
					}
				}
				// 正则匹配是否符合要求
				function inspect(regex,value) {
					return regex.test(value);
				}
				// 判断用户是否存在
				function isExist(value,users,isRegister) {
					for(var i = 0; i < users.length; i++) {
						if(users[i].name == value) {
							return {
								isRepeat: true,
								tipType: isRegister ? 'used' : 'correct'
							};
						}
					}
					return  {
						isRepeat: false,
						tipType: isRegister ? 'correct' : 'error'
					};
				}
			}
			// 输入框提示函数
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

			/**
			 * 购物车，收藏夹，我的订单
			 */
			
			// 购物车,订单,收藏夹默认模板
			var template = {
					goodsId: [],
					retal: 0,
					count: [],
					selectSingle: [],
					selectAll: false,
					showPrompt: false,
					port: {
						theme: '',
					},
					empty: {
						flag: false,
						tip: '没有任何记录'
					},
			};
			// 为当前用户绑定购物车，我的订单，或者收藏夹模块
			this.bindModule = function ($scope,typeKey,typesKey,types) {
				if($scope.user.id === $scope.user[typeKey + 'Id']) {
					var type = template;
					if(typeKey === 'order') {
						template.oddNumbers = [];
			 			template.date = [];
			 			template.oddRental = [];
			 			template.oddGoods = [];
					}
					$scope.user[typeKey + 'Id'] = types.length;
					types.push(type);
					storage[typesKey] = JSON.stringify(types);
					saveStorage('currentUser',$scope.user);
					var users = this.getStorage('users_List',[]);
					for(var i = 0;i< users.length;i++) {
						if(users[i].id = $scope.user.id) {
							users[i].cartId = $scope.user.cartId;
						}
					}
					saveStorage('users_List',users);
				}
			}
			// 初始化购物车，我的订单，收藏夹
			this.initMolds = function($scope,molds) {
				console.log('进来了');
				for(var i = 0;i < molds.length; i++){
					var typeKey = molds[i];
					console.log($scope.user[typeKey + 'Id']);
					if($scope.user.id === $scope.user[typeKey + 'Id']){
						console.log('进来了1');
						// 处理错误异常，angular不允许进程中同时存在多个$scope
						setTimeout(function() {
							angular.element('#' + typeKey).trigger('click');
						},2000);
					}
				}
			}

			// 获取购物车,订单或者收藏夹商品
			this.getModuleGoods = function(GoodsId) {
				return getGoodsList(GoodsId,goods);
			}
			// 添加收藏夹，购物车或者订单数
			this.add = function(id,type,types,key) {
				for(var i =0; i< type.goodsId.length;i++) {
					if(type.goodsId[i] == id) {
						return;
					}
				}
				type.goodsId.push(id);
				type.count.push(1);
				type.selectSingle.push(false);
				if(key === 'orders') {
					var date = new Date();
					type.oddNumbers.push(date.getTime());
					type.date.push(getFormatDate(date));
				}
				saveStorage('isLogin',true);
				saveStorage(key,types);
			}
			// 选择单个商品
			this.selectSingle = function(index,$scope,type) {
				var selectSingle = $scope[type].selectSingle;
				var selectAll = $scope[type].selectAll;
				if(selectSingle[index] == false) {
					selectSingle[index] = true;
					if(selectAll == false) {
							var flag = true;
							for(var i =0; i< selectSingle.length;i++) {
								if(selectSingle[i] == false) {
									flag = false;
								}
							}
							selectAll = flag;
						}
				}else {
					if(selectAll == true) {
						selectAll = false;
					}
					selectSingle[index] = false;
				}
				$scope[type].selectAll = selectAll;
				this.caculateRental($scope,type);
			}

			// 选择全部商品
			this.selectAll = function($scope,type) {
				var selectSingle = $scope[type].selectSingle;
				var selectAll = $scope[type].selectAll;
				if(selectAll == false) {
					selectAll = true;	
					for(var i = 0; i < selectSingle.length; i++) {
						if(selectSingle[i] == true) {	
							break;
						}else {
							selectSingle[i] = true;	
						}
						
					}
				}else {
					selectAll = false;
					for(var i = 0; i < $scope[type].selectSingle.length; i++) {
						$scope[type].selectSingle[i] = false;	
					}
					$scope[type].retal = 0;
				}
				$scope[type].selectAll = selectAll;
			}

			// 根据选中的商品计算总额
			this.caculateRental = function($scope,type) {
				var selectSingle = $scope[type].selectSingle;
				$scope[type].retal = 0;
				for(var i = 0; i < selectSingle.length; i++) {
					if($scope[type].selectSingle[i] == true) {
						$scope[type].retal += $scope.goods[i].discount * $scope[type].count[i];
					}
				}
			}
			// 改变商品数量
			this.changeQuantity = function(index,isPlus,type,types,$scope) {
				var count = $scope[type].count[index];
				count = isPlus ? count + 1 : count - 1;
				count = count <= 0 ?  count = 1 : count;
				$scope[type].count[index] =  count;
				this.caculateRental($scope,type);
				saveStorage(type,$scope[type]);
				saveStorage(types,$scope[types]);
			}

			// 显示删除框
			this.showPrompt = function(index,$scope,type,theme) {
				$scope[type].showPrompt = true;
				$scope[type].port.theme = '确定要删除第'+ (index+1) + '个' + theme + '吗？';
			}
			// 隐藏删除提示框
			this.hidePrompt  = function($scope,type) {
				$scope[type].showPrompt = false;
			}
			// 删除单个商品
			this.deleteSingle  = function($scope,typeKey,typesKey,type,types) {
				var str = angular.element('#tip').html();
				var index = parseInt(str.substring(6,7)) - 1;
				$scope[typeKey].showPrompt = false;
				syncGoodsData($scope,typeKey,index);
				if(typeKey === 'cart') {
					this.caculateRental($scope,typeKey);
				}
				saveModification($scope,typeKey,typesKey,types);
			}

			// 删除选中
			this.deleteSelected = function($scope,typeKey,typesKey,type,types) {
				for(var i = 0; i < $scope[typeKey].selectSingle.length;i++) {
					if($scope[typeKey].selectSingle[i] == true) {
						syncGoodsData($scope,typeKey,i);
						i--;
					}
				}
				$scope[typeKey].selectAll = false;

				if(typeKey === 'cart') {
					this.caculateRental($scope,typeKey);
				}
				saveModification($scope,typeKey,typesKey,types);
			}

			// 删除全部商品
			this.deleteAll = function($scope,typeKey,type,typesKey,types) {
				$scope.goods = [];
				$scope[typeKey].goodsId = [];
				$scope[typeKey].count = [];
				$scope[typeKey].selectSingle = [];
				if(typeKey === 'order') {
					$scope[typeKey].oddNumbers = [];
					$scope[typeKey].date = [];
				}
				saveModification($scope,typeKey,typesKey,types);
				tipRecord($scope,typeKey);
				
			}
			// 修改删除单个商品并同步cart,order,collection中的数据
			function syncGoodsData($scope,typeKey,index) {
				$scope[typeKey].goodsId.splice(index,1);
				$scope[typeKey].selectSingle.splice(index,1);
				$scope.goods.splice(index,1);
				if(typeKey === 'order') {
					$scope[typeKey].oddNumbers.splice(index,1);
					$scope[typeKey].date.splice(index,1);
				}
				tipRecord($scope,typeKey);
			}

			// 用户在购物车，订单，收藏夹模块的值，进行修改并且保存
			function saveModification($scope,typeKey,typesKey,types) {
				for(var i = 0; i < types.length;i++){
					if(i === $scope.user[typeKey + 'Id']) {
						types[i] = $scope[typeKey];
					}
				}
				saveStorage(typesKey,types);
			}

			// 记录提示
			this.tipRecord = function ($scope,typeKey){
				tipRecord($scope,typeKey);	
			}
			function tipRecord($scope,typeKey) {
				if($scope.goods.length) {
					$scope[typeKey].empty.flag = false;
				}else{
					$scope[typeKey].empty.flag = true;
				}
			}

			
			/**
			 * 商品详情
			 */
		}])
})(angular);
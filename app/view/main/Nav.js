Ext.define("MyApp.view.main.Nav", {

	extend: "Ext.tree.Panel",

	xtype: "app-nav",

	id: "app-nav",

	initComponent: function() {

		var navStore = Ext.create("Ext.data.TreeStore", {
			model: "Ext.data.TreeModel",
						root: {
				expanded: true,
				children: [{
					text: "首页",
					leaf: true,
					cls: "node-link",
					mod: "app-home",//mod表示模块，module的意思
					modUrl: "main.Home"
				}, {
					text: "系统管理",
					expanded: true,
					cls: "node-link",
					children: [{
						text: "角色管理",
						leaf: true,
						cls: "node-link",
						// mod: "app-role",
						// modUrl: "main.Role"
					}, {
						text: "用户管理",
						leaf: true,
						cls: "node-link",
						mod: "app-role",
						modUrl: "main.Role"
					}]
				}, {
					text: "文章管理",
					expanded: true,
					children: [{
						text: "文章列表",
						leaf: true
					}, {
						text: "发布文章",
						leaf: true
					}]
				}, {
					text: "产品管理",
					expanded: true,
					children: [{
						text: "产品列表",
						leaf: true
					}, {
						text: "新增产品",
						leaf: true
					}, {
						text: "产品监控",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}, {
					text: "报表管理",
					expanded: true,
					children: [{
						text: "生成报表",
						leaf: true
					}, {
						text: "报表统计",
						leaf: true
					}, {
						text: "报表打印",
						leaf: true
					}]
				}]
			}
			// proxy: {
			// 	type: "ajax",
			// 	reader: "json",
			// 	url: "data/Nav.json"
			// }		
		});
		
		Ext.apply(this, {		
			title: "导航菜单",
			collapsible: true,
			autoScroll: true,
			width: 225,
			border: true,
			rootVisible: false,
			store: navStore,
			useArrows : true,
			listeners: {
				itemclick: "onMenuClick"
			}
		});
		this.callParent(arguments);
	}
});

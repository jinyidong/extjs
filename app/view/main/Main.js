Ext.define('MyApp.view.main.Main', {

	extend: 'Ext.container.Viewport',

	xtype: 'app-main',

	requires: [
		"MyApp.view.main.MainModel",
		"MyApp.view.main.MainController",

		'MyApp.view.main.Header',
		'MyApp.view.main.Nav',
		'MyApp.view.main.Footer',
		'MyApp.view.main.Content',
	],

	viewModel: {type: "main"},

	controller: "main",

	layout: "border",

	items: [
		{
		region: "north",
		height: 45,
		xtype: "app-header"
	},
	 {
		region: "west",
		xtype: "app-nav"
	},
		, {
			region: "center",
			xtype: "app-content"
		}, 
		{
			region: "south",
			xtype: "app-footer"
		}
	],

	initComponent: function () {

		Ext.QuickTips.init();

		Ext.Msg.minWidth = 300;

		this.callParent(arguments);
	}
});
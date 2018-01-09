Ext.define("MyApp.view.main.Footer", {
	extend: "Ext.container.Container",
	
    xtype: "app-footer",
    
	cls: "footer",
	
	initComponent: function() {
		Ext.apply(this, {
			height: 24,
			items: [{
				xtype: "label",
				text: "Copyright © 2018 随易科技 版权所有"
			}]
		});
		this.callParent(arguments);
	}
});

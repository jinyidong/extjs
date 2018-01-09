Ext.define('MyApp.view.main.Home',{         //主页面的tab面板
    extend: 'Ext.tab.Panel', 
    xtype:'app-home',
    //alias:'widget.tabpanel',
    closeAction: 'destroy',
    defaults :{
        bodyPadding: 10
    },
    items: [{
        title: '主页'
    }]
});
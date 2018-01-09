Ext.define('MyApp.view.main.Role',{         //主页面的tab面板
    extend: 'Ext.tab.Panel', 
    xtype:'app-role',
    closeAction: 'destroy',
    defaults :{
        bodyPadding: 10
    },
    items: [{
        title: '角色'
    }],
    enableTabScroll : true
});
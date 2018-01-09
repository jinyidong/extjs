Ext.define("MyApp.view.main.Header",{

    extend: "Ext.toolbar.Toolbar",

    cls: 'toolbar-btn-shadow',

    xtype: 'app-header',

    id: 'app-header',

    items: [
        { xtype: 'tbtext', text: 'Monitor', id: 'app-header-title' },
        '->',
        { tooltip: '修改密码', iconCls: 'x-fa fa-key header-button-color', cls: 'simplecms-header-button', handler: 'onChangePassword' },
        { tooltip: '退出', cls: 'simplecms-header-button', iconCls: 'x-fa fa-sign-out header-button-color', handler: 'onExit' }
    ]
});
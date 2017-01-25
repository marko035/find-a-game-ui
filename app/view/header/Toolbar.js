Ext.define('FAG.view.header.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.viewHeaderToolbar',
    cls: 'view-header-toolbar',
    width: '100%',
    items: [{
        xtype: 'label',
        cls: 'label',
        text: 'Find a Game'
    }, {
        xtype: 'tbfill'
    }, {
        xtype: 'textfield',
        emptyText: 'Search for City',
        labelWidth: 50,
        width: 300
    }, {
        xtype: 'tbfill'
    }, {
        xtype: 'button',
        text: 'Sign Up/Log In'
    }]
});
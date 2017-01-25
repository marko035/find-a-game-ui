Ext.define('FAG.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'FAG.view.header.Toolbar',
        'FAG.view.map.Component'
    ],
    layout: 'vbox',
    scrollable: true,
    items: [{
        xtype: 'viewHeaderToolbar'
    }, {
        xtype: 'tabpanel',
        width: '100%',
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                title: 'Map',
                height: 500,
                items: [{
                    xtype: 'viewMapComponent'
                }]
            },
            {
                title: 'Profile',
                height: 500,
                layout: 'hbox',
                items: [{
                    xtype: 'image',
                    src: 'https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png',
                    height: 400,
                    width: 300
                },{
                    xtype: 'fieldset',
                    title: 'User information',
                    width: 500,
                    height: 400,
                    items: [{
                        xtype: 'displayfield',
                        fieldLabel: 'First Name',
                        value: 'Marko'
                    },{
                        xtype: 'displayfield',
                        fieldLabel: 'Last Name',
                        value: 'Nikolic'
                    },{
                        xtype: 'displayfield',
                        fieldLabel: 'Age',
                        value: '23'
                    }]
                }]
            }
        ]
    }]
});
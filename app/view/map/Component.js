Ext.define('FAG.view.map.Component', {
    extend: 'Ext.Component',
    alias: 'widget.viewMapComponent',
    cls: 'view-map-component',
    height: 400,
    width: '100%',
    p_coordinates: {
        kragujevac: {
            lat: 44.012058,
            lng: 20.920317
        }
    },
    /**
     * @property {Object} p_map Reference on google map
     */
    p_map: undefined,
    /**
     * @property {Array} p_markers Array of all markers on the map
     */
    p_markers: [],
    initComponent: function () {
        this.callParent(arguments);
        this.m_registerLocalEventListeners();
    },
    m_registerLocalEventListeners: function () {
        this.on('afterrender', this.m_initializeMap, this);
    },
    m_initializeMap: function () {
        var map = new google.maps.Map(document.getElementById(this.id), {
            zoom: 14,
            center: this.p_coordinates.kragujevac
        });
        this.p_map = map;
        this.html = map;
        this.m_addMapEvents();
    },
    m_addMapEvents: function () {
        this.p_map.addListener('click', Ext.bind(this.m_createEvent, this));
    },
    m_createEvent: function () {
        var marker = new google.maps.Marker({
            position: this.p_coordinates.kragujevac,
            map: this.p_map,
            title: 'Hello World!'
        });
        this.p_markers.push(marker);
    }
});
App.view.define('VCommunes', {
    extend: "Ext.window.Window",
    alias: "widget.VCommunes",
    initComponent: function() {
        this.width = 800;
        this.height = 650;
        this.title = "Communes";
        this.bodyCls = "white";
		this.layout="border";
        this.tbar=[
        {
            xtype: "ux-searchbox",
            itemId: "searchCommunes",
            enableKeyEvents: true,
            padding: 5,
            width: 200
        }
        ];
        this.items = [
            {
                collapsible: false,
                region:'center',
                id: "TMapPanel"
		    },
            {
                collapsible: false,
                region:'north',
                xtype: "grid",
                itemId: "search",
                bbar: [
                '->',
                {
                    text: "Ajouter",
                    itemId: "Add_commune"
                }
                ],
                verticalScroller: {
                    xtype: 'paginggridscroller',
                    activePrefetch: false
                },
                columns: [{
                    header: "CPostal",
                    width: 80,
                    dataIndex: "codes_postaux"
                },{
                    header: "Commune",
                    flex: 1,
                    dataIndex: "nom_commune"
                },{
                    header: "Région",
                    width: 250,
                    dataIndex: "nom_region"
                }],
                store: App.store.create({fields:[],data:[]}),
                height: 200
            },
            {
			title: 'Communes',
			region:'east',
			width: 200,
            layout: "fit",
            items: [
            {
                xtype: "grid",
                itemId: "gridcom",
                columns: [{
                    header: "Commune",
                    dataIndex: "commune",
                    flex: 1
                }],
                store: App.store.create({fields:['id','commune'],data:[]})
            }
            ]
		    } 		
		];
        this.bbar = [ 
            '->',
            {
                text: "OK"
            }
        ];
        this.callParent(arguments);
    }

});
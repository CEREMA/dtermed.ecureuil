App.view.define('VForm2', {
    extend: "Ext.window.Window",
    alias: "widget.TForm2",
    initComponent: function() {
        this.width = 1024;
        this.height = 860;
        this.title = "Consultation Appel d'offre";
        this.bodyCls = "white";
        this.layout = "border";
        this.items = [
            {
                region: "west",
                border: false,
                width: 250,
                layout: "vbox",
                items: [
                {
                    xtype: "combo",
                    itemId: "cboDomaine",
                    margin: {
                        right: 10,
                        top: 10,
                        left: 10
                    },
                    fieldLabel: "Domaine",
                    allowBlank: false,
                    editable: false,
                    labelAlign: "top",
                    labelWidth: 200,
                    width: "100%",
                    displayField: "nom_domaine",
                    valueField: "id_domaine",
                    store: App.store.create('App.AO.getDomaines', // Creation du store
                        {
                            autoLoad: true
                        })

                }                    
                ]
            },
            {
                region: "center",
                layout: "vbox",
                items: [
                {
                    xtype: "htmleditor",
                    itemId: "objet",
                    flex: 1,
                    padding: 10,
                    width: "95%",
                    height: 50,
                    labelAlign: "top",
                    allowBlank: false,
                    fieldLabel: "Objet"
                },
                {
                    xtype: "textarea",
                    itemId: "observations",
                    flex: 1,
                    padding: 10,
                    width: "95%",
                    height: 50,
                    labelAlign: "top",
                    fieldLabel: "Observations"
                }                    
                ]
            },
            {
                region: "south",
                width: 300,
                layout: "fit",
                border: false,
                items: [
                {
                    layout: "hbox",
                    width: "100%",
                    items: [
                    {
                        xtype: "grid",
                        border: false,
                        itemId: "grid1",
                        flex: 1,
                        tbar: [{
                                xtype: "button",
                                text: "Ajouter groupe(s)",
                                itemId: "ajouter_groupe"
                            },
                            {
                                xtype: "button",
                                text: "Ajouter agent(s)",
                                itemId: "ajouter_agent"
                            },
                        ],
                        columns: [{
                                text: "Nom",
                                width: 140,
                                dataIndex: "Nom"
                            }, {
                                text: "Email",
                                width: 185,
                                dataIndex: "Email"
                            }, {
                                text: "Type",
                                dataIndex: "Type",
                                flex: 1
                            },
                        ],
                        flex: 1,
                        height: 160,
                        store: App.store.create({
                            fields: [
                                "Nom",
                                "Email",
                                "Type"
                            ],
                            data: []
                        })
                    },
                    {
                        width: 2        
                    },
                    {
                        xtype: "uploadfilemanager",
                        border: false,
                        itemId: "up",
                        flex: 1,
                        height: "100%",
                        uploader: '/upload',
                        hidden: false
                    }
                    ]
                }]
            }
        ];
        this.bbar = [{
                xtype: "button",
                text: "Annuler",
                itemId: "CANCEL_lien"
            },
            '->', 
            {
                xtype: "button",
                itemId: "ajouter_favoris",
                text: "Ajouter aux favoris",
                hidden: true,
                margin: {
                    top: 10,
                    left: 10
                }
            },
            {
                xtype: "button",
                itemId: "effacer_saisie",
                text: "Effacer",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 10,
                    right: 0
                }
            }, 
            {
                xtype: "button",
                itemId: "valider_saisie",
                text: "Enregistrer",
                margin: {
                    top: 10,
                    left: 10

                }
            }
        ];
        this.callParent(arguments);
    }

});
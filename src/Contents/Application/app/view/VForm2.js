App.view.define('VForm2', {
    extend: "Ext.window.Window",
    alias: "widget.TForm2",
    initComponent: function() {
        this.width = 1024;
        this.height = 860;
        this.title = "Consultation Appel d'offre";
        this.bodyCls = "white";
        this.layout = "border";
        this.items = [{
            region: "west",
            border: false,
            width: 250,
            layout: "vbox",
            bodyCls: "grey",
            items: [{
                xtype: "combo",
                itemId: "cboDomaine",
                padding: 10,
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
            }, {
                xtype: "combo",
                padding: 10,
                itemId: "cboNom",
                fieldLabel: "Source",
                allowBlank: false,
                editable: false,
                labelAlign: "top",
                labelWidth: 200,
                width: "100%",
                displayField: "NomSource",
                valueField: "IdSource",
                store: App.store.create('App.AO.getAll2', // Creation du store
                    {
                        autoLoad: true
                    })
            }, {
                xtype: "datefield",
                padding: 10,
                renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                itemId: "date",
                labelAlign: "top",
                allowBlank: false,
                editable: false,
                width: "100%",
                fieldLabel: 'Date de parution',
            }, {
                xtype: "datefield",
                padding: 10,
                itemId: "date_limite",
                labelAlign: "top",
                editable: false,
                width: "100%",
                fieldLabel: 'Date limite',
                allowBlank: false
            }, {
                xtype: "combo",
                itemId: "cboCode",
                padding: 10,
                fieldLabel: "Code de la prestation",
                allowBlank: false,
                editable: false,
                labelAlign: "top",
                labelWidth: 200,
                width: "100%",
                displayField: "LibelleNaturePrestation",
                valueField: "IdNaturePrestation",

                store: App.store.create('App.AO.getAll5', // Creation du store
                    {
                        autoLoad: true
                    })

            }, {
                xtype: "combo",
                itemId: "cboType",
                padding: 10,
                fieldLabel: "Type de consultation",
                allowBlank: false,
                editable: false,
                labelAlign: "top",
                labelWidth: 200,
                width: "100%",
                displayField: "reponse",
                valueField: "IdConsultation",

                store: App.store.create('App.AO.getAll3', // Creation du store
                    {
                        autoLoad: true
                    })
            }, {
                xtype: "textfield",
                itemId: "numero_semaine",
                padding: 10,
                width: 200,
                readOnly: true,
                labelAlign: "top",
                fieldLabel: "Numéro de semaine",
                allowBlank: false,
                width: "100%",
                labelWidth: 200,
            }, {
                border: false,
                itemId: "TMapPanel",
                flex: 1,
                width: "100%"
            }]
        }, {
            region: "center",
            layout: "vbox",
            border: false,
            itemId: "TCenter",
            items: [{
                xtype: "textfield",
                itemId: "client",
                padding: 10,
                width: "100%",
                labelAlign: "top",
                allowBlank: false,
                fieldLabel: "Client",
                labelWidth: 200,
            }, {
                xtype: "htmleditor",
                itemId: "objet",
                flex: 1,
                padding: 10,
                height: 50,
                width: "100%",
                labelAlign: "top",
                allowBlank: false,
                fieldLabel: "Objet"
            }, {
                xtype: "textarea",
                itemId: "observations",
                padding: 10,
                width: "100%",
                height: 50,
                labelAlign: "left",
                fieldLabel: "Observations"
            }, {
                xtype: "boxselect",
                itemId: "cboDepartement",
                padding: 10,
                fieldLabel: "Département",
                allowBlank: false,
                editable: false,
                labelAlign: "left",
                labelWidth: 200,
                height: 80,
                width: "100%",
                displayField: "departement",
                valueField: "IdDepartement",
                store: App.store.create('App.AO.getAll4', // Creation du store
                    {
                        autoLoad: true
                    })
            }, {
                layout: "hbox",
                itemId: "regroupement_keywords",
                border: false,
                width: "100%",
                height: 90,
                items: [{
                    xtype: "boxselect",
                    itemId: "Keywords",
                    fieldLabel: "Mots clés",
                    allowBlank: false,
                    editable: true,
                    labelAlign: "left",
                    labelWidth: 200,
                    flex: 1,
                    padding: 10,
                    displayField: "keyword",
                    valueField: "id",
                    triggerAction: 'all',
                    enableKeyEvents: true,
                    createNewOnEnter: false,
                    forceSelection: false,
                    queryMode: 'local',
                    typeAhead: true,
                    height: 80,
                    store: App.store.create('gestionao2://keywords', {
                        autoLoad: true
                    })

                }, {
                    xtype: "textfield",
                    itemId: "ed_keyword",
                    fieldLabel: "Mots clés",
                    hidden: true,
                    triggerAction: 'all',
                    padding: 10,
                    flex: 1,
                    labelAlign: "top",
                    labelWidth: 200,
                    enableKeyEvents: true
                }, {
                    xtype: "button",
                    itemId: "add_keyword",
                    text: "Ajouter",
                    height: 24,
                    margin: {
                        top: 10,
                        right: 10
                    },
                    width: 100,
                    handler: function(p) {
                        p.setDisabled(true);
                        App.get('TForm2 textfield#ed_keyword').setValue('');
                        App.get('TForm2 textfield#ed_keyword').show();
                        App.get('TForm2 boxselect#Keywords').hide();
                    }
                }]
            }, {
                collapsible: false,
                flex: 1,
                padding: 10,
                width: "100%",
                border: true,
                width: "100%",
                id: "TCommunes",
                xtype: "grid",
                tbar: [
                    '->',
                    {
                        text: "Ajouter",
                        itemId: "add_commune"
                    }
                ],
                columns: [
                    {
                        header: "Communes",
                        dataIndex: "nom_commune",
                        flex: 1
                    }
                ],
                store: App.store.create("gestionao2://my_communes_fields",{autoLoad: true})
            }]
        }, {
            region: "south",
            width: 300,
            layout: "fit",
            border: false,
            items: [{
                layout: "hbox",
                width: "100%",
                items: [{
                    xtype: "grid",
                    border: false,
                    itemId: "grid1",
                    flex: 1,
                    tbar: [{
                        xtype: "button",
                        text: "Ajouter groupe(s)",
                        itemId: "ajouter_groupe"
                    }, {
                        xtype: "button",
                        text: "Ajouter agent(s)",
                        itemId: "ajouter_agent"
                    }, ],
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
                    }, ],
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
                }, {
                    width: 3,
                    border: true,
                    height: "100%"
                }, {
                    xtype: "uploadfilemanager",
                    border: false,
                    itemId: "up",
                    flex: 1,
                    height: "100%",
                    uploader: '/upload',
                    hidden: false
                }]
            }]
        }];
        this.bbar = [{
                xtype: "button",
                text: "Annuler",
                itemId: "CANCEL_lien"
            },
            '->', {
                xtype: "button",
                itemId: "ajouter_favoris",
                text: "Ajouter aux favoris",
                hidden: true,
                margin: {
                    top: 10,
                    left: 10
                }
            }, {
                xtype: "button",
                itemId: "effacer_saisie",
                text: "Effacer",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 10,
                    right: 0
                }
            }, {
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
App.view.define('VMobile', {
    extend: "Ext.window.Window",
    alias: "widget.VMobile",
    initComponent: function() {
        this.width = 600;
        this.height = 600;
        this.title = "Ajouter un périphérique";
        this.bodyCls = "white";
        this.layout="fit";
        this.items = [
            {
                layout: "vbox",
                border: false,
                items: [
                    {
                        width: "100%",
                        html:   '<div class="screen-mobile">'+
                                    '<div class="title-mobile">Ecureuil Mobile</div>'+
                                    '<div class="description-mobile">Dès aujourd\'hui, Accedez à votre espace Ecureuil sur votre mobile.<br/>En seulement 3 étapes !</div>'+
                                    '<div class="title-step">Etape 1 : Télécharger l\'application</div>'+
                                    '<div class="googleplay">d</div><div class="appstore">tt</div>'+
                                '</div>',
                        flex: 11
                    },
            		{
                        flex: 1,
                        layout: "hbox",
                        width: "100%",
                        items: [
                            {   
                                xtype: "textfield",
                                itemId: "Peripherique",
                                flex: 1,
                                margin: 10,
                                allowBlank: false,
                                fieldLabel: "Code de synchronisation",
                                labelWidth: 140
                            },
                            {   
                                flex: 1,
                                xtype: 'label',
                                itemId: 'LabelError',
                                text: '',
                                margin: 12,
                                style: {
                                  color: 'red'
                                }
                            }
                        ]
                        
                    }
				]
            }
        ];
        this.bbar = [
        	{
                xtype: "button",
                itemId: 'CancelMobile',
                text: "Annuler",
                margin: {
                    top: 0,
                    bottom: 0,
                    left: 10,
                    right: 0
                }
            }, 
            {
                xtype: "button",
                itemId: "SynchroniserMobile",
                text: "Synchroniser",
                margin: {
                    top: 10,
                    bottom: 0,
                    left: 437,
                    right: 0
                }
            }
        ];
        
        this.callParent(arguments);
    }

});


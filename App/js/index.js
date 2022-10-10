// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setRotate(358)
                .setLeft("11.428571428571429em")
                .setTop("4.571428571428571em")
                .setWidth("9.295238095238096em")
                .setCaption("DAQ  Dashboard")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#008080",
                        "background-color" : "#AFEEEE"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setLeft("17.523809523809526em")
                .setTop("8.142857142857142em")
                .setCaption("ON")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#32CD32"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("28.952380952380953em")
                .setTop("8.380952380952381em")
                .setCaption("OFF")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#FF4500"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt1")
                .setLeft("16em")
                .setTop("12.952380952380953em")
                .setWidth("6.4em")
                .setHeight("2.1333333333333333em")
                .setChartType("HLED")
                .setJSONData({
                    "chart" : {
                        "manageresize" : "1",
                        "chartbottommargin" : "5",
                        "lowerlimit" : "0",
                        "upperlimit" : "100",
                        "lowerlimitdisplay" : "Low",
                        "upperlimitdisplay" : "High",
                        "numbersuffix" : "%",
                        "showtickmarks" : "1",
                        "tickvaluedistance" : "0",
                        "majortmnumber" : "5",
                        "majortmheight" : "4",
                        "minortmnumber" : "0",
                        "showtickvalues" : "1",
                        "decimals" : "0",
                        "ledgap" : "1",
                        "ledsize" : "1",
                        "ledboxbgcolor" : "333333",
                        "ledbordercolor" : "666666",
                        "borderthickness" : "2",
                        "chartrightmargin" : "20",
                        "showborder" : "0"
                    },
                    "colorrange" : {
                        "color" : [
                            {
                                "minvalue" : "0",
                                "maxvalue" : "30",
                                "code" : "FF0000"
                            },
                            {
                                "minvalue" : "30",
                                "maxvalue" : "50",
                                "code" : "FFFF00"
                            },
                            {
                                "minvalue" : "50",
                                "maxvalue" : "100",
                                "code" : "00FF00"
                            }
                        ]
                    },
                    "value" : "70"
                })
            );
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper1")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("51.04761904761905em")
                .setHeight("44.03809523809524em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});
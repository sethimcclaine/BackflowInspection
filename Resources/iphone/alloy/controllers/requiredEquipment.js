function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "requiredEquipment";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.requiredEquipment = Ti.UI.createWindow({
        id: "requiredEquipment"
    });
    $.__views.requiredEquipment && $.addTopLevelView($.__views.requiredEquipment);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId1"
    });
    $.__views.requiredEquipment.add($.__views.__alloyId1);
    $.__views.home = Ti.UI.createButton({
        height: "20",
        width: "200",
        backgroundColor: "red",
        top: "10%",
        left: "10%",
        title: "Home",
        id: "home"
    });
    $.__views.__alloyId1.add($.__views.home);
    $.__views.requiredLbl = Ti.UI.createLabel({
        top: "10%",
        text: "Equipment Required:",
        id: "requiredLbl"
    });
    $.__views.__alloyId1.add($.__views.requiredLbl);
    $.__views.aLbl = Ti.UI.createLabel({
        top: "30%",
        text: "A) Differential Pressure Gage--Minimum range 0 - 15PSID (0.1 or 0.2 psid graduations)",
        id: "aLbl"
    });
    $.__views.__alloyId1.add($.__views.aLbl);
    $.__views.bLbl = Ti.UI.createLabel({
        top: "40%",
        text: 'B) Three 6ft. lengths - minimum 1/4"(/) high presure hose',
        id: "bLbl"
    });
    $.__views.__alloyId1.add($.__views.bLbl);
    $.__views.cLbl = Ti.UI.createLabel({
        top: "50%",
        text: 'C) 1/4" Needle valves, for fine control of flows',
        id: "cLbl"
    });
    $.__views.__alloyId1.add($.__views.cLbl);
    $.__views.dLbl = Ti.UI.createLabel({
        top: "60%",
        text: 'D) Three 1/4" IPS x 45deg SAE flare connectors--brass',
        id: "dLbl"
    });
    $.__views.__alloyId1.add($.__views.dLbl);
    $.__views.eLbl = Ti.UI.createLabel({
        top: "70%",
        text: 'E)Adapter fittings for eaach test cock size -- brass 1/8" x 1/4", 1/4" x 1/2", 1/4" x 3/4"',
        id: "eLbl"
    });
    $.__views.__alloyId1.add($.__views.eLbl);
    $.__views.next = Ti.UI.createButton({
        height: "20",
        width: "200",
        backgroundColor: "red",
        bottom: "10",
        right: "10%",
        title: "Next",
        id: "next"
    });
    $.__views.__alloyId1.add($.__views.next);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
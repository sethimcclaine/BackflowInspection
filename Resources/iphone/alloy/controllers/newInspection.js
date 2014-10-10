function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openContact(e) {
        var customerInfoView = Alloy.createController("customerInfo", {
            testType: e.source.id
        }).getView();
        win.add(customerInfoView);
    }
    function openModel(e) {
        var model = e.testType;
        var modelController = Alloy.createController(model, {});
        var modelView = modelController.getView();
        modelView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newInspection";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.newInspection = Ti.UI.createWindow({
        id: "newInspection"
    });
    $.__views.newInspection && $.addTopLevelView($.__views.newInspection);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId0"
    });
    $.__views.newInspection.add($.__views.__alloyId0);
    $.__views.modelLabel = Ti.UI.createLabel({
        top: "10%",
        text: "Which model are you inspecting",
        id: "modelLabel"
    });
    $.__views.__alloyId0.add($.__views.modelLabel);
    $.__views.rp = Ti.UI.createButton({
        height: "40",
        width: "90%",
        backgroundColor: "red",
        top: "20%",
        title: "Reduced Pressure Principle Backflow Prevention Assembly (RP)",
        id: "rp"
    });
    $.__views.__alloyId0.add($.__views.rp);
    $.__views.dc = Ti.UI.createButton({
        height: "40",
        width: "90%",
        backgroundColor: "red",
        top: "30%",
        title: "Double Check Valve Backflow Prevention Assembly (DC)",
        id: "dc"
    });
    $.__views.__alloyId0.add($.__views.dc);
    $.__views.pvb = Ti.UI.createButton({
        height: "40",
        width: "90%",
        backgroundColor: "red",
        top: "40%",
        title: "Pressure Vacuum Breaker Backsiphonage Prevention Assembly (PVB)",
        id: "pvb"
    });
    $.__views.__alloyId0.add($.__views.pvb);
    $.__views.svb = Ti.UI.createButton({
        height: "40",
        width: "90%",
        backgroundColor: "red",
        top: "50%",
        title: "Spill-Resistant Pressure Vacuum Breaker Backsiphonage prevention Assembly(SVB)",
        id: "svb"
    });
    $.__views.__alloyId0.add($.__views.svb);
    $.__views.rpda = Ti.UI.createButton({
        height: "40",
        width: "90%",
        backgroundColor: "red",
        top: "60%",
        title: "Reduced Pressure Principle-Detector Backflow Prevention Assembly(RPDA)",
        id: "rpda"
    });
    $.__views.__alloyId0.add($.__views.rpda);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.newInspection;
    $.rp.addEventListener("click", openContact);
    $.dc.addEventListener("click", openContact);
    $.pvb.addEventListener("click", openContact);
    $.svb.addEventListener("click", openContact);
    $.rpda.addEventListener("click", openContact);
    Ti.App.addEventListener("customerSave", openModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
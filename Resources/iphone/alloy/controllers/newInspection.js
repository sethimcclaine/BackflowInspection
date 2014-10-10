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
        null === customerInfoView && (customerInfoView = Alloy.createController("customerInfo", {
            win: win,
            testType: e.source.id
        }).getView());
        win.add(customerInfoView);
    }
    function close() {
        win.close();
    }
    function openModel(e) {
        var model = e.testType;
        var modelController = Alloy.createController(model + "/" + model, {});
        var modelView = modelController.getView();
        modelView.open();
        close();
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
        top: 40,
        text: "Which model are you inspecting",
        id: "modelLabel"
    });
    $.__views.__alloyId0.add($.__views.modelLabel);
    $.__views.rp = Ti.UI.createButton({
        height: 40,
        width: 600,
        backgroundColor: "red",
        borderRadius: 20,
        top: 100,
        title: "Reduced Pressure Principle Backflow Prevention Assembly (RP)",
        id: "rp"
    });
    $.__views.__alloyId0.add($.__views.rp);
    $.__views.dc = Ti.UI.createButton({
        height: 40,
        width: 600,
        backgroundColor: "red",
        borderRadius: 20,
        top: 175,
        title: "Double Check Valve Backflow Prevention Assembly (DC)",
        id: "dc"
    });
    $.__views.__alloyId0.add($.__views.dc);
    $.__views.pvb = Ti.UI.createButton({
        height: 40,
        width: 600,
        backgroundColor: "red",
        borderRadius: 20,
        top: 250,
        title: "Pressure Vacuum Breaker Backsiphonage Prevention Assembly (PVB)",
        id: "pvb"
    });
    $.__views.__alloyId0.add($.__views.pvb);
    $.__views.svb = Ti.UI.createButton({
        height: 40,
        width: 600,
        backgroundColor: "red",
        borderRadius: 20,
        top: 325,
        title: "Spill-Resistant Pressure Vacuum Breaker Backsiphonage prevention Assembly(SVB)",
        id: "svb"
    });
    $.__views.__alloyId0.add($.__views.svb);
    $.__views.rpda = Ti.UI.createButton({
        height: 40,
        width: 600,
        backgroundColor: "red",
        borderRadius: 20,
        top: 400,
        title: "Reduced Pressure Principle-Detector Backflow Prevention Assembly(RPDA)",
        id: "rpda"
    });
    $.__views.__alloyId0.add($.__views.rpda);
    $.__views.cancel = Ti.UI.createButton({
        height: 40,
        width: 200,
        backgroundColor: "red",
        borderRadius: 20,
        bottom: 40,
        title: "Cancel",
        id: "cancel"
    });
    $.__views.__alloyId0.add($.__views.cancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.newInspection;
    var customerInfoView = null;
    $.rp.addEventListener("click", openContact);
    $.dc.addEventListener("click", openContact);
    $.pvb.addEventListener("click", openContact);
    $.svb.addEventListener("click", openContact);
    $.rpda.addEventListener("click", openContact);
    $.cancel.addEventListener("click", close);
    Ti.App.addEventListener("customerSave", openModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
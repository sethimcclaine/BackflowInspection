function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openModel() {
        var modelController = Alloy.createController("requiredEquipment", {});
        var modelView = modelController.getView();
        modelView.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inspection";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.inspection = Ti.UI.createWindow({
        id: "inspection"
    });
    $.__views.inspection && $.addTopLevelView($.__views.inspection);
    $.__views.__alloyId0 = Ti.UI.createView({
        backgroundColor: "white",
        id: "__alloyId0"
    });
    $.__views.inspection.add($.__views.__alloyId0);
    $.__views.modelLabel = Ti.UI.createLabel({
        top: "10%",
        text: "Which model are you inspecting",
        id: "modelLabel"
    });
    $.__views.__alloyId0.add($.__views.modelLabel);
    $.__views.rp = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        top: "20%",
        title: "Reduced Pressure Principle Backflow Prevention Assembly (RP)",
        id: "rp"
    });
    $.__views.__alloyId0.add($.__views.rp);
    $.__views.modelB = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        top: "30%",
        title: "Model B",
        id: "modelB"
    });
    $.__views.__alloyId0.add($.__views.modelB);
    $.__views.modelC = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        top: "40%",
        title: "Model C",
        id: "modelC"
    });
    $.__views.__alloyId0.add($.__views.modelC);
    $.__views.modelD = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        top: "50%",
        title: "Model D",
        id: "modelD"
    });
    $.__views.__alloyId0.add($.__views.modelD);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.rp.addEventListener("click", openModel);
    $.modelB.addEventListener("click", openModel);
    $.modelC.addEventListener("click", openModel);
    $.modelD.addEventListener("click", openModel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function newInspection() {
        var newInspectionController = Alloy.createController("newInspection");
        var view = newInspectionController.getView();
        view.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.welcome = Ti.UI.createLabel({
        top: 40,
        text: "Welcome to the Backflow Inspection App",
        id: "welcome"
    });
    $.__views.index.add($.__views.welcome);
    $.__views.newInspection = Ti.UI.createButton({
        height: 40,
        width: 200,
        backgroundColor: "red",
        borderRadius: 20,
        top: 100,
        title: "New Inspection",
        id: "newInspection"
    });
    $.__views.index.add($.__views.newInspection);
    $.__views.contInspection = Ti.UI.createButton({
        height: 40,
        width: 200,
        backgroundColor: "red",
        borderRadius: 20,
        top: 175,
        title: "Continue Inspection",
        id: "contInspection"
    });
    $.__views.index.add($.__views.contInspection);
    $.__views.histInspection = Ti.UI.createButton({
        height: 40,
        width: 200,
        backgroundColor: "red",
        borderRadius: 20,
        top: 250,
        title: "Inspection History",
        id: "histInspection"
    });
    $.__views.index.add($.__views.histInspection);
    $.__views.settings = Ti.UI.createButton({
        height: 40,
        width: 200,
        backgroundColor: "red",
        borderRadius: 20,
        top: 325,
        title: "Settings",
        id: "settings"
    });
    $.__views.index.add($.__views.settings);
    $.__views.copyright = Ti.UI.createLabel({
        bottom: 40,
        text: "Backflow Inspection App by Seth McClaine",
        id: "copyright"
    });
    $.__views.index.add($.__views.copyright);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.newInspection.addEventListener("click", newInspection);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
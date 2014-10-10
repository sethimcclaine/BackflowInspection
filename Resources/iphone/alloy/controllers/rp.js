function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function updateView(controller) {
        var view = Alloy.createController(controller).getView();
        win.add(view);
    }
    function init() {
        var controller = "requiredEquipment";
        updateView(controller);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rp";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.rp = Ti.UI.createWindow({
        id: "rp"
    });
    $.__views.rp && $.addTopLevelView($.__views.rp);
    $.__views.__alloyId2 = Ti.UI.createView({
        top: 0,
        backgroundColor: "red",
        id: "__alloyId2"
    });
    $.__views.rp.add($.__views.__alloyId2);
    $.__views.title = Ti.UI.createLabel({
        top: "10%",
        text: "Reduced Pressure Principle Backflow Prevention Assembly (RP)",
        id: "title"
    });
    $.__views.__alloyId2.add($.__views.title);
    $.__views.requirments = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        title: "Requirements",
        id: "requirments"
    });
    $.__views.__alloyId2.add($.__views.requirments);
    $.__views.test1 = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        title: "Test 1",
        id: "test1"
    });
    $.__views.__alloyId2.add($.__views.test1);
    $.__views.test2 = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        title: "Test 2",
        id: "test2"
    });
    $.__views.__alloyId2.add($.__views.test2);
    $.__views.test3 = Ti.UI.createButton({
        height: "20",
        width: "60",
        backgroundColor: "red",
        title: "Test 3",
        id: "test3"
    });
    $.__views.__alloyId2.add($.__views.test3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.rp;
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function close() {
        win.close();
    }
    function updateView(e) {
        var controller = e.source.id;
        if (null !== lastView) {
            win.remove(views[lastView]);
            lastView = null;
        }
        views[controller] || (views[controller] = Alloy.createController("rp/" + controller).getView());
        win.add(views[controller]);
        lastView = controller;
    }
    function init() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rp/rp";
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
    $.__views.__alloyId1 = Ti.UI.createView({
        top: 0,
        backgroundColor: "blue",
        id: "__alloyId1"
    });
    $.__views.rp.add($.__views.__alloyId1);
    $.__views.home = Ti.UI.createButton({
        height: "20",
        width: "120",
        backgroundColor: "red",
        top: 40,
        left: 10,
        title: "Home",
        id: "home"
    });
    $.__views.__alloyId1.add($.__views.home);
    $.__views.title = Ti.UI.createLabel({
        top: 40,
        text: "Reduced Pressure Principle Backflow Prevention Assembly (RP)",
        id: "title"
    });
    $.__views.__alloyId1.add($.__views.title);
    $.__views.requiredEquipment = Ti.UI.createButton({
        height: "20",
        width: "120",
        backgroundColor: "red",
        left: 0,
        bottom: 10,
        title: "Requirements",
        id: "requiredEquipment"
    });
    $.__views.__alloyId1.add($.__views.requiredEquipment);
    $.__views.test1 = Ti.UI.createButton({
        height: "20",
        width: "120",
        backgroundColor: "red",
        left: "30%",
        bottom: 10,
        title: "Test 1",
        id: "test1"
    });
    $.__views.__alloyId1.add($.__views.test1);
    $.__views.test2 = Ti.UI.createButton({
        height: "20",
        width: "120",
        backgroundColor: "red",
        right: "30%",
        bottom: 10,
        title: "Test 2",
        id: "test2"
    });
    $.__views.__alloyId1.add($.__views.test2);
    $.__views.test3 = Ti.UI.createButton({
        height: "20",
        width: "120",
        backgroundColor: "red",
        right: 0,
        bottom: 10,
        title: "Test 3",
        id: "test3"
    });
    $.__views.__alloyId1.add($.__views.test3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var win = $.rp;
    var views = {};
    var lastView = null;
    $.requiredEquipment.addEventListener("click", updateView);
    $.test1.addEventListener("click", updateView);
    $.test2.addEventListener("click", updateView);
    $.test3.addEventListener("click", updateView);
    $.home.addEventListener("click", close);
    init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
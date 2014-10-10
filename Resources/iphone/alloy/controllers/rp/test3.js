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
    this.__controllerPath = "rp/test3";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.test3 = Ti.UI.createView({
        backgroundColor: "white",
        bottom: 40,
        top: 40,
        id: "test3"
    });
    $.__views.test3 && $.addTopLevelView($.__views.test3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "test3",
        id: "__alloyId4"
    });
    $.__views.test3.add($.__views.__alloyId4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
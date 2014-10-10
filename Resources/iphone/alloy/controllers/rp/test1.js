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
    this.__controllerPath = "rp/test1";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.test1 = Ti.UI.createView({
        backgroundColor: "white",
        bottom: 40,
        top: 40,
        id: "test1"
    });
    $.__views.test1 && $.addTopLevelView($.__views.test1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "test1",
        id: "__alloyId2"
    });
    $.__views.test1.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
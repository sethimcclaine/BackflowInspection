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
    function customerSave() {
        console.log(args);
        customerData = {
            testType: args.testType,
            name: $.customerName.value,
            address: $.customerAddress.value,
            model: $.customerModel.value,
            inspectionLocation: $.inspectionLocation.value,
            inspectionDate: $.inspectionDate.value
        };
        Ti.App.fireEvent("customerSave", customerData);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "customerInfo";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.customerInfoView = Ti.UI.createView({
        backgroundColor: "blue",
        id: "customerInfoView"
    });
    $.__views.customerInfoView && $.addTopLevelView($.__views.customerInfoView);
    $.__views.nameLbl = Ti.UI.createLabel({
        top: "10%",
        left: "10%",
        text: "Customer Name:",
        id: "nameLbl"
    });
    $.__views.customerInfoView.add($.__views.nameLbl);
    $.__views.customerName = Ti.UI.createTextField({
        backgroundColor: "white",
        height: "20",
        width: "200",
        top: "10%",
        left: "40%",
        id: "customerName"
    });
    $.__views.customerInfoView.add($.__views.customerName);
    $.__views.addressLbl = Ti.UI.createLabel({
        top: "20%",
        left: "10%",
        text: "Customer Address:",
        id: "addressLbl"
    });
    $.__views.customerInfoView.add($.__views.addressLbl);
    $.__views.customerAddress = Ti.UI.createTextField({
        backgroundColor: "white",
        height: "20",
        width: "200",
        top: "20%",
        left: "40%",
        id: "customerAddress"
    });
    $.__views.customerInfoView.add($.__views.customerAddress);
    $.__views.modelLbl = Ti.UI.createLabel({
        top: "30%",
        left: "10%",
        text: "Customer Model:",
        id: "modelLbl"
    });
    $.__views.customerInfoView.add($.__views.modelLbl);
    $.__views.customerModel = Ti.UI.createTextField({
        backgroundColor: "white",
        height: "20",
        width: "200",
        top: "30%",
        left: "40%",
        id: "customerModel"
    });
    $.__views.customerInfoView.add($.__views.customerModel);
    $.__views.inspectionLocationLbl = Ti.UI.createLabel({
        top: "50%",
        left: "10%",
        text: "Inspection Location:",
        id: "inspectionLocationLbl"
    });
    $.__views.customerInfoView.add($.__views.inspectionLocationLbl);
    $.__views.inspectionLocation = Ti.UI.createTextField({
        backgroundColor: "white",
        height: "20",
        width: "200",
        top: "40%",
        left: "40%",
        id: "inspectionLocation"
    });
    $.__views.customerInfoView.add($.__views.inspectionLocation);
    $.__views.inspectionDateLbl = Ti.UI.createLabel({
        top: "40%",
        left: "10%",
        text: "Inspection Date:",
        id: "inspectionDateLbl"
    });
    $.__views.customerInfoView.add($.__views.inspectionDateLbl);
    $.__views.inspectionDate = Ti.UI.createTextField({
        backgroundColor: "white",
        height: "20",
        width: "200",
        top: "50%",
        left: "40%",
        id: "inspectionDate"
    });
    $.__views.customerInfoView.add($.__views.inspectionDate);
    $.__views.save = Ti.UI.createButton({
        height: "20",
        width: "200",
        backgroundColor: "red",
        bottom: 10,
        right: 10,
        title: "Save",
        id: "save"
    });
    $.__views.customerInfoView.add($.__views.save);
    $.__views.cancel = Ti.UI.createButton({
        height: "20",
        width: "200",
        backgroundColor: "red",
        bottom: 10,
        left: 10,
        title: "Cancel",
        id: "cancel"
    });
    $.__views.customerInfoView.add($.__views.cancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var win = args.win;
    $.save.addEventListener("click", customerSave);
    $.cancel.addEventListener("click", close);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
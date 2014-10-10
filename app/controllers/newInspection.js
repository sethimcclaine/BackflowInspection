/**
 * 2014-08-09
 * Created by Seth McClaine
 *
 * @author Seth McClaine
 */

// Dependencies

// Constants

// Private Properties
var self = this;
var args = arguments[0] || {};
var win = $.newInspection;
var customerInfoView = null;

// Private Methods

// Public Properties
function openContact(e) {
	if (customerInfoView === null) {
		customerInfoView = Alloy.createController('customerInfo', {win: win, testType: e.source.id}).getView();
	}
	win.add(customerInfoView);
}
function close() {
	win.close();
}

function openModel(e) {
	var model = e.testType; //not sure if thats right
	var modelController = Alloy.createController(model+'/'+model, {});
	var modelView = modelController.getView();
	modelView.open();
	close();
}


// Public Methods

// Event Registration
$.rp.addEventListener('click', openContact);
$.dc.addEventListener('click', openContact);
$.pvb.addEventListener('click', openContact);
$.svb.addEventListener('click', openContact);
$.rpda.addEventListener('click', openContact);
$.cancel.addEventListener('click', close);

Ti.App.addEventListener('customerSave', openModel);
//Initalization

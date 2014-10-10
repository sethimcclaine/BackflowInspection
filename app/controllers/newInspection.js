/**
 * 2014-08-09
 * Created by Seth McClaine
 *
 * @author Seth McClaine
 */

// Dependencies

// Constants

// Private Properties
var args = arguments[0] || {};
var win = $.newInspection;

// Private Methods

// Public Properties
function openContact(e) {
	var customerInfoView = Alloy.createController('customerInfo', {testType: e.source.id}).getView();
	win.add(customerInfoView);
}
function openModel(e) {
	//*
	var model = e.testType; //not sure if thats right
	var modelController = Alloy.createController(model, {});
	/*/

	var modelController = Alloy.createController('requiredEquipment', {});
	//*/
	var modelView = modelController.getView();
	modelView.open();
}


// Public Methods

// Event Registration
$.rp.addEventListener('click', openContact);
$.dc.addEventListener('click', openContact);
$.pvb.addEventListener('click', openContact);
$.svb.addEventListener('click', openContact);
$.rpda.addEventListener('click', openContact);

Ti.App.addEventListener('customerSave', openModel);
//Initalization

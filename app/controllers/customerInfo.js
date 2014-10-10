/**
 * 2014-08-09
 * Created by Seth McClaine
 *
 * @author Seth McClaine
 * Pg. 126
 */

// Dependencies

// Constants

// Private Properties
var args = arguments[0] || {};
var win = args.win;

// Private Methods
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
	Ti.App.fireEvent('customerSave', customerData);
}

// Public Properties

// Public Methods

// Event Registration
$.save.addEventListener('click', customerSave);
$.cancel.addEventListener('click', close);

// Initialization
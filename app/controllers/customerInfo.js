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

// Private Methods
function customerSave() {
	console.log(args);
	customerData = {
		testType: args.testType,
		name: $.customerName.value,
		address: $.customerAddress.value,
		model: $.customerModel.value, 
		inspectionDate: $.inspectionDate.value
	};
	Ti.App.fireEvent('customerSave', customerData);
}

// Public Properties

// Public Methods

// Event Registration
$.save.addEventListener('click', customerSave);

// Initialization
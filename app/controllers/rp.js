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
var win = $.rp;

// Private Methods
function updateView(controller) {
	var view = Alloy.createController(controller).getView();
	win.add(view);
}
function init() {
	var controller = 'requiredEquipment';
	updateView(controller);
}

// Public Properties

// Public Methods

// Event Registration

// Initialization
init();

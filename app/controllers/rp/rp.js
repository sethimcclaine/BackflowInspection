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
var views = {};
var lastView = null;

// Private Methods
function close() {
	win.close();
}
function updateView(e) {
	var controller = e.source.id;
	if(lastView !== null) {
		win.remove(views[lastView]);
		lastView = null;
	}
	if(!views[controller]) {
		views[controller] = Alloy.createController('rp/'+controller).getView();
	}
	win.add(views[controller]);
	lastView = controller;
}
function init() {
	/*
	var controller = 'requiredEquipment';
	updateView(controller);*/
}

// Public Properties

// Public Methods

// Event Registration
$.requiredEquipment.addEventListener('click', updateView);
$.test1.addEventListener('click', updateView);
$.test2.addEventListener('click', updateView);
$.test3.addEventListener('click', updateView);
$.home.addEventListener('click', close);
// Initialization
init();

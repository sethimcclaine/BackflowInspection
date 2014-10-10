/**
 * 2014-08-09
 * Created by Seth McClaine
 *
 * @author Seth McClaine
 */

// Dependencies

// Constants

// Private Properties

// Private Methods
/**
 * start a new inspection 
 * @author Seth McClaine
 */
function newInspection() {
	var newInspectionController = Alloy.createController('newInspection');
	var view = newInspectionController.getView();
	view.open();
}

/**
 * @author Seth McClaine
 */
function openSettings() {
	var settingsController = Alloy.createController('settings', {});
	var settingsView = settingsController.getView();
	view.open();
}


// Public Properties

// Public Methods

// Event Registration
$.newInspection.addEventListener('click', newInspection);
//$.contInspection.addEventListener('click', contInspection);
//$.histInspection.addEventListener('click', histInspection);
//$.settings.click(openSettings);

// Initialization
$.index.open();



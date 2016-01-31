class ApplicationView {
	ready() {
		var componentName, viewName;
  	componentName = $('#outlet').data('component');
  	viewName = $('#outlet').data('view');

		var view = eval("new " + componentName + viewName + "()");
		view.render();
	}
}

var app = new ApplicationView;

$(document).ready(app.ready);
$(document).on('page:load', app.ready);

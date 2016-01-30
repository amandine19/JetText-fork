var ready;

window.Views || (window.Views = {});

Views.ApplicationView = (function() {
  function ApplicationView() {}

  ApplicationView.prototype.render = function() {
    return this.name = "tests";
  };

  return ApplicationView;

})();

ready = function() {
  var componentName, error, viewName;
  componentName = $('#outlet').data('component');
  viewName = $('#outlet').data('view');
  window.ApplicationView = (function() {
    var error1;
    try {
      return eval("new Views." + componentName + "." + viewName + "View()");
    } catch (error1) {
      error = error1;
      return new Views.ApplicationView();
    }
  })();
  return window.ApplicationView.render();
};

$(document).ready(ready);

$(document).on('page:load', ready);

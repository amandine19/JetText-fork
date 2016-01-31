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

var base,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(base = window.Views).Containers || (base.Containers = {});

Views.Containers.IndexView = (function(superClass) {
  extend(IndexView, superClass);

  function IndexView() {
    return IndexView.__super__.constructor.apply(this, arguments);
  }

  IndexView.prototype.render = function() {
    IndexView.__super__.render.call(this, name);
    console.log("index-view");
    return $('#tester').click(function() {
      console.log(IndexView.__super__.render.call(this, name));
      return console.log("ko");
    });
  };

  return IndexView;

})(Views.ApplicationView);

var base,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

(base = window.Views).Containers || (base.Containers = {});

Views.Containers.MyView = (function(superClass) {
  extend(MyView, superClass);

  function MyView() {
    return MyView.__super__.constructor.apply(this, arguments);
  }

  MyView.prototype.render = function() {
    MyView.__super__.render.call(this);
    console.log("my-view");
    return $('#outlet').prepend('<h1>My from js</h1>');
  };

  MyView.prototype.cleanup = function() {
    return MyView.__super__.cleanup.call(this);
  };

  return MyView;

})(Views.ApplicationView);

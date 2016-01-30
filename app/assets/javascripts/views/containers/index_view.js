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
		console.log("index view");
		
    return $('#tester').click(function() {
      return console.log("ko..");
    });
  };

  return IndexView;

})(Views.ApplicationView);

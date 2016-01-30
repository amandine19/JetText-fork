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
		console.log("my view");
    return $('#outlet').prepend('<h1>My view appended</h1>');
  };

  MyView.prototype.cleanup = function() {
    return MyView.__super__.cleanup.call(this);
  };

  return MyView;

})(Views.ApplicationView);

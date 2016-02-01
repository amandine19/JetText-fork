'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);
	}

	_createClass(App, [{
		key: 'ready',
		value: function ready() {
			var componentName, viewName;
			componentName = $('#outlet').data('component');
			viewName = $('#outlet').data('view');
			try {
				var view = eval("new " + componentName + viewName + "()");
				view.render();
			} catch (err) {
				console.error("outer", err.message);
			}
		}
	}]);

	return App;
}();

var app = new App();

$(document).ready(app.ready);
$(document).on('page:load', app.ready);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//     ____    ____
//      /__ _/_ /_\   _/_
//     //_  /  //_ \/ /
// /__/ \__/_ / \__/\/_
// 
// views
// |-containers
// | |-index

var ContainersIndex = function (_App) {
  _inherits(ContainersIndex, _App);

  function ContainersIndex() {
    _classCallCheck(this, ContainersIndex);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersIndex).apply(this, arguments));
  }

  _createClass(ContainersIndex, [{
    key: "render",
    value: function render() {
      console.log("containers/index"); //file
    }
  }]);

  return ContainersIndex;
}(App);

var ContainersIndexPart = function (_ContainersIndex) {
  _inherits(ContainersIndexPart, _ContainersIndex);

  function ContainersIndexPart() {
    _classCallCheck(this, ContainersIndexPart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersIndexPart).apply(this, arguments));
  }

  _createClass(ContainersIndexPart, [{
    key: "testTry",
    value: function testTry() {
      console.log("index-view-part");
    }
  }]);

  return ContainersIndexPart;
}(ContainersIndex);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//     ____    ____
//      /__ _/_ /_\   _/_
//     //_  /  //_ \/ /
// /__/ \__/_ / \__/\/_
// 
// views
// |-containers
// | |-my

var ContainersNew = function (_App) {
  _inherits(ContainersNew, _App);

  function ContainersNew() {
    _classCallCheck(this, ContainersNew);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersNew).apply(this, arguments));
  }

  _createClass(ContainersNew, [{
    key: "render",
    value: function render() {
      console.log("containers/new"); //file
      CKEDITOR.disableAutoInline = true;
      CKEDITOR.inline('editor1');
    }
  }]);

  return ContainersNew;
}(App);
//# sourceMappingURL=all.js.map

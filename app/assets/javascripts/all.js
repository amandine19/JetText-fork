'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationView = function () {
	function ApplicationView() {
		_classCallCheck(this, ApplicationView);
	}

	_createClass(ApplicationView, [{
		key: 'ready',
		value: function ready() {
			var componentName, viewName;
			componentName = $('#outlet').data('component');
			viewName = $('#outlet').data('view');

			var view = eval("new " + componentName + viewName + "()");
			view.render();
		}
	}]);

	return ApplicationView;
}();

var app = new ApplicationView();

$(document).ready(app.ready);
$(document).on('page:load', app.ready);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainersIndex = function (_ApplicationView) {
  _inherits(ContainersIndex, _ApplicationView);

  function ContainersIndex() {
    _classCallCheck(this, ContainersIndex);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersIndex).apply(this, arguments));
  }

  _createClass(ContainersIndex, [{
    key: 'render',
    value: function render() {
      $('h1').first().append(' from js');
      $('#outlet').css({ "color": "red" });

      var p = new ContainersIndexPart();
      p.testTry();
      console.log("index-view");
      $('#tester').click(function () {
        console.log("ok");
      });
    }
  }]);

  return ContainersIndex;
}(ApplicationView);

var ContainersIndexPart = function (_ContainersIndex) {
  _inherits(ContainersIndexPart, _ContainersIndex);

  function ContainersIndexPart() {
    _classCallCheck(this, ContainersIndexPart);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersIndexPart).apply(this, arguments));
  }

  _createClass(ContainersIndexPart, [{
    key: 'testTry',
    value: function testTry() {
      console.log("index-view-part");
      $('#tester').click(function () {
        console.log("part");
      });
    }
  }]);

  return ContainersIndexPart;
}(ContainersIndex);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainersMy = function (_ApplicationView) {
  _inherits(ContainersMy, _ApplicationView);

  function ContainersMy() {
    _classCallCheck(this, ContainersMy);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersMy).apply(this, arguments));
  }

  _createClass(ContainersMy, [{
    key: 'render',
    value: function render() {
      $('#outlet').prepend('<h1>My from js</h1>');
      console.log("my-view");
    }
  }]);

  return ContainersMy;
}(ApplicationView);
//# sourceMappingURL=all.js.map

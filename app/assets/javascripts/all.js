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
// | |-my

var ContainersEdit = function (_App) {
  _inherits(ContainersEdit, _App);

  function ContainersEdit() {
    _classCallCheck(this, ContainersEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersEdit).apply(this, arguments));
  }

  _createClass(ContainersEdit, [{
    key: "render",
    value: function render() {
      console.log("containers/edit"); //file
    }
  }]);

  return ContainersEdit;
}(App);
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
    }
  }]);

  return ContainersNew;
}(App);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainersShow = function (_App) {
	_inherits(ContainersShow, _App);

	function ContainersShow() {
		_classCallCheck(this, ContainersShow);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ContainersShow).apply(this, arguments));
	}

	_createClass(ContainersShow, [{
		key: "render",
		value: function render() {
			console.log("containers/show");
		}
	}]);

	return ContainersShow;
}(App);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagesShow = function (_App) {
  _inherits(PagesShow, _App);

  function PagesShow() {
    _classCallCheck(this, PagesShow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PagesShow).apply(this, arguments));
  }

  _createClass(PagesShow, [{
    key: "render",
    value: function render() {
      console.log("pages/show");
      $('#editor1').css({ "height": "500px" });

      tinymce.init({
        selector: '#editor1',
        plugins: "code link visualblocks uploader formula definition",
        menubar: false,
        extended_valid_elements: "span[!class]",
        toolbar: "undo redo | formatselect | link code | uploader formula definition",
        visualblocks_default_state: false, //show info boxes around elements 
        force_br_newlines: false,
        force_p_newlines: true,
        forced_root_block: '',
        content_css: '/assets/tinymce.css',
        setup: function(editor) {
          editor.on('init', function(args) {
            tinymce.get("editor1").execCommand(
                'mceInsertRawHTML',
                false,
                '<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"]]},displayAlign: "center",displayIndent: "0.1em"});</script><script type="text/javascript" src="/assets/MathJax/MathJax.js?config=TeX-AMS_HTML" defer></script>'
            );
            var QUEUE = MathJax.Hub.queue;  // shorthand for the queue
            var math = null;    // the element jax for the math output, and the box it's in
            QUEUE.Push(function () {
              math = MathJax.Hub.getAllJax(editor.id);
            });
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,editor.getContent()]);
            
            var iframe = $("#" + args.target.id + "_ifr");
            var content = $(iframe[0].contentWindow.document.body);
            
            content.mouseup(function() {
              console.log(getIframeSelectionText(iframe[0]));
              var s = getIframeSelectionText(iframe[0]);
              var selected = $.parseHTML(getIframeSelectionText(iframe[0]));
              /*.wrap('<span style="background:red"></span>');*/
            });
            
            /*text = text.replace(/(\{\{.*?\}\})/ig, '<span class="formula" style="background:yellow">$1</span>').replace(/\{\{|\}\}/g, '');
            content.html(text);*/
  
            /*var jax = content.html().includes('$');
            jax.each(function(){
              $(this).mouseover(function(){
                var formula = $(this).html();
                ed.windowManager.open({
                  title: 'Jax',
                  html: formula,
                  width: 400,
                  height: 150,
                  onopen: function() {
                    MathJax.Hub.Queue(
                      ["Typeset",MathJax.Hub,formula]
                    );
                  }
                });
              });

              <span class="formula">{{$$F1$$}}</span>

              $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

              {{any text}}

              $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
            });*/
          });
        }
      });

      addPageBox();
    }
  }]);

  return PagesShow;
}(App);

function addPageBox() {
  $('.hidden_elem').hide();
  $('#add_new_page_button').click(function () {
    $('#add_new_page').toggle();
  });
}

// selected text in the editor's iframe
function getIframeSelectionText(iframe) {
  var win = iframe.contentWindow;
  var doc = win.document;

  if (win.getSelection) {
    return win.getSelection().toString();
  } else if (doc.selection && doc.selection.createRange) {
    return doc.selection.createRange().text;
  }
}


//# sourceMappingURL=all.js.map

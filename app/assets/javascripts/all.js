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
'use strict';

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
    key: 'render',
    value: function render() {
      console.log("pages/show");

      $(document).on('page:receive', function () {
        tinymce.remove(); //fixes turbolinks issue
      });

      $('#editor1').css({ "height": "500px" });

      tinymce.init({
        selector: '#editor1',
        plugins: "code link visualblocks uploader formula glossary",
        menubar: false,
        extended_valid_elements: "span[!class]",
        toolbar: "undo redo | formatselect | link code | uploader formula glossary",
        visualblocks_default_state: false, //show info boxes around elements
        force_br_newlines: false,
        force_p_newlines: true,
        forced_root_block: '',
        content_css: '/assets/tinymce.css',
        style_formats: [{ title: 'Bold text', inline: 'strong' }, { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } }, { title: 'Red header', block: 'h1', styles: { color: '#ff0000' } }, { title: 'Badge', inline: 'span', styles: { display: 'inline-block', border: '1px solid #2276d2', 'border-radius': '5px', padding: '2px 5px', margin: '0 2px', color: '#2276d2' } }, { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' }],
        formats: {
          alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
          aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
          alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
          alignfull: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' },
          bold: { inline: 'span', 'classes': 'bold' },
          italic: { inline: 'span', 'classes': 'italic' },
          underline: { inline: 'span', 'classes': 'underline', exact: true },
          strikethrough: { inline: 'del' },
          customformat: { inline: 'span', styles: { color: '#00ff00', fontSize: '20px' }, attributes: { title: 'My custom format' }, classes: 'example1' }
        },
        theme_advanced_blockformats: "p,div,h1,h2,h3,h4,h5,h6,blockquote,dt,dd,code,samp",
        setup: function setup(editor) {
          editor.on('init', function (args) {
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, editor.getContent()], function () {
              editor.getContent();
            });
            MathJax.Hub.Queue(function () {
              editor.getContent();
            });
            editor.setContent(editor.getContent());

            var iframe = $("#" + args.target.id + "_ifr");
            var content = $(iframe[0].contentWindow.document.body);
            var iframeElm = $.parseHTML(content.html());

            $(iframeElm).contents().each(function () {
              $(this).click(function (e) {});
            });

            function clickIframeElm(element, index, array) {
              $(element).addClass('idok');
              $(element).click(function (e) {
                console.log(e);
              });
            }

            var selected_text = "";
            content.mouseup(function () {
              selected_text = getIframeSelectionText(iframe[0]);
              var selected = $.parseHTML(getIframeSelectionText(iframe[0]));
            });
          });
        }
      });

      addPageBox();
    }
  }]);

  return PagesShow;
}(App);

// create a new page from the menu

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

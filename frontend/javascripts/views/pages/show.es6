class PagesShow extends App {
	render() {
		console.log("pages/show");

		$(document).on('page:receive',function(){
      tinymce.remove(); //fixes turbolinks issue
    });

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
          var iframeElm = $.parseHTML(content.html());

          $(iframeElm).contents().each(function() {
            $(this).click(function(e) {
            });
          });

          for (var i=0; i<iframeElm.length; i++) {
            $(iframeElm[i]).css({"background":"grey"});
            $(iframeElm[i]).click(function(e) {
            });
          }
          
          function clickIframeElm(element, index, array) {
            $(element).addClass('idok');
            $(element).click(function(e) {
              console.log(e);
            });
          }
          
          content.mouseup(function() {
            console.log(getIframeSelectionText(iframe[0]));
            var s = getIframeSelectionText(iframe[0]);
            var selected = $.parseHTML(getIframeSelectionText(iframe[0]));
          });
        
        });
      }
    });

    addPageBox();
	}
}

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
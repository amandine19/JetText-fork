class PagesShow extends App {
  render() {
    console.log("pages/show");

    $(document).on('page:receive',function(){
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
      style_formats: [
        { title: 'Bold text', inline: 'strong' },
        { title: 'Red text', inline: 'span', styles: { color: '#ff0000' } },
        { title: 'Red header', block: 'h1', styles: { color: '#ff0000' } },
        { title: 'Badge', inline: 'span', styles: { display: 'inline-block', border: '1px solid #2276d2', 'border-radius': '5px', padding: '2px 5px', margin: '0 2px', color: '#2276d2' } },
        { title: 'Table row 1', selector: 'tr', classes: 'tablerow1' }
      ],
      formats: {
        alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'left' },
        aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'center' },
        alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'right' },
        alignfull: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'full' },
        bold: { inline: 'span', 'classes': 'bold' },
        italic: { inline: 'span', 'classes': 'italic' },
        underline: { inline: 'span', 'classes': 'underline', exact: true },
        strikethrough: { inline: 'del' },
        customformat: { inline: 'span', styles: { color: '#00ff00', fontSize: '20px' }, attributes: { title: 'My custom format' }, classes: 'example1' },
      },
      theme_advanced_blockformats : "p,div,h1,h2,h3,h4,h5,h6,blockquote,dt,dd,code,samp",
      setup: function(editor) {
        editor.on('init', function(args) {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, editor.getContent()], function() {
            editor.getContent();
          });
          MathJax.Hub.Queue(function() {
            editor.getContent();
          });
          editor.setContent(editor.getContent());
          
          var iframe = $("#" + args.target.id + "_ifr");
          var content = $(iframe[0].contentWindow.document.body);
          var iframeElm = $.parseHTML(content.html());

          $(iframeElm).contents().each(function() {
            $(this).click(function(e) {
            });
          });
          
          function clickIframeElm(element, index, array) {
            $(element).addClass('idok');
            $(element).click(function(e) {
              console.log(e);
            });
          }
          
          var selected_text = "";
          content.mouseup(function() {
            selected_text = getIframeSelectionText(iframe[0]);
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
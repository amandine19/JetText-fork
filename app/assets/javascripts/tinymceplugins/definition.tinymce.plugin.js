tinymce.PluginManager.add('definition', function(editor, url) {
    editor.addButton('definition', {
        type: 'button',
        title: 'Definition',
        icon: 'image',
        id: 'definition',
        onclick: function(e, args) {
            console.log(e, args);
            var selection = window.getSelection().toString();
            console.log(selection);
            editor.windowManager.open({
                title: 'Definition',
                html: '<textarea id="formula_content" style="width:100%;height:50%;padding: 5px"></textarea><div id="preview" style="width:100%;height:50%;padding: 5px">Preview</div>',
                buttons: [{
                    text: 'Submit',
                    onclick: 'submit'
                }, {
                    text: 'Cancel',
                    onclick: 'close'
                }],
                width: 400,
                height: 250,
                onopen: function(e) {
                    
                }
            });
        }
    });
});


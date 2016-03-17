tinymce.PluginManager.add('uploader', function(editor, url) {
    editor.addButton('uploader', {
        type: 'button',
        title: 'File uploader',
        icon: 'image',
        id: 'uploader',
        onclick: function() {
            editor.windowManager.open({
                title: 'File uploader',
                html: '<div id="uploadform"></div>',
                buttons: [{
                    text: 'Submit',
                    onclick: 'submit'
                }, {
                    text: 'Cancel',
                    onclick: 'close'
                }],
                width: 500,
                height: 325,
                onopen: function(e) {
                    $('#new_upload').clone().appendTo('#uploadform').show();
                },
                onsubmit: function(e) {
                   e.preventDefault();
                   $('#uploadform').find('#new_upload').submit();
                   var file = $('#uploadform').find('#upload_file')[0].files[0];
                   editor.insertContent('<img src="'+c_path + file.name+'" />');
                }
            });
        }
    });
});

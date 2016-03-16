tinymce.PluginManager.add('uploader', function(editor, url) {
    editor.addButton('uploader', {
        type: 'button',
        title: 'Insert image',
        icon: 'image',
        id: 'uploader',
        onclick: function() {
            // Open window
            editor.windowManager.open({
                title: 'Image Browser',
                url: '/uploads/new',
                width: 600,
                height: 400,
                oninsert: function (url, objVals) {
                    console.log('ok');
                    callback(url, objVals);
                },
                onsubmit: function(e) {
                    console.log('ok');
                    editor.insertContent('Title: ' + e.data.title);
                },
                onsubmit: function(e) {
                    console.log('ok');
                }
                /*body: [
                    { type: 'textbox', subtype: 'file', name: 'title', label: 'Title' }
                ],
                onsubmit: function(e) {
                    $.ajax({
                        type: "POST",
                        url: '/uploads_plugin/create',
                        data: { 
                            upload: { 
                                name: e.data.title,
                                file: e.data.title
                            }
                        }
                    });
                    editor.insertContent('<img src="' + e.data.title + ">");
                }*/
            });
        }
    });
});
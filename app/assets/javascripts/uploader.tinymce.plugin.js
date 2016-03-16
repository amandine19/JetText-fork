tinymce.PluginManager.add('uploader', function(editor, url) {
    // Add a button that opens a window
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
                width: 800,
                height: 550,
                oninsert: function (url, objVals) {
                    callback(url, objVals);
                },
                onsubmit: function(e) {
                    editor.insertContent('Title: ' + e.data.title);
                }
            });
        }
    });
});
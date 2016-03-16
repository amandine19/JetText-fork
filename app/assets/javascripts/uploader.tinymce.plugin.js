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
                width: 600,
                height: 400,
                oninsert: function (url, objVals) {
                    console.log($("#result"));
                    callback(url, objVals);
                },
                onsubmit: function(e) {
                    console.log($("#result"));
                    editor.insertContent('Title: ' + e.data.title);
                },
                onsubmit: function(e) {
                    console.log($("#result"));
                },
                onopen: function(e) {
                    console.log($("#result"));

                },
                body: [
                    { type: 'textbox', subtype: 'file', name: 'title', label: 'Title' }
                ],
            });
        }
    });
});
CKEDITOR.dialog.add('uploaderDialog', function(editor) {
    return {
        title: 'Uploader',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'html',
                        html: '<form class="new_upload" id="new_upload" enctype="multipart/form-data" action="/uploads" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" value="✓" type="hidden"><p><input class="uploader" name="upload[file]" id="upload_file" type="file"></p></form>'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            $('#new_upload').submit();
        }
    };
});
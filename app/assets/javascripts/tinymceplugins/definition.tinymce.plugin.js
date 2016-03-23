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
                html: '<input type="text" id="glossary_name" placeholder="name..." style="width:100%;height:20%;padding: 5px"><br><textarea id="glossary_description" placeholder="description..." style="width:100%;height:80%;padding: 5px"></textarea>',
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
                    
                },
                onsubmit: function(e) {
                    e.preventDefault();
                    $.ajax({
                        type: "POST",
                        url: '/glossaries',
                        data: {
                            glossary: {
                                name: $('#glossary_name').val(),
                                description: $('#glossary_description').val()
                            }
                        },
                        beforeSend: function(jqXHR, settings) {
                            jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
                        },
                        error: function(){
                            alert("An error ocurred");
                        },
                        success: function(){

                        }
                    });
                    editor.windowManager.close();
                    return;
                }
            });
        }
    });
});


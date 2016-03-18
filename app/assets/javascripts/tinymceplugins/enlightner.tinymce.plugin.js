tinymce.PluginManager.add('enlightner', function(editor, url) {
    
});


function enlightContent(args) {
    var iframe = $("#" + args.target.id + "_ifr");
    var content = $(iframe[0].contentWindow.document.body);
    var text = content.html();
    text = text.replace(/(\{\{.*?\}\})/ig, '<span class="formula">$1</span>');
    content.html(text);
}
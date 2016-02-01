$(function(){
	CKEDITOR.editorConfig = function (config) {

	  config.toolbar_mini = [
	    ["Bold",  "Italic",  "Underline",  "Strike",  "Subscript",  "Superscript", "-",
	    "NumberedList", "BulletedList", "Outdent", "Indent", "Blockquote", "-",
	    'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock', 'BidiLtr','BidiRtl', "Table", "Source"],
	  ];
	  config.toolbar = "simple";
	}
});
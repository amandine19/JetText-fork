(function() {
  CKEDITOR.plugins.addExternal('timestamp', '/assets/cke/plugins/timestamp/', 'plugin.js');
})();

CKEDITOR.editorConfig = function(config) {
    config.language = 'fr';

    config.extraPlugins = 'mathjax,timestamp';
    config.mathJaxLib = '/assets/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML';

    config.toolbarGroups = [
    	{ name: 'mathjax' },
			{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
			{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
			{ name: 'links' },
			{ name: 'insert' },
			{ name: 'forms' },
			{ name: 'tools' },
			{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
			{ name: 'others' },
			'/',
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
			{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
			{ name: 'styles' },
			{ name: 'colors' }
		];
};
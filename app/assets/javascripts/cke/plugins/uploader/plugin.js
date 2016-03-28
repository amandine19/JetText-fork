CKEDITOR.plugins.add( 'uploader', {

	init: function( editor ) {

		editor.addCommand( 'startUpload', {
			exec: function( editor ) {
				editor.insertHtml(  );
			}
		});

		editor.ui.addButton( 'Uploader', {
			label: 'Uploader',
			command: 'startUpload',
			toolbar: 'insert',
			icon: '/assets/cke/plugins/uploader/icons/uploader.png'
		});
	}
});
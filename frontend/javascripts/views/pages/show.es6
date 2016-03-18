class PagesShow extends App {
	render() {
		console.log("pages/show");
		$('#editor1').css({"height": "500px"});
      
    tinymce.init({
      selector: '#editor1',
      plugins: "code link visualblocks uploader mathslate",
      menubar: false,
      extended_valid_elements : "span[!class]",
      toolbar: "undo redo | formatselect | link code | uploader | mathslate",
      visualblocks_default_state: false, //show info boxes around elements  
      force_br_newlines : false,
      force_p_newlines : false,
      forced_root_block : '',
    });

	  addPageBox();
	}
}

function addPageBox() {
	$('.hidden_elem').hide();
	$('#add_new_page_button').click(function() {
		$('#add_new_page').toggle();
	});
}
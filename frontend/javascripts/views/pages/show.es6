class PagesShow extends App {
	render() {
		console.log("pages/show");
		AlloyEditor.editable('editor1');

		addPageBox();
	}
}

function addPageBox() {
	$('.hidden_elem').hide();
	$('#add_new_page_button').click(function() {
		$('#add_new_page').toggle();
	});
}
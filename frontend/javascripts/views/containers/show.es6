class ContainersShow extends App {
	render() {
		$('form#new_page').submit(function(e) {
			e.preventDefault();
			var name = $('#page_name').val();
			var container = $('#page_container_id').val();

			$.ajax({
				type: "POST",
				url: $(this).attr('action'),
				data: { page: { name: name, parent: '', container_id: container, user_id: currentUser } }
			}).success(function() {
				$('#pages_list > ul').append('<li>'+name+'</li>');
				$('form').get(0).reset();
			});

		  return false;
		});
	}
}
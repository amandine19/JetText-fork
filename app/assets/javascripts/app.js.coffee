#     ____    ____
#      /__ _/_ /_\   _/_
#     //_  /  //_ \/ /
# /__/ \__/_ / \__/\/_
#                   \
# app

window.Views ||= {}
class Views.ApplicationView

 	render: ->
   	this.name = "tests"

	ready = ->
	  componentName = $('#outlet').data('component')
	  viewName = $('#outlet').data('view')
	  window.ApplicationView = try
	    eval("new Views.#{componentName}.#{viewName}View()")
	  catch error
	    new Views.ApplicationView()
	  window.ApplicationView.render()


$(document).ready(ready)
$(document).on('page:load', ready)
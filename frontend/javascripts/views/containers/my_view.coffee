#     ____    ____
#      /__ _/_ /_\   _/_
#     //_  /  //_ \/ /
# /__/ \__/_ / \__/\/_
#                   \
# views
# |-containers
# | |-my_view

window.Views.Containers ||= {}
class Views.Containers.MyView extends Views.ApplicationView

 	render: ->
   	super()
    console.log("my-view")
   	$('#outlet').prepend('<h1>My from js</h1>')

 	cleanup: ->
   	super()
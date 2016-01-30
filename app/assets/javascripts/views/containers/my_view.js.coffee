#   ___        ____
#  /  _  __ __  /_\   _/_
# /  / \/_//_  //_ \/ /
# \__\_/ \_\__/ \__/\/_
#                    \
# views
# |-containers
# | |
# | |-my_view

window.Views.Containers ||= {}
class Views.Containers.MyView extends Views.ApplicationView

 	render: ->
   	super()
   	$('#outlet').prepend('<h1>My</h1>')

 	cleanup: ->
   	super()
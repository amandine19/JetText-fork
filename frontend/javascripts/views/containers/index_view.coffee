#     ____    ____
#      /__ _/_ /_\   _/_
#     //_  /  //_ \/ /
# /__/ \__/_ / \__/\/_
#                   \
# views
# |-containers
# | |
# | |-index_view

window.Views.Containers ||= {}
class Views.Containers.IndexView extends Views.ApplicationView

 render: ->
  super(name)
  console.log("index-view")
	  
  $('#tester').click ->
   console.log(super(name))
   console.log("ko")
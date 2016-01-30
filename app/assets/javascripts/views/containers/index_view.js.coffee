#   ___        ____
#  /  _  __ __  /_\   _/_
# /  / \/_//_  //_ \/ /
# \__\_/ \_\__/ \__/\/_
#                    \
# views
# |-containers
# | |
# | |-index_view

window.Views.Containers ||= {}
class Views.Containers.IndexView extends Views.ApplicationView

 	render: ->
  	super(name)
  	$('#outlet').find('p').click -> console.log("ok")
			
  	$('#my').click (e) ->
   		console.log($(this).html())
   		return
  


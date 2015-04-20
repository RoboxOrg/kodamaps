initialize = ->
  jQuery('document').find('[id^=map_canvas]').each (index) ->
    console.log @, index
    return
  return

window.onload = initialize

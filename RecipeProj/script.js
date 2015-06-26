$(document).ready(function() {
  console.log("Script included!");
  $('ul li').bind('click',function(){
  	$(this).unbind('click');
  	$(this).append('&#x2713;');
  })

  $('ol li').bind('click',function () {
  	$(this).unbind('click');
  	$('#keepTrack').remove();
  	$(this).before('<div id="keepTrack"><h4 style="color:yellow">You are here &#x21B4</h4></div>')
  })

  document.getElementById("hidden").onclick = function(){
  	document.getElementById("pizza").style.visibility = "hidden";
  }

});


/* JavaScripts. */

var hamburger = document.getElementById("hamburger");

hamburger.onclick = function(e) {
  var classList = hamburger.classList;

  if(classList.contains('open')) {
    classList.remove('open');
    setTimeout(function(){ classList.add('close')}, 1);
  }
  else {
    classList.remove('close');
    setTimeout(function(){ classList.add('open')}, 1);
  }
};


var filter = document.getElementById("filter").childNodes;

$(function() {
  $(".filter-container").mousemove(function(e) {

    var offset = $(this).offset();
    var mouseX = (e.pageX - offset.left);
    var mouseY = (e.pageY - offset.top);

    filter[3].innerHTML = "<fePointLight x='" + mouseX + "' y='" + mouseY + "' z='150' />";

  });
});

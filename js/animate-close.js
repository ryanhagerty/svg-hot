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

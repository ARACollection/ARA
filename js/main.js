$(document).ready(function(){
    $(this).scrollTop(0);
});

window.onload = function(){
}

function setCookie(cname, cvalue, exdays)
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function cookieCheck()
{
  var user = getCookie("hasVisited");
  if (user != "")
  {
    document.getElementById("splashScreen").classList.add('closed');
    document.getElementsByTagName("BODY")[0].classList.add('open');
  }
  else
  {
      var splashScreenClick = document.getElementById("splashScreen").addEventListener("click", function(){document.getElementById("splashScreen").classList.add('closed');document.getElementsByTagName("BODY")[0].classList.add('open')});
    setCookie("hasVisited", "filler", 30);
  }

}

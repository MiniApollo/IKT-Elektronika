window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("header h1").style.fontSize = "35px";
  } else {
    document.getElementById("header").style.padding = "60px 10px";
    document.getElementById("header h1").style.fontSize = "35px";
  }
} 
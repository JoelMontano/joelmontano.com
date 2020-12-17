document.body.onkeyup = function(event) {
  if (event.keyCode == 68) {
    document.body.classList.toggle("dark");
    var x = document.getElementById("welcometext");
    if(x.innerHTML === "Press D"){
      x.innerHTML = "Thanks!";
    }
      else{
        x.innerHTML =  "Press D";
      }
  }
}
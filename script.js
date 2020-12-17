document.body.onkeyup = function(event) {
  if (event.keyCode == 68) {
    // change the class of body to dark mode
    document.body.classList.toggle("dark");
  }
}
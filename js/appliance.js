
let Switch = document.getElementsByClassName('Switch')[0];
let button = document.getElementById('button');
button.addEventListener('click', function() {
  if (button.className == "right"){
   Switch.innerHTML = "Включен";
   button.classList.remove("right");
   button.classList.add("left");
  } else if (button.className == "left"){
   Switch.innerHTML = "Выключён";
   button.classList.remove("left");
   button.classList.add("right");
  }
 });

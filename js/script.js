window.onload = function() {
 let expend = document.getElementsByClassName('expend')[0];
 let header = document.getElementsByTagName('header')[0];

 expend.onclick = function() {
  header.classList.toggle("active");
 };
}

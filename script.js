window.onload=function(){
window.addEventListener("DOMContentLoaded", function() {
  	

var nameText = document.getElementById("nmtxt").value;
var emailText = document.getElementById("emtxt").value;
var subjectText = document.getElementById("subtxt").value;
var messageText = document.getElementById("msgtxt").value;


document.getElementbyId("submt").addEventListener("click", alert(nameText + emailText + subjectText + messageText));



})
}
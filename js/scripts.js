/* javascript for Pansy Potter
   Coded by Zac Croy, 21/11/20 */

function setCookie() {
	   alert("Please accept Cookies.");
	   var confirmMsg = "This site uses cookies. \nClick OK to accept, Cancel to reject."
	   var cookiesAccepted = confirm(confirmMsg);
	   
	   if(cookiesAccepted) {
		   alert("Thank you!")
	   }
	   else {
		   alert("No worries then...")
	   }
   }
   
   function setLightTheme () {
	   document.getElementById("stylesheet").href = "css/alt-style.css"
 }
 
 function setDarkTheme () {
	   document.getElementById("stylesheet").href = "css/style.css"
 }
var d = new Date();             
var n = d.toLocaleString([], { hour12: true});
document.getElementById("date").innerHTML = n;
 

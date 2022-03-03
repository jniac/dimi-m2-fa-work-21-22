  
//MOT QUI CHANGE
 //Déclaration des variables
 setInterval(change, 1000);
 var state = 1;
 //Fonction
 function change() {
 state ++;
 if (state == 1) {
    document.getElementById("word-switch").innerHTML = "Hello";
 }  else if (state == 2) {
   document.getElementById("word-switch").innerHTML = "Color";
 }else if (state == 3) {
   document.getElementById("word-switch").innerHTML = "Scroll";
 }else if (state == 4) {
   document.getElementById("word-switch").innerHTML = "Master";
   state = 0;
 }
 } 

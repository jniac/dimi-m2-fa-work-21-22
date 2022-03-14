/* J'ai essayé de modifier la vitesse de scroll entre les deux éléments
pour créer un effet de parallax pour que le texte passe derrière les planches de bois
mais pour une raison que j'ignore, ça ne fonctionne pas.


let text = document.getElementById("text");
let planche = document.getElementById("planche");

window.addEventListener('scroll', function(){

var value = window.scrollY;
text.style.top = value * 0.5 + 'px'; 
planche.style.top = value * 0.15 + 'px'; 

})
*/
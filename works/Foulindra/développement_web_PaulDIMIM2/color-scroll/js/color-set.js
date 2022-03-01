/* Pour ce code je suis aussi parti de 0. Les variables du début appellent les div. 
La fonction suivante permet d'ouvrir les div individuellement. Quand l'une s'ouvre, l'autre se ferme. 
Ces divs expliquent la symbolique des couleurs lors des rêve. 
J'ai choisi les couleurs qui font partie de ma charte graphique. 
*/




let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
    d1.style.display = "none";
    d3.style.display = "none";
  }
};

function tog(){
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
    d1.style.display = "none";
    d2.style.display = "none";
  }
};
togg2.onclick = togg;
togg3.onclick = tog; 


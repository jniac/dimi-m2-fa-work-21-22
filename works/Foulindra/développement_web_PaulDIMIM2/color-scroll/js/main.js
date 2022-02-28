import './color-set.js'
import './deux.js'
import './accordion.js'
import './rond.js'

/* j'appelle toutes les autres pages js ici pour eviter de créer 67 scripts dans l'html */

/* PARALLAX EFFET */

/* 1 variable pour chaque élément scrollable dans la premiere section.
Avec vitesse de scroll differente pour chacun d'eux afin d'obtenir le fameux effet parallax. 
J'ai voulu repartir de 0 pour ce code pour pouvoir bien comprendre le js. */


/* lors du lancement de la page, une musique va se lancer pour etre dans l'immersion du rêve. 
  Il est possible de la desactiver dans la la page js -> main 

   j'ai choisi une illustration flat design qui evoque le voyage et le reve (j'aurai bien aimé la faire moi même mais pas trop le temps)
  Les couleurs principales de cette illu représentent ma charte graphique, portée autour du rêve et de la symbolique des couleurs
  
  J'ai voulu mettre un effet de lucioles qui volent dans la premiere section pour donner un peu de vie et de mouvement a la page mais j'ai pas reussi.. */

let sky = document.getElementById("sky");
let stars = document.getElementById("stars");
let mountain = document.getElementById("mountain");
let lac = document.getElementById("lac");
let herbe = document.getElementById("herbe");
let text = document.getElementById("text");
let button = document.getElementById("button");

window.addEventListener('scroll', function(){

var value = window.scrollY;
sky.style.top = value * 0.5 + 'px'; 
stars.style.top = value * 0.15 + 'px';
mountain.style.top = value * 0.30 + 'px';
lac.style.top = value * -0.02 + 'px';
herbe.style.top = value * 0.10 + 'px';
text.style.top = value  * 0.50 + 'px'; 
button.style.top = value  * 0.50 + 'px'; 

})


/* VOLUME MUSIC */ 

  var audio = document.getElementById("music");
  audio.volume = 0.5;


/* commande js pour regler le volume de la musique, j'ai voulu voir si il était possible de regler le
son d'une musique via css mais j'ai pas trouvé.. mais le js fait l'affaire. */ 
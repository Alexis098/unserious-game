/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");


//todo qui veut ;)
// S'inspirer du script ci-dessous pour faire un décompte "temps restant" et afficher perdu si on ne répond pas dans un délais correct.

function startChrono(){
    let time=0;
    setInterval( //crée une boucle
        function(){
            time++; // 1,2,3,4 etc...
            document.title="ça fait "+time+" secondes que tu réfléchis"; //affiche le temps passé dans le titre de page
        },
    1000 // toutes les 1000 millisecondes
    );
}

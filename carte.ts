/**
 * Module qui permet de créer des cartes et de les manipuler.
 * @packageDocumentation
 */


 /**
 * Énumère la couleur que peuvent prendre les cartes.
 */
export enum Couleur{
    pique,
    carreau,
    trefle,
    cœur
}


/**
 * Représente une carte selon une couleur et une valeur.
 */
export interface Carte{
    couleur:Couleur;
    valeur:number;
}


/**
 * Créer une carte selon sa couleur et une valeur.
 * @param couleur Couleur de la carte.
 * @param valeur Valeur de la carte.
 * @returns Une carte de type Carte, avec des attributs variant selon les paramètres d'entrée.
 */
export function creerCarte({ couleur, valeur }: { couleur: Couleur; valeur: number; }):Carte{
    let carte : Carte = {couleur: couleur ,valeur: valeur};
    return carte
}


/**
 * Affiche une carte dans la console suivant le paramètre carte (ex:"8♠️").
 * @param carte Une carte quelconque.
 */
export function afficherCarte(carte:Carte):void{
   if(carte.couleur == Couleur.pique){
       console.log(carte.valeur + "♠️");
   }else if(carte.couleur == Couleur.carreau){
       console.log(carte.valeur + "♦️");
   }else if(carte.couleur == Couleur.trefle){
       console.log(carte.valeur + "♣️");
   }else {
       console.log(carte.valeur + "♥️");
   }
}


/**
 * Compare 2 cartes données.
 * @param carte1 Une carte quelconque.
 * @param carte2 Une carte quelconque.
 * @returns Renvoie 1 si la première carte est plus forte, 0 si elles ont les mêmes valeurs, et -1 si la première carte est moins forte.
 */
function comparerCartes(carte1:Carte, carte2:Carte):number{
    if(carte1.valeur == carte2.valeur){
        return 0;
    }else if (carte1.valeur > carte2.valeur){
        return 1;
    }else {
        return -1;
    }
}
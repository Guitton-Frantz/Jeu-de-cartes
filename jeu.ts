/**
 * Module qui permet de créer et de manipuler un jeu de cartes.
 * @packageDocumentation
 */

import {Carte} from "./carte";
import {creerCarte} from "./carte";
import {Couleur} from "./carte";
import {afficherCarte} from "./carte";


/**
 * Creer un tableau de 52 cartes.
 * @returns Un tableau de taille 52 de type Carte.
 */
function creerJeu():Array<Carte>{
    let tabCarte:Array<Carte> = [];
    let carteCree:Carte;
    let couleurChange:Couleur = Couleur.pique;

//boucle remplissage tableau
    for (let i = 2; i < 54; i++) {
        carteCree = creerCarte({ couleur: couleurChange, valeur: i });
        tabCarte[i-2] = carteCree;

//alternace couleur des cartes
        if(couleurChange == Couleur.pique){
            couleurChange = Couleur.carreau;
        }else if(couleurChange == Couleur.carreau){
            couleurChange = Couleur.trefle;
        }else if(couleurChange == Couleur.trefle){
            couleurChange = Couleur.cœur
        }else {
            couleurChange = Couleur.pique
        }
    }
    return tabCarte;
}


/**
 * Affiche la carte tirée au debut du tableau dans la console.
 * @param tabCarte Tableau de cartes.
 */
function tirerCarte(tabCarte:Array<Carte>):void{
    let carteTiree:Carte = tabCarte[0];
    console.log(afficherCarte(carteTiree));
}
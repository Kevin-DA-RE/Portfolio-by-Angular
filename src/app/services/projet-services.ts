import { Injectable } from "@angular/core";
import { Projet } from "../models/projet.model";

@Injectable({
    providedIn: 'root',
})

export class ProjetService {
    projet: Projet[] =[
        {
            id: 1,
            nom: "SnapFace",
            descriptif: `Application visant à liker des photos.<br>
            Ce projet a pour but de liker des photos et de montrer le nombre de like au total`,
            technologie: "Angular"
        },
        {
            id: 2,
            nom: "Listing Appareils",
            descriptif: `Application servant de référentiel d'appareil éléctro-ménager.<br>
            Ce projet est conçu pour référentier un nombre lanbda d'appareils éléctro-ménager et de pouvoir simuler leur état de fonctionnement.`,
            technologie: "Angular"
        },
        {
            id: 3,
            nom: "Xnet",
            descriptif: `Application intranet regroupant les tarifications des produits par date.<brW
            Ce projet est une application interne à l'entreprise et donc aucune capture n'est disponible`,
            technologie: "VueJs"
        },
        {
            id: 4,
            nom: "Planing Greta",
            descriptif: `Projet concu pour la mise en place des planings des formateurs Greta suivant leurs localisation.<br>
            Cette application permet de visualiser les status des formateurs et de leurs disponibilités suivant leurs horaires prédifinis.`,
            technologie: "PHP"
        },
        {
            id: 5,
            nom: "Biblioteque Multi-Medias",
            descriptif: `Projet réalisé en React dans le but d'afficher des médias audio et vidéos sur un application web.`,
            technologie: "React"
        },
        {
            id: 6,
            nom: "Jeu de Morpion",
            descriptif: `Jeux de plateau constistant à affronter deux joueurs et à déterminer qui gagnera la partie.<br>
            Jeu disposant d'un compte tour, d'un historique dans lequel le joueur peut revenir à un tour spécifique pour modifier son choix et d'un système indiquant quel joueur a gagné la partie.`,
            technologie: "React"
        },
    ];

    
    getAllProjetService(): Projet[]{
        return this.projet;
    }

    getAllProjetByAngular(): Projet[]{
       const filt = this.projet.filter((projet) => 
      projet.technologie === "Angular"
    )
        return filt;    
    }

    getAllProjetByVue(): Projet[]{
        const filt = this.projet.filter((projet) => 
       projet.technologie === "VueJs"
     )
         return filt;    
     }

     getAllProjetByPHP(): Projet[]{
        const filt = this.projet.filter((projet) => 
       projet.technologie === "PHP"
     )
         return filt;    
     }

     getAllProjetByReact(): Projet[]{
        const filt = this.projet.filter((projet) => 
       projet.technologie === "React"
     )
         return filt;    
     }


    
}
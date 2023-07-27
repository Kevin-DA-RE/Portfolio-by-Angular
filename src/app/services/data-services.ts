import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Projet } from '../models/projet.model';
import { Biographie } from '../models/bio.model';

@Injectable({
  providedIn: 'root',
})
export class dataService {

    bio = new Biographie(
        "Bonjour ,",    
        "DA RE",
        "Kévin",
        32,
        `Suite à l'obtention de mon diplome en 2020, ma passion est devenu mon travail. <br>
        Durant toutes mes experiences professionnelles, l'informatique a toujours été une source d'inspirations.<br><br>
        Ayant acquis une première expérience en tant que développeur chez Servius, j'ai su m'adapter à mon envirronnement de travail (Linux, MacOs) tout en développant des fonctionnalités<br>
        sur une plateforme web de tarification de produits trié par date. Cette application fût développé en VueJs et connecté sur une base de données PostgreSQL par le biai d'un back office en Java.<br>
        Cette expérience fut enrichissante en matière de développement mais également dans le domaine de serveur car j'ai pratiqué des commandes Unix afin de pouvoir naviguer entre les machines.<br>
        A partir de là, j'ai continué d'approfondir mes connaissances en créeant des projets web en pratiquant un autre framework: Angular comme ce portfolio.<br>
        Etant une personne très ouverte, j'aime m'informer au quotidien sur le développement informatique afin de pouvoir mettre en pratique mes connaissances au profit de projets web..
        `,
        `Curiosité, Déterminé, Investit`,
        "06 50 06 02 81",
        "dare.kevin21000@gmail.com",
        "https://github.com/Kevin-DA-RE",
        "https://www.linkedin.com/in/k%C3%A9vin-da-re/"
    );

    getBiographie(): Biographie{
        return this.bio;
    }

    // Listing des expériences
    experience: Experience[] = [
        {
          id: 1,
          titre: 'Developpeur intégrateur Web',
          entreprise: 'Fimainfo',
          duree: '18 mois',
          description: `Intégration script pour application web de CallCenter<br>
        Analyse données en base et échange avec client via outils de ticketing.<br>
        J'ai conçus des projets web sous forme de scripts suivant le besoin client.<br>
        J'ai développé différentes fonctionnalité ayant pour but de pouvoir envoyer des e-mails et sms<br>
        suivant le type de réponse client.
        A travers le support, j'ai apporté de l'expertise métier et différentes informations concernant le bon fonctionnement de plateforme web.
        `,
          support: 'Plateforme CallCenter Hermès',
          urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP02ckPJGdHmLqVXv9NK9Z2Uf-Q04Lv3QXt5TzG2zykZr7EAfYMf_M571HfT6vlwy93Y&usqp=CAU"
          
        },
        {
            id: 2,
          titre: 'Developpeur Web',
          entreprise: 'Servius',
          duree: '3 mois',
          description: `Développement application web sur les tarifications des produits par date.<br>
        A partir du besoin client, j'ai développé de nouveaux composants ainsi que de nouvelle fonctionnalités pour l'application web.<br>
        Le but étant de faire afficher des tarifs à partir d'une date et d'une période précise, j'ai su faire preuve de méthodologie ainsi que d'une organisation simple <br>
        afin de faire afficher ces différentes informations dans les composants prévus à leurs effets.<br>    
        Durant cet expérience forte enrichissante, j'ai découvert un tout autre environement informatique que windows puisque j'ai appris a développer sous environnement Linux.<br>
        Au dela du développement, j'ai appris à communiquer entre différents serveurs gràce à la commande Unix <span>ssh</span>, à naviguer à travers les dossiers (<span>ls, cd, pwd</span>), et copier des dossiers via la commande <span>scp</span><br>
        `,
          support: 'Front-End: Vue Js Back-End Java',
          urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP02ckPJGdHmLqVXv9NK9Z2Uf-Q04Lv3QXt5TzG2zykZr7EAfYMf_M571HfT6vlwy93Y&usqp=CAU"
        },
        {
            id: 3,
          titre: 'Dessinateur Projeteur',
          entreprise: 'SNAAM, Workshape, Oberthur',
          duree: '4 ans',
          description: `Création de modèle d'ensemble mécanique en 3D <br> 
        pour tout type de struture: Automobile, Ferroviaire, Prototype pour aéronautique. <br>
        A partir d'un cahier des charges, j'ai analysé le besoin le client en relevant les principales caractéristiques techniques du projet mais en tenant comptes des contraintes que devais rencontrer ce dernier.<br>
        j'ai donc concus des projets mécaniques sur un logiciel de conception 3D <span>CATIA</span><br>
        J'ai aussi mise en place des plans d'ensembles et de définitions afin d'afficher tous les informations nécessaires à sa conception.<br>
        Durant toutes ses expériences en tant que dessinateur industriel, j'ai appris à analyser le besoin client et concevoir un projet répondatn à leur demande.`,
        urlImage: "https://i.imgur.com/fmJP7gR.jpeg"
        },
        {
            id: 4,
          titre: 'Operateur Commande Numérique',
          entreprise: 'Monnot, Tyco, JTEKT',
          duree: '3 ans',
          description: `Usinage de pièces mécanique <br>
        Suite à  l'obtention de mon BTS en industrie mécanique, j'ai exercé sur différentes missions intérim le poste d'opérateur commande numérique.<br>
        A l'aide de différents outils mis à disposition, j'ai fabriqué tout types de pièces mécanique servant à être mise en place dans des ensemble mécanique`,
    
        urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOz3PCcuEAgFGuThVnCqfPMoyWq5WYGXx_5FOa_6lUNtuVa0A-C_RwC2FpI4UkGM82IQ&usqp=CAU"
        },
      ];
    
      getAllExperienceService(): Experience[] {
        return this.experience;
      }

    // Listing des projets
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
        {
            id: 7,
            nom: "Referentiel Suivi Activité Metier (SAM)",
            descriptif: `API servant à recueillir les informations depuis un réfentiel distant pour alimenter la plateforme de CallCenter.<br>
            A partir d'un appel API via le module Axios, nous envoyons une requête avec un middleware spécifique afin de pouvoir recevoir les données et de les retransmettre à la plateforme dédiée.`,
            technologie: "NodeJs"
        },
        {
            id: 8,
            nom: "Listing Produits",
            descriptif: `API recueillant les objets enregistrés sur une base NoSQL MongoDB.<br>
            Ce projet permet à l'utilisateur de pouvoir visionner, enregistrer, modifier ou encore supprimer un objet de la collection sous authentification de l'utilisateur.`,
            technologie: "NodeJs"
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

     getAllProjetByNodeJs(): Projet[]{
        const filt = this.projet.filter((projet) => 
       projet.technologie === "NodeJs"
     )
         return filt;    
     }
}
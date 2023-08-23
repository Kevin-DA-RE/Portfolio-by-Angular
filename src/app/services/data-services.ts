import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Projet } from '../models/projet.model';
import { Biographie } from '../models/bio.model';
import { Formation } from '../models/formation-model';
import { Skill } from '../models/skill';

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
        Ayant acquis une première expérience en tant que développeur chez Servius, j'ai su m'adapter à mon envirronnement de travail (Linux, MacOs) tout en développant des fonctionnalités
        sur une plateforme web de tarification de produits trié par date.<br> Cette application fût développé en <span>VueJs</span> et connecté sur une base de données PostgreSQL par le biai d'un back office en Java.<br>
        Cette expérience fut enrichissante en matière de développement mais également dans le domaine de serveur car j'ai pratiqué des commandes Unix afin de pouvoir naviguer entre les machines.<br>
        A partir de là, j'ai continué d'approfondir mes connaissances en créeant des projets web en pratiquant un autre framework: Angular comme ce portfolio.<br>
        Etant une personne très ouverte, je m'informe au quotidien sur le développement informatique afin de pouvoir mettre en pratique mes connaissances au profit de projets web.
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
        Conception de projet Web sous forme de script avec fonctionnalités d'envoi E-mail et SMS<br>
        Aide et assistance au support téléphonique pour accompagner le client.
        `,
          support: 'Plateforme CallCenter Hermès' 
        },
        {
            id: 2,
          titre: 'Developpeur Web',
          entreprise: 'Servius',
          duree: '3 mois',
          description: `Développement application web sur les tarifications des produits par date.<br>
          Conception module d'affichage des données de tarifications suivant un processus ordonnées et détaillé.<br>
          Liaison interface web avec le serveur via module en Java.<br>
          Découverte d'un nouvel environnement de travail (WebStorm) et d'autres système d'exploitation (MacOs).<br>
          Navigation entre serveur via commande Unix.<br>
          `,
          support: 'Front-End: Vue Js Back-End Java'
        },
        {
            id: 3,
          titre: 'Dessinateur Projeteur',
          entreprise: 'SNAAM, Workshape, Oberthur',
          duree: '4 ans',
          description: `Création de modèle d'ensemble mécanique en 3D pour tout type de struture: Automobile, Ferroviaire, Prototype pour aéronautique. <br>
          Analyse cahier des charges et conception projets sur logiciels 3D.<br>
          Conception et modélisation 3D des projets sur logiciel CATIA.<br>
          Création de plans techniques pour la réalisations des projets.`
        },
        {
            id: 4,
          titre: 'Operateur Commande Numérique',
          entreprise: 'Monnot, Tyco, JTEKT',
          duree: '3 ans',
          description: `Usinage de pièces mécanique <br>
        Suite à  l'obtention de mon BTS en industrie mécanique, j'ai exercé sur différentes missions intérim le poste d'opérateur commande numérique.<br>
        A l'aide de différents outils mis à disposition, j'ai fabriqué tout types de pièces mécanique servant à être mise en place dans des ensemble mécanique`,
    
        },
      ];
    
      getAllExperienceService(): Experience[] {
        return this.experience;
      }

    // Listing Formations

    formation: Formation[] =[
      {
        id: 1,
        nom: "Titre Professionnel Concepteur Développeur d'Applications",
        location: "Lycée Le Castel - Dijon",
        date: "2020"
      },
      {
        id: 2,
        nom: "BTS Industrialisation des Produits Mecaniques",
        location: "Lycée des Métiers Jean CLaude Aubry - Bourgoin Jallieu",
        date: "2013"
      },
      {
        id: 3,
        nom: "BAC Professionnel Technicien d'Usinage",
        location: "Lycée Privé Saint Joseph - Dijon",
        date: "2011"
      },
      {
        id: 4,
        nom: "BEP Métiers de Production sur Machines Informatisées",
        location: "Lycée Privé Saint Joseph - Dijon",
        date: "2009"
      }
    ];

    getAllformation(): Formation[]{
      return this.formation;
    }
    // Listing des competences

    skills : Skill[]= [
      {
        id: 1,
        titre: "Angular",
        src: "../../assets/angular.png",
        type: 'framework'
      },
      {
        id: 2,
        titre: "VueJs",
        src: "../../assets/vuejs.png",
        type: 'framework'
      },
      {
        id: 3,
        titre: "NodeJs",
        src: "../../assets/node.png",
        type: 'framework'
      },
      {
        id: 4,
        titre: "SQL",
        src: "../../assets/sql.png",
        type: 'langage'
      },
      {
        id: 5,
        titre: "VS Code",
        src: "../../assets/vscode.png",
        type: 'other'
      },
      {
        id: 6,
        titre: "Postman",
        src: "../../assets/postman.png",
        type: 'other'
      },
      {
        id: 7,
        titre: "MacOs",
        src: "../../assets/macos.png",
        type: 'other'
      },
      {
        id: 8,
        titre: "Linux",
        src: "../../assets/linux.png",
        type: 'other'
      },
      {
        id: 9,
        titre: "GitHub",
        src: "../../assets/github.png",
        type: 'other'
      },
      {
        id: 10,
        titre: "WebStorm",
        src: "../../assets/webstorm.png",
        type: 'other'
      }

    ]

    getSkillFramework(): Skill[]{
      const filt = this.skills.filter((skill) => 
      skill.type === "framework"
    )
        return filt;    
    }
    getSkillLangage(): Skill[]{
      const filt = this.skills.filter((skill) => 
      skill.type === "langage"
    )
        return filt;    
    }
    getSkillOther(): Skill[]{
      const filt = this.skills.filter((skill) => 
      skill.type === "other"
    )
        return filt;    
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
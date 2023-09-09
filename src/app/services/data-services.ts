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
          duree: "Aujourd'hui",
          description: `Intégration script pour application web de CallCenter<br>
        Analyse données en base et échange avec client via outils de ticketing.<br>
        Conception de projet Web sous forme de script avec fonctionnalités d'envoi E-mail et SMS<br>
        Conception d'interface web ayant pour but d'afficher les données de gestion de l'entreprise
        Aide et assistance au support téléphonique pour accompagner le client.
        `,
          support: 'Plateforme CallCenter Hermès / Front-End: Angular Back-end: Api Symfony' 
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
          support: 'Front-End: Vue Js / Back-End Java'
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
        date: "2021"
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

    skill : Skill[]= [
      {
        id: 1,
        titre: "Angular",
        src: "../../assets/cmp/angular.png"
      },
      {
        id: 2,
        titre: "VueJs",
        src: "../../assets/cmp/vuejs.png"
      },
      {
        id: 3,
        titre: "SQL",
        src: "../../assets/cmp/sql.png"
      },
      {
        id: 3,
        titre: "Java",
        src: "../../assets/cmp/java.png"
      },
      {
        id: 7,
        titre: "Linux",
        src: "../../assets/cmp/linux.png"
      },
      {
        id: 8,
        titre: "GitHub",
        src: "../../assets/profil/github.png"
      }
    ]

    getAllSKill(): Skill [] {
      return this.skill;
    }



    // Listing des projets
      projet: Projet[] =[
        {
            id: 1,
            nom: "SnapFace",
            descriptif: `Application visant à liker des photos.<br>
            Ce projet a pour but de liker des photos et de montrer le nombre de like au total`,
            technologie: "Angular",
            url: "http://snap-face.alwaysdata.net/"
        },
        {
            id: 2,
            nom: "Listing Appareils",
            descriptif: `Application servant de référentiel d'appareil éléctro-ménager.<br>
            Ce projet est conçu pour référentier un nombre lanbda d'appareils éléctro-ménager et de pouvoir simuler leur état de fonctionnement.`,
            technologie: "Angular",
            url: "http://listing-appareils.alwaysdata.net"
        },
        {
            id: 3,
            nom: "Xnet",
            descriptif: `Application intranet regroupant les tarifications des produits par date.<br><br>
            Ce projet est une application interne à l'entreprise et donc aucune capture n'est disponible
            `,
            technologie: "VueJs"
        },
        {
            id: 4,
            nom: "Planing Greta",
            descriptif: `Projet concu pour la mise en place des planings des formateurs Greta suivant leurs localisation.<br><br>
            Ce projet est une application interne à l'entreprise et donc aucune capture n'est disponible`,
            technologie: "PHP"
        }
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

     getProjetById(projetId: number): Projet {
      const projet = this.projet.find(projet => projet.id === projetId);
      if (!projet){
        throw new Error('Projet not found :');
      } else {
        return projet;
      }
    }
}
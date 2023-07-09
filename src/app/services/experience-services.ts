import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
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
}

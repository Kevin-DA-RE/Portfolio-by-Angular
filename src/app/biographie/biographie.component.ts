import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss']
})
export class BiographieComponent {

  
  titre!: String;
  nom!: String;
  prenom!: String;
  age!: Number;
  description!: String;
  caractere !: string;
  tel!: String;
  mail!: String;
  github!: String;
  linkedin!: String;
  
  ngOnInit() {

    this.titre = "Bonjour ,";    
    this.nom = "DA RE";
    this.prenom = "Kévin";
    this.age = 32;
    this.description = `Suite à l'obtention de mon diplome en 2020, ma passion est devenu mon travail. <br>
    Durant toutes mes experiences professionnelles, l'informatique a toujours été une source d'inspirations.<br><br>
    Ayant acquis une première expérience en tant que développeur chez Servius, j'ai su m'adapter à mon envirronnement de travail (Linux, MacOs) tout en développant des fonctionnalités<br>
    sur une plateforme web de tarification de produits trié par date. Cette application fût développé en VueJs et connecté sur une base de données PostgreSQL par le biai d'un back office en Java.<br>
    Cette expérience fut enrichissante en matière de développement mais également dans le domaine de serveur car j'ai pratiqué des commandes Unix afin de pouvoir naviguer entre les machines.<br>
    A partir de là, j'ai continué d'approfondir mes connaissances en créeant des projets web en pratiquant un autre framework: Angular comme ce portfolio.<br>
    Etant une personne très ouverte, j'aime m'informer au quotidien sur le développement informatique afin de pouvoir mettre en pratique mes connaissances au profit de projets web..
    `;
    this.caractere = `Curiosité, Déterminé, Investit`;
    this.tel = "06 50 06 02 81";
    this.mail = "dare.kevin21000@gmail.com";
    this.github = "https://github.com/Kevin-DA-RE";
    this.linkedin = "https://www.linkedin.com/in/k%C3%A9vin-da-re/";
   
  }
}

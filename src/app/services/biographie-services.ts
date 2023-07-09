import { Injectable } from "@angular/core",
import { Biographie } from "../models/biographie.model",

@Injectable({
    providedIn: 'root',
  })

export class BiographieService {
    bio: Biographie[] = [{
        titre: 'Bonjour, ',
        nom!: "DA RE",
        prenom!: "Kévin",
        age!: 28,
        description!: `Devenu développeur web suite à l'obtention de mon diplome en 2020, ma passion est devenu mon travail. <br>
        La <span>curiosité</span>, <span>détermination</span>, ainsi que l'<span>envie</span>, sont mes 3 traits de caractères principaux.<br>
        Je suis quelqu'un de passioné et d'investit dans mon travail et j'aime élargir mes connaissance au quotidien.<br>
        De part mes expériences, j'ai toujours pratiqué le code informatiqeu sous différents formats:<br>
        Partant d'un script pour définir des trajetcoires d'usinages jusqu'à concevoir des projets mécaniques sous logiciel 3D Catia, l'informatique a toujours une source d'inspirations.<br<
        Aujourd'hui le fait de concevoir des applications web en utilisation des technologies modernes ainsi que connaitre mon envirronement de travail représente pour moi un moyen d'élargir mon domaine de compétence et de connaissances en la matière.<br>
        Le fait d'avoir pratiqué sur développement sur d'autres sytème d'exploitation que windows m'a permis de m'ouvrir un peu plus et d'élargir mes zones de compétences.<br>
        Cela représente pour moi une source enrichissante de connaissances que je m'efforce de mettre en pratique sur mes projets au quotidien afin d'approfondir mes compétences.
        `,
        tel!: "06 50 06 02 81",
        mail!: "dare.kevin21000@gmail.com",
        GitHub!: "https://github.com/Kevin-DA-RE",
        Linkedin!: "https://www.linkedin.com/in/k%C3%A9vin-da-re/",
    }]
}
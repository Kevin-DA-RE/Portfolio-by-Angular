import { Component, Input} from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
 
  title = "Mes Competences";

  @Input() skillComp !: Skill 
}

import { Component, OnInit} from '@angular/core';
import { dataService } from '../services/data-services';
import { Skills } from '../models/skills';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit{
  title = "Mes Competences";
  skill !: Skills[];

  constructor(private skills: dataService){}

  ngOnInit() {
    this.skill = this.skills.getAllSkills();
  }
}

import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-competence-list',
  templateUrl: './competence-list.component.html',
  styleUrls: ['./competence-list.component.scss']
})
export class CompetenceListComponent implements OnInit{

  skill !: Skill[];


  constructor(private skills: dataService){}
  title = "Mes compétences"

  ngOnInit() {
    this.skill = this.skills.getAllSKill();

  }
}

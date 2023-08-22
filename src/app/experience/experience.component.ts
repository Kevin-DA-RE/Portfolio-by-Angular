import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit{

  title = "Mes experiences";
  experience!: Experience[];
  constructor(private experienceService: dataService){}

  ngOnInit(){
    this.experience = this.experienceService.getAllExperienceService()
  }
  
}

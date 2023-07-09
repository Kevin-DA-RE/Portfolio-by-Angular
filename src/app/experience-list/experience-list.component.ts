import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../services/experience-services';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})



export class ExperienceListComponent implements OnInit{
  experience!: Experience[];

  constructor(private experienceService: ExperienceService){}
  
  ngOnInit() {
    this.experience = this.experienceService.getAllExperienceService()
  }
}

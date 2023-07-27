import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})

export class ExperienceListComponent implements OnInit{

  experience!: Experience[];
  constructor(private experienceService: dataService){}

  ngOnInit(){
    this.experience = this.experienceService.getAllExperienceService()
  }
}
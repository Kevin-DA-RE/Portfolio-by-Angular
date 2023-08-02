import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/formation-model';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss']
})
export class FormationListComponent implements OnInit{

  title = "Mes Formations";

  formation!: Formation[];
  constructor(private formationService: dataService){}

  ngOnInit(){
    this.formation = this.formationService.getAllformation()
  }

}

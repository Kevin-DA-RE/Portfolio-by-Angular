import { Component, OnInit} from '@angular/core';
import { Formation } from '../models/formation-model';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit{

title = "Mes Formations";

formation!: Formation[];
constructor(private formationService: dataService){}

ngOnInit(){
    this.formation = this.formationService.getAllformation()
  }
}

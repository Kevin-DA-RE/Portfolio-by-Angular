import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { dataService } from '../services/data-services';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit{
  projAngular!: Projet[];
  projVue!: Projet[];
  projPHP!: Projet[];
  projReact!: Projet[];

  

  constructor(private projetService: dataService){}

  ngOnInit(){
    this.projAngular = this.projetService.getAllProjetByAngular();
    this.projVue = this.projetService.getAllProjetByVue();
    this.projPHP = this.projetService.getAllProjetByPHP();
    this.projReact = this.projetService.getAllProjetByReact();
  }
  
}

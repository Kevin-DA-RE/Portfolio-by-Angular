import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet-services';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit{
  projet!: Projet[];
  projAngular!: Projet[];
  projVue!: Projet[];
  projPHP!: Projet[];
  projReact!: Projet[];

  

  constructor(private projetService: ProjetService){}

  ngOnInit(){
    this.projet = this.projetService.getAllProjetService();

    this.projAngular = this.projetService.getAllProjetByAngular();
    this.projVue = this.projetService.getAllProjetByVue();
    this.projPHP = this.projetService.getAllProjetByPHP();
    this.projReact = this.projetService.getAllProjetByReact();
  }
  
}

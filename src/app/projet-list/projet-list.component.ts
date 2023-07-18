import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet-service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent {
  projet!: Projet[];

  constructor(private projetService: ProjetService){}

  ngOnInit(){
    this.projet = this.projetService.getAllProjetService()
  }
  
}

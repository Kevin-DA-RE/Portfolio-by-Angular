import { Component, Input } from '@angular/core';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
@Input() projComp!: Projet;
}

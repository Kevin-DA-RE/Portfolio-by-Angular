import { Component, Input, OnInit} from '@angular/core';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {
@Input() projComp!: Projet;


ngOnInit() {

  console.log("depuis le component");
  console.log(this.projComp);   
}

}

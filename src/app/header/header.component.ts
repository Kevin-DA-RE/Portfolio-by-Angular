import { Component, OnInit } from '@angular/core';
import { PrimeIcons,MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [MessageService]
})
export class HeaderComponent implements OnInit{
  
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'A propos',
        url: '#bio'
      },
      {
        label: 'Formations',
        url: '#form-list'
      },
      {
        label: 'Experiences',
        url: '#exp-list'
      },
      {
        label: 'Competences',
        url: '#competence'
      },
      {
        label: 'Projets',
        url: '#proj-list'
      },
      
    ]
  }
}

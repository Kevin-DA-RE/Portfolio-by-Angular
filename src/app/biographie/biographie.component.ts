import { Component, OnInit } from '@angular/core';
import { dataService } from '../services/data-services';
import { Biographie } from '../models/bio.model';

@Component({
  selector: 'app-biographie',
  templateUrl: './biographie.component.html',
  styleUrls: ['./biographie.component.scss']
})
export class BiographieComponent implements OnInit {

  bio !: Biographie;
  constructor(private bioService: dataService){}

  ngOnInit() {
    this.bio = this.bioService.getBiographie();
   
  }
}

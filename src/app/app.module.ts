import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceComponent } from './experience/experience.component';
import { BiographieComponent } from './biographie/biographie.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceListComponent,
    ExperienceComponent,
    BiographieComponent,
    HeaderComponent,
    HomeComponent,
    CompetenceComponent,
    ProjetComponent,
    ProjetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

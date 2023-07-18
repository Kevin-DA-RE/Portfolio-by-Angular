import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographieComponent } from './biographie/biographie.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetComponent } from './projet/projet.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'competence', component: CompetenceComponent},
  {path: 'about', component: BiographieComponent},
  {path: 'experience', component: ExperienceListComponent},
  {path: 'projet', component: ProjetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

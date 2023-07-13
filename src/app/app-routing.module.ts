import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographieComponent } from './biographie/biographie.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'about', component: BiographieComponent},
  {path: 'experience', component: ExperienceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

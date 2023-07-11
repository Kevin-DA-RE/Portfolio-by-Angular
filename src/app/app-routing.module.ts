import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographieComponent } from './biographie/biographie.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'about', component: BiographieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

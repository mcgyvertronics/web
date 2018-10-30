import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { MaoRoboticaComponent } from './projects/maorobotica/maorobotica.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

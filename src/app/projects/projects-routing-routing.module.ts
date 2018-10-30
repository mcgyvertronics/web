import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeRobotComponent } from '../projects/snakerobot/snakerobot.component';
import { MaoRoboticaComponent } from '../projects/maorobotica/maorobotica.component';
import { RoboInspecaoComponent } from '../projects/roboinspecao/roboinspecao.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent,
    children: [
      { path: 'snakerobot', component: SnakeRobotComponent },
      { path: 'maorobotica', component: MaoRoboticaComponent },
      { path: 'roboinspecao', component: RoboInspecaoComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingRoutingModule { }

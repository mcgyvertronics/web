import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SnakeRobotComponent } from "./snakerobot/snakerobot.component";
import { MaoRoboticaComponent } from './maorobotica/maorobotica.component';
import { RoboInspecaoComponent } from './roboinspecao/roboinspecao.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'equipe', component: EquipeComponent},
  {path: 'snakerobot', component: SnakeRobotComponent},
  {path: 'maorobotica', component: MaoRoboticaComponent},
  {path: 'roboinspecao', component: RoboInspecaoComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnakeRobotComponent } from "./projects/snakerobot/snakerobot.component";
import { MaoRoboticaComponent } from './maorobotica/maorobotica.component';
import { RoboInspecaoComponent } from './roboinspecao/roboinspecao.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ProjectsRoutingModule } from './projects/projects-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnakeRobotComponent,
    MaoRoboticaComponent,
    RoboInspecaoComponent,
    EquipeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnakeRobotComponent } from "./projects/snakerobot/snakerobot.component";
import { MaoRoboticaComponent } from './projects/maorobotica/maorobotica.component';
import { RoboInspecaoComponent } from './projects/roboinspecao/roboinspecao.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { PostsComponent } from './projects/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnakeRobotComponent,
    MaoRoboticaComponent,
    RoboInspecaoComponent,
    EquipeComponent,
    ProjectsComponent,
    PostsComponent,
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
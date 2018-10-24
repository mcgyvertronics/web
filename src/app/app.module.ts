import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SnakeRobotComponent } from "./snakerobot/snakerobot.component";
import { MaoRoboticaComponent } from './maorobotica/maorobotica.component';
import { RoboInspecaoComponent } from './roboinspecao/roboinspecao.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnakeRobotComponent,
    MaoRoboticaComponent,
    RoboInspecaoComponent,
    EquipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
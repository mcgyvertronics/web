import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maorobotica',
  templateUrl: './maorobotica.component.html',
  styleUrls: ['./maorobotica.component.css']
})
export class MaoRoboticaComponent implements OnInit {

  descricao = 'Mão Robótica - Mão robótica humanoide, destinada a proporcionar inclusão e acessibilidade a portadores de deficiência que não tenha as mãos. Em processo de desenvolvimento, espera-se ao final das pesquisas e desenvolvimento que seja capaz de captar sinais eletromiográficos dos nervos residuais. No momento controlada por acionamento manual.';

  constructor() { }

  ngOnInit() {
  }

}

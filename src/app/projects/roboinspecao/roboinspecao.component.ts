import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roboinspecao',
  templateUrl: './roboinspecao.component.html',
  styleUrls: ['./roboinspecao.component.css']
})
export class RoboInspecaoComponent implements OnInit {

  descricao='Robô de Inspeção - Destinado inicialmente a inspeção em dutos e minas, esse robô com rodas vai ser equipado com esteira e enviar imagens e dados de dutos de difícil acesso, controlado de forma remota, preservando o trabalhador em eventual exposição a locais insalubres para inspeção. Em fase de pesquisa e desenvolvimento';

  constructor() { }

  ngOnInit() {
  }

}

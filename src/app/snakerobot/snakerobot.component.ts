import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-snakerobot',
    templateUrl: './snakerobot.component.html',
    styleUrls: ['./snakerobot.component.css']
})
export class SnakeRobotComponent implements OnInit {
    descricao = 'SNAKE ROBOT - Robô em formato de cobra destinado a ajudar no resgate de vítimas em desmoronamentos, ou inspeção em locais de difícil acesso, captando te transmitindo dados, coordenadas e sendo controlado remotamente por conexão Wifi.';
    constructor() { }
    ngOnInit() {
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo1-aula3',
  templateUrl: './modulo1-aula3.component.html',
  styleUrls: ['./modulo1-aula3.component.css']
})
export class Modulo1Aula3Component {
  constructor(
    private router: Router
    ) {}

  ir() {
    this.router.navigate(['atividade-modulo1'])
  }

  voltar() {
    this.router.navigate(['modulo1-aula2'])
  }
}

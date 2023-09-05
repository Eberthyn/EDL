import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao-modulo2',
  templateUrl: './introducao-modulo2.component.html',
  styleUrls: ['./introducao-modulo2.component.css']
})
export class IntroducaoModulo2Component {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['modulo2-aula1'])
  }

  voltar() {
    this.router.navigate(['atividade-modulo1'])
  }
}

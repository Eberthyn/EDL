import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao-modulo1',
  templateUrl: './introducao-modulo1.component.html',
  styleUrls: ['./introducao-modulo1.component.css']
})
export class IntroducaoModulo1Component {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['modulo1-aula1'])
  }

  voltar() {
    this.router.navigate(['introducao'])
  }
}
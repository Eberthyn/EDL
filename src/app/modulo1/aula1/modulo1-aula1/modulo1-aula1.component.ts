import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo1-aula1',
  templateUrl: './modulo1-aula1.component.html',
  styleUrls: ['./modulo1-aula1.component.css']
})
export class Modulo1Aula1Component {

  constructor(
    private router: Router
    ) {}

  ir() {
    this.router.navigate(['modulo1-aula2'])
  }

  voltar() {
    this.router.navigate(['introducao-modulo1'])
  }
}

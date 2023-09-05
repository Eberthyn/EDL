import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo1-aula2',
  templateUrl: './modulo1-aula2.component.html',
  styleUrls: ['./modulo1-aula2.component.css']
})
export class Modulo1Aula2Component {
  constructor(
    private router: Router
    ) {}

  ir() {
    this.router.navigate(['modulo1-aula3'])
  }

  voltar() {
    this.router.navigate(['modulo1-aula1'])
  }
}

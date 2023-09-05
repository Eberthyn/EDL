import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo2-aula2',
  templateUrl: './modulo2-aula2.component.html',
  styleUrls: ['./modulo2-aula2.component.css']
})
export class Modulo2Aula2Component {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['modulo2-aula3'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula1'])
  }
}

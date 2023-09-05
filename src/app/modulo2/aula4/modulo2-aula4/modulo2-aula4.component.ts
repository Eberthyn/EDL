import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo2-aula4',
  templateUrl: './modulo2-aula4.component.html',
  styleUrls: ['./modulo2-aula4.component.css']
})
export class Modulo2Aula4Component {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['modulo2-aula5'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula3'])
  }
}

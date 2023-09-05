import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo2-aula5',
  templateUrl: './modulo2-aula5.component.html',
  styleUrls: ['./modulo2-aula5.component.css']
})
export class Modulo2Aula5Component {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['atividade-modulo2'])
  }

  voltar() {
    this.router.navigate(['modulo2-aula4'])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent {
  constructor(
    private router: Router
  ) { }

  ir() {
    this.router.navigate(['introducao-modulo1'])
  }

  voltar() {
    this.router.navigate([''])
  }
}

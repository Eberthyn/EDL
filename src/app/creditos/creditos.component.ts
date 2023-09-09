import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent {
  constructor(
    private router: Router
  ) { }

  voltar() {
    this.router.navigate([''])
  }
}
